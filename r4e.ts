/**
 * Robo4earth makecode extension
 * to move the R4E robot and play melodies
 */

//% color="#FFAB19" //% icon="\uf0ac"
//% groups="['Melody','Movement']"
namespace robo4earth {
    /**
     * robot plays melody
     * @param melody choose the melody you want the robot to play
     */
    //% block="play song $melody"
    //% group="Melody"
    //% weight=100
    export function playMelody(melody: R4eMelodies): void {
        let song = r4eMelody.melody(melody);
        music.startMelody(song);
    }
    
    /**
     * robot drives in given direction
     * @param direction choose between forward, backward, left and driveRight
     * @param speed the speed of the robot from [0-16], optional argument
     * @param seconds tell the robot how long it should drive in seconds
     */
    //% block="drive $direction with speed $speed for $seconds seconds"
    //% group="Movement"
    //% speed.defl=10
    //% speed.min=0 speed.max=16
    //% seconds.min=0 seconds.max=9
    //% weight=90
    export function drive(direction: R4eMotorDirection, speed: number, seconds: number): void {
        seconds = (seconds < 0) ? 0 : seconds;
        seconds = (seconds > 9) ? 9 : seconds;
        r4eMotor.moveInDirection(direction, seconds, speed);
    }

    /**
     * robo4earth turns right with given speed
     * @param speed motor speed from 0-16
     */
    //% block="turn right with speed $speed"
    //% group="Movement"
    //% speed.min= 0 speed.max=16
    //% weight=80
    export function turnRight(speed: number): void {
        turnMotor(R4eMotor.Right, R4eTurn.Backward, speed);
        turnMotor(R4eMotor.Left, R4eTurn.Forward, speed);
    }

    /**
     * robo4earth turns left with given speed
     * @param speed motor speed from 0-16
     */
    //% block="turn left with speed $speed"
    //% group="Movement"
    //% speed.min= 0 speed.max=16
    //% weight=70
    export function turnLeft(speed: number): void {
        turnMotor(R4eMotor.Right, R4eTurn.Forward, speed);
        turnMotor(R4eMotor.Left, R4eTurn.Backward, speed);
    }

    /**
     * robo4earth drives forward with given speed
     * @param speed motor speed from 0-16
     */
    //% block="drive forward with speed $speed"
    //% group="Movement"
    //% speed.min= 0 speed.max=16
    //% weight=60
    export function driveForward(speed: number): void {
        turnMotor(R4eMotor.Right, R4eTurn.Forward, speed);
        turnMotor(R4eMotor.Left, R4eTurn.Forward, speed);
    }

    /**
     * robo4earth drives backward with given speed
     * @param speed motor speed from 0-16
     */
    //% block="drive backward with speed $speed"
    //% group="Movement"
    //% speed.min= 0 speed.max=16
    //% weight=50
    export function driveBackward(speed: number): void {
        turnMotor(R4eMotor.Right, R4eTurn.Backward, speed);
        turnMotor(R4eMotor.Left, R4eTurn.Backward, speed);
    }

    /**
     * robo4earth stops
     */
    //% block="stop movement"
    //% group="Movement"
    //% weight=40
    export function stopAll(): void {
        stopMotor(R4eMotor.Right);
        stopMotor(R4eMotor.Left);
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
    //% weight=30
    export function turnMotor(motor: R4eMotor, direction: R4eTurn, speed: number) :void {
        r4eMotor.motorRun(motor,direction,speed);
    }

    /**
     * stops motor
     * @param motor choose left or right motor
     */
    //% block="stop motor $motor"
    //% group="Movement"
    //% weight=20
    export function stopMotor(motor: R4eMotor): void {
        r4eMotor.motorStop(motor);
    }

    /**
     * change motor pin settings for different Motor extension board. 
     * The default board is the motor extension module by waveshare.
     * @param board choose the motorboard extension board on your R4e Robo4earth
     */
    //% block="set motorboard extension to $board"
    //% group="Movement"
    //% weight=10
    export function changeMotorboard(board: R4eMotorboards) :void {
        r4eMotor.changePinSetting(board);
    }

}