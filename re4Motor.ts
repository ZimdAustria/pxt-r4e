
enum Richtung {
    forward,
    backward,
    left,
    right
}
enum Motor {
    Right = 0x1,
    Left = 0x2,
}

enum Dir {
    Forward = 0x1,
    Backward = 0x2,
}

let PWMA = AnalogPin.P8;
let AIN1 = DigitalPin.P13;
let AIN2 = DigitalPin.P12;
let PWMB = AnalogPin.P16;
let BIN1 = DigitalPin.P14;
let BIN2 = DigitalPin.P15;
let speedSetting = 10;

namespace r4eMotor {

    export function motorStop(m: Motor): void {
        if (m == Motor.Right)
            pins.analogWritePin(PWMA, 0)
        else
            pins.analogWritePin(PWMB, 0)
    }

    export function motorRun(m: Motor, index: Dir, speed: number): void {
        speed = speed * 64 - 1; // map 0 to 1023

        if (m == Motor.Right) {
            pins.analogWritePin(PWMA, speed)
            if (index == Dir.Forward) {
                pins.digitalWritePin(AIN1, 1)
                pins.digitalWritePin(AIN2, 0)
            } else {
                pins.digitalWritePin(AIN1, 0)
                pins.digitalWritePin(AIN2, 1)
            }
        } else {
            pins.analogWritePin(PWMB, speed)
            if (index == Dir.Forward) {
                pins.digitalWritePin(BIN1, 1)
                pins.digitalWritePin(BIN2, 0)
            } else {
                pins.digitalWritePin(BIN1, 0)
                pins.digitalWritePin(BIN2, 1)
            }
        }
    }

    export function setSpeed(newSpeed: number) {
        speedSetting = newSpeed;
    }
    export function getSpeed() {
        return speedSetting;
    }

    export function driveForward(seconds: number, speed: number) {
        motorRun(Motor.Right, Dir.Forward, speed)
        motorRun(Motor.Left, Dir.Forward, speed)
        basic.pause(seconds * 1000)
        motorStop(Motor.Right)
        motorStop(Motor.Left)
    }

    export function driveBackward(seconds: number, speed: number) {
        motorRun(Motor.Right, Dir.Backward, speed)
        motorRun(Motor.Left, Dir.Backward, speed)
        basic.pause(seconds * 1000)
        motorStop(Motor.Right)
        motorStop(Motor.Left)
    }

    export function driveLeft(seconds: number, speed: number) {
        motorRun(Motor.Right, Dir.Forward, speed)
        motorRun(Motor.Left, Dir.Backward, speed)
        basic.pause(seconds * 1000)
        motorStop(Motor.Right)
        motorStop(Motor.Left)
    }

    export function driveRight(seconds: number, speed: number) {
        motorRun(Motor.Right, Dir.Backward, speed)
        motorRun(Motor.Left, Dir.Forward, speed)
        basic.pause(seconds * 1000)
        motorStop(Motor.Right)
        motorStop(Motor.Left)
    }

}



