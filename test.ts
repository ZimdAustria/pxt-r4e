function driveRightFor1Second () {
    // turn single wheels with different tempos
    r4E.turnMotor(R4eMotor.Left, R4eTurn.Forward, 10)
    r4E.turnMotor(R4eMotor.Right, R4eTurn.Forward, 5)
    // pause 1000(ms) to turn the wheels for 1 second
    basic.pause(1000)
    // stop single wheels
    r4E.stopMotor(R4eMotor.Left)
    r4E.stopMotor(R4eMotor.Right)
}
// the robot drives in the given direction 
// for 1 second wit tempo 10
r4E.move(R4eMotorDirection.forward, 1, 10)

// plays melody fanfare
r4E.playMelody(R4eMelodies.Fanfare)

// call the function
driveRightFor1Second()