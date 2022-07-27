/**
 * Robo4earth makecode extension
 * to move the R4E robot and play melodies
 */

//% color="#FFAB19" //% icon="\uf29a"
//% groups="['Movement','Melody']"
namespace robo4earth {
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
    export function move(direction: R4eMotorDirection, seconds: number, speed: number): void {
        seconds = (seconds < 0) ? 0 : seconds;
        seconds = (seconds > 9) ? 9 : seconds;
        r4eMotor.moveInDirection(direction, seconds, speed);
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
    export function turnMotor(motor: R4eMotor, direction: R4eTurn, speed: number) :void {
        r4eMotor.motorRun(motor,direction,speed);
    }

    /**
     * change motor pin settings for different R4eMotorboard
     * @param board choose the motorboard extension board on your R4e Robo4earth
     * the default motorboard is the motor extension module by waveshare
     */
    //% block="set motorboard extension to $board"
    //% group="Movement"
    export function changeMotorboard(board: R4eMotorboards) :void {
        r4eMotor.changePinSetting(board);
    }

    /**
     * stops motor
     * @param motor choose left or right motor
     */
    //% block="stop motor $motor"
    //% group="Movement"
    export function stopMotor(motor: R4eMotor) :void {
        r4eMotor.motorStop(motor);
    }

    /**
     * robot plays melody
     * @param melody choose the melody you want the robot to play
     */
    //% block="play song $melody"
    //% group="Melody"
    export function playMelody(melody: R4eMelodies) :void {
        let song = r4eMelody.melody(melody);
        music.startMelody(song);
    }

}