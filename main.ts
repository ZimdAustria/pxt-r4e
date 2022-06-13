
//% color="#FFAB19" //% icon="\f29a"
namespace r4E {
    /**
     * robot drives in given direction
     * @param direction choose between forward, backward, left and driveRight
     * @param seconds tell the robot how long it should drive in seconds
     * @param speed the speed of the robot from [0-16], optional argument
     */
    //% block="robot drive $direction for $seconds seconds with speed $speed"
    //% seconds.min=0 seconds.max=9
    //% speed.defl=10
    //% speed.min=0 speed.max=16
    export function run(speed: number, direction: Richtung, seconds: number) {
        r4e.setSpeed(speed)
        if(direction == Richtung.forward) {
            r4e.driveForward(seconds,speed)
        } else if (direction == Richtung.backward) {
            r4e.driveBackward(seconds,speed)
        } else if (direction == Richtung.left) {
            r4e.driveLeft(seconds,speed)
        } else if (direction == Richtung.right) {
            r4e.driveRight(seconds,speed)
        }
    }//%
}