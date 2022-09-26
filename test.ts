/**
 * Robo4earth dance
 */

basic.showIcon(IconNames.Happy)
music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
basic.pause(1000)
basic.showIcon(IconNames.StickFigure)
robo4earth.drive(R4eMotorDirection.forward, 10, 0.4)
robo4earth.drive(R4eMotorDirection.backward, 10, 0.4)
basic.showIcon(IconNames.SmallHeart)
music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.InBackground)
robo4earth.turnLeft(10)
basic.pause(1000)
robo4earth.stopAll()
basic.showIcon(IconNames.Heart)
music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.InBackground)
robo4earth.turnRight(10)
basic.pause(1000)
robo4earth.stopAll()
basic.showIcon(IconNames.Yes)
robo4earth.playMelody(R4eMelodies.Fanfare)
basic.pause(1000)
basic.clearScreen()
