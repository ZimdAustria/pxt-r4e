enum R4eMotorboards {
    keystudio,
    waveshare
}

enum R4eMotorDirection {
    forward,
    backward,
    left,
    right
}
enum R4eMotor {
    Right = 0x1,
    Left = 0x2,
}

enum R4eTurn {
    Forward = 0x1,
    Backward = 0x2,
}

namespace r4eMotor {
    let speedSetting = 10;
    // Set pins for waveshare motorboard on default
    let PWMA = AnalogPin.P8;
    let AIN1 = DigitalPin.P13;
    let AIN2 = DigitalPin.P12;
    let PWMB = AnalogPin.P16;
    let BIN1 = DigitalPin.P14;
    let BIN2 = DigitalPin.P15;

    export function changePinSetting(motorboard: R4eMotorboards){
        if (motorboard == R4eMotorboards.keystudio) {
            PWMA = AnalogPin.P1;
            AIN1 = DigitalPin.P13;
            AIN2 = DigitalPin.P12;
            PWMB = AnalogPin.P2;
            BIN1 = DigitalPin.P16;
            BIN2 = DigitalPin.P15;
            // enable pin
            pins.digitalWritePin(DigitalPin.P14,1);
        }
    }

    export function motorStop(m: R4eMotor): void {
        if (m == R4eMotor.Right)
            pins.analogWritePin(PWMA, 0)
        else
            pins.analogWritePin(PWMB, 0)
    }

    export function motorRun(m: R4eMotor, index: R4eTurn, speed: number): void {
        setSpeed(speed);
        speed = r4eSpeed() * 64 - 1; // map 0 to 1023
        if (m == R4eMotor.Right) {
            pins.analogWritePin(PWMA, speed)
            if (index == R4eTurn.Forward) {
                pins.digitalWritePin(AIN1, 1)
                pins.digitalWritePin(AIN2, 0)
            } else {
                pins.digitalWritePin(AIN1, 0)
                pins.digitalWritePin(AIN2, 1)
            }
        } else {
            pins.analogWritePin(PWMB, speed)
            if (index == R4eTurn.Forward) {
                pins.digitalWritePin(BIN1, 1)
                pins.digitalWritePin(BIN2, 0)
            } else {
                pins.digitalWritePin(BIN1, 0)
                pins.digitalWritePin(BIN2, 1)
            }
        }
    }

    function setSpeed(newSpeed: number) {
        newSpeed = (newSpeed < 0) ? 0 : newSpeed;
        newSpeed = (newSpeed > 16) ? 16 : newSpeed;
        speedSetting = newSpeed;
    }
    
    export function r4eSpeed() {
        return speedSetting;
    }

    function driveForward(seconds: number, speed: number) :void {
        motorRun(R4eMotor.Right, R4eTurn.Forward, speed)
        motorRun(R4eMotor.Left, R4eTurn.Forward, speed)
        basic.pause(seconds * 1000)
        motorStop(R4eMotor.Right)
        motorStop(R4eMotor.Left)
    }

    function driveBackward(seconds: number, speed: number) :void {
        motorRun(R4eMotor.Right, R4eTurn.Backward, speed)
        motorRun(R4eMotor.Left, R4eTurn.Backward, speed)
        basic.pause(seconds * 1000)
        motorStop(R4eMotor.Right)
        motorStop(R4eMotor.Left)
    }

    function driveLeft(seconds: number, speed: number) :void {
        motorRun(R4eMotor.Right, R4eTurn.Forward, speed)
        motorRun(R4eMotor.Left, R4eTurn.Backward, speed)
        basic.pause(seconds * 1000)
        motorStop(R4eMotor.Right)
        motorStop(R4eMotor.Left)
    }

    function driveRight(seconds: number, speed: number) :void {
        motorRun(R4eMotor.Right, R4eTurn.Backward, speed)
        motorRun(R4eMotor.Left, R4eTurn.Forward, speed)
        basic.pause(seconds * 1000)
        motorStop(R4eMotor.Right)
        motorStop(R4eMotor.Left)
    }

    export function moveInDirection(direction: R4eMotorDirection, seconds: number, speed: number): void {
        setSpeed(speed);
        speed = r4eMotor.r4eSpeed();
        if (direction == R4eMotorDirection.forward) {
            driveForward(seconds, speed)
        } else if (direction == R4eMotorDirection.backward) {
            driveBackward(seconds, speed)
        } else if (direction == R4eMotorDirection.left) {
            driveLeft(seconds, speed)
        } else if (direction == R4eMotorDirection.right) {
            driveRight(seconds, speed)
        }
    }

}



