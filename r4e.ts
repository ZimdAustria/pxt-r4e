/**
 * Robo4earth makecode extension
 * in progress
 * 
 */
//% color="#FFAB19" //% icon="\uf29a"
//% groups="['Movement','Melody']"
namespace r4E {
    /**
     * robot drives in given direction
     * @param direction choose between forward, backward, left and driveRight
     * @param seconds tell the robot how long it should drive in seconds
     * @param speed the speed of the robot from [0-16], optional argument
     */
    //% block="drive $direction for $seconds seconds with speed $speed"
    //% group="Movement"
    //% seconds.min=0 seconds.max=9
    //% speed.defl=10
    //% speed.min=0 speed.max=16
    export function move(speed: number, direction: Richtung, seconds: number) {
        r4eMotor.setSpeed(speed)
        if (direction == Richtung.forward) {
            r4eMotor.driveForward(seconds, speed)
        } else if (direction == Richtung.backward) {
            r4eMotor.driveBackward(seconds, speed)
        } else if (direction == Richtung.left) {
            r4eMotor.driveLeft(seconds, speed)
        } else if (direction == Richtung.right) {
            r4eMotor.driveRight(seconds, speed)
        }
    }

    /**
     * move single motor forward or backward with given speed
     * @param motor motor you want to move
     * @param direction turning direction of motor
     * @param speed motor speed from 0-16
     */
    //% block="move $motor motor $direction with speed $speed"
    //% group="Movement"
    //% speed.min= 0 speed.max=16
    export function turnMotor(motor: Motor, direction: Dir, speed: number) {
        r4eMotor.motorRun(motor,direction,speed);
    }

    /**
     * stops motor
     * @param motor choose left or right motor
     */
    //% block="stop motor $motor"
    //% group="Movement"
    export function stopMotor(motor: Motor) {
        r4eMotor.motorStop(motor);
    }

    /**
     * robot plays melody
     * @param melody choose the melody you want the robot to play
     */
    //% block="play song $melody"
    //% group="Melody"
    export function playMelody(melody: Melodien) {
        let song = r4eMelody.getMelody(melody);
        music.startMelody(song);
    }

}