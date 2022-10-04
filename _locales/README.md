> open this page at [https://zimdaustria.github.io/pxt-robo4earth/](https://zimdaustria.github.io/pxt-robo4earth/)


# Robot4Earth for MakeCode

This repository hosts the extension to program the [ZIMD](https://www.zimd.at/) robots with MakeCode. The extension allows you to move them and let them play melodies.
If you want to build your own robot you'll find everything you need on our [robo4earth website](https://www.robo4earth.at/#roboter)<br/>

<img src="../pictures/robot1.jpg" style="width:400px;"/><br/>

## Use as Extension in MakeCode

You can add this repository as an **Extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions**
* search for **https://github.com/zimdaustria/pxt-robo4earth** in the search box

## Usage example
```blocks

// let robot play melody fanfare
robo4earth.playMelody(R4eMelodies.Fanfare)

// robot moves forward for 2 seconds with speed 10
robo4earth.drive(R4eMotorDirection.forward, 2, 10);

// robot moves backward until motors are stopped
robo4earth.driveBackward(10)
basic.pause(1000)
// stop motors
robo4earth.stopMovement()

```

#### Metadata (used for search/rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
