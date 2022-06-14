
enum Richtung {
    forward,
    backward,
    left,
    right
}

namespace r4eMotor {
    let speedSetting = 10;

    export function setSpeed(newSpeed: number) {
        speedSetting = newSpeed;
    }
    export function getSpeed() {
        return speedSetting;
    }

    export function driveForward(seconds: number, speed: number) {
        MotorDriver.MotorRun(Motor.A, Dir.backward, speed)
        MotorDriver.MotorRun(Motor.B, Dir.backward, speed)
        basic.pause(seconds * 1000)
        MotorDriver.MotorStop(Motor.A)
        MotorDriver.MotorStop(Motor.B)
    }

    export function driveBackward(seconds: number, speed: number) {
        MotorDriver.MotorRun(Motor.A, Dir.forward, speed)
        MotorDriver.MotorRun(Motor.B, Dir.forward, speed)
        basic.pause(seconds * 1000)
        MotorDriver.MotorStop(Motor.A)
        MotorDriver.MotorStop(Motor.B)
    }

    export function driveLeft(seconds: number, speed: number) {
        MotorDriver.MotorRun(Motor.A, Dir.backward, speed)
        MotorDriver.MotorRun(Motor.A, Dir.forward, speed)
        basic.pause(seconds * 1000)
        MotorDriver.MotorStop(Motor.A)
        MotorDriver.MotorStop(Motor.B)
    }

    export function driveRight(seconds: number, speed: number) {
        MotorDriver.MotorRun(Motor.A, Dir.forward, speed)
        MotorDriver.MotorRun(Motor.A, Dir.backward, speed)
        basic.pause(seconds * 1000)
        MotorDriver.MotorStop(Motor.A)
        MotorDriver.MotorStop(Motor.B)
    }

}



