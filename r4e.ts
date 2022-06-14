/**
 * Robo4earth makecode extension
 * in progress
 * 
 */
//% color="#FFAB19" //% icon="\uf29a"
namespace r4E {
    /**
     * robot drives in given direction
     * @param direction choose between forward, backward, left and driveRight
     * @param seconds tell the robot how long it should drive in seconds
     * @param speed the speed of the robot from [0-16], optional argument
     */
    //% block="drive $direction for $seconds seconds with speed $speed"
    //% seconds.min=0 seconds.max=9
    //% speed.defl=10
    //% speed.min=0 speed.max=16
    export function run(speed: number, direction: Richtung, seconds: number) {
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
     * robot plays melody
     * @param melody choose the melody you want the robot to play
     */
    //% block="play song $melody"
    export function playM(melody: Melodien) {
        let song = r4eMelody.getMelody(melody);
        music.startMelody(song);
    }

}