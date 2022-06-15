enum Melodien {
    Fanfare,
    DontWorryBeHappy,
    Donauwalzer,
    HarryPotter,
    HappyBirthday,
    SuperMario,
    StarWars,
    OverTheRainbow
}
const fanfare = ["c4:1", "r:1", "g3:1", "g3:1", "a3:2",
    "g3:3", "r:1", "b3:2", "c4:2"];
const harryPotter = ["e4:2", "a4:4", "c5:1", "b4:2", "a4:4"
    , "e5:2", "d5:6", "b4:6", "a4:4", "c5:1"
    , "b4:2", "g4:4", "a#4:2", "e4:8", "r:2"
    , "e4:2", "a4:4", "c5:1", "b4:2", "a4:4"
    , "e5:2", "g5:4", "f#5:2", "f5:4", "c#4:2"
    , "f5:4", "e5:1", "d#5:2", "d#4:4", "c5:2", "a4:8"];
const happyBirthday = [
    "g3:2", "g3:2", "a3:4", "g3:4", "c4:4",
    "b3:8", "g3:2", "g3:2", "a3:4", "g3:4",
    "d4:4", "c4:8", "g3:2", "g3:2", "g4:4",
    "e4:4", "c4:4", "b3:4", "a3:4", "f4:2",
    "f4:2", "e4:4", "c4:4", "d4:4", "c4:8"];
const superMario = [
    "e4:1", "e4:1.5", "r:1", "e4", "r:1",
    "c4:1", "e4:1", "r:1", "g4:2", "r:2",
    "g3:2"];
const starWars = [
    "g4:1.5", "g4:1.5", "g4:1.5", "c4:6", "g4:6",
    "f4:1.5", "e4:1.5", "d4:1", "c5:6", "g4:3",
    "f4:1.5", "e4:1.5", "d4:1", "c5:6", "g4:3",
    "f4:1.5", "e4:1.5", "f4:1.5", "d4:6"];
const beHappy = [
    "b4:4", "r:1", "g#4:3", "f#4:3", "g#4:2",
    "d#4:1", "d#4:3", "f#4:2", "d#4:1", "c#4:2",
    "b3:1", "c#4:2", "d#4:1", "c#4:6", "r:8",
    "f#4:2", "d#4:1", "c#4:2", "b3:1", "c#4:2",
    "d#4:1", "c#4:6", "r:8", "d#4:2", "c#4:1",
    "b3:2", "g#3:1", "b3:6"];
const donauwalzer = [
    "a3:2", "a3:2", "c#4:2", "e4:2", "e4:3",
    "r:1", "e4:2.5", "e4:3", "r:1", "c#4:2.5",
    "c#4:3", "r:1", "a3:2", "a3:2", "c#4:2",
    "e4:2", "e4:2.5", "r:1", "e4:2.5", "e4:3",
    "r:1", "d4:2.5", "d4:3"];
const rainbow = [
    "c4:4", "c5:4", "b4:2", "g4:1", "a4:1",
    "b4:2", "c5:2", "c4:4", "a4:4", "g4:6",
    "r:2", "a3:4", "f4:4", "e4:2", "c4:1",
    "d4:1", "e4:2", "f4:2", "d4:2", "b3:1",
    "c4:1", "d4:2", "e4:2", "c4:6"];

namespace r4eMelody {
    
    export function getMelody(melody:Melodien) {
        switch(melody) {
            case Melodien.Fanfare:
                return fanfare;
                break;
            case Melodien.DontWorryBeHappy:
                return beHappy;
                break;
            case Melodien.Donauwalzer:
                return donauwalzer;
                break;
            case Melodien.HarryPotter:
                return harryPotter;
                break;
            case Melodien.HappyBirthday:
                return happyBirthday;
                break;
            case Melodien.SuperMario:
                return superMario;
                break;
            case Melodien.StarWars:
                return starWars;
                break;
            case Melodien.OverTheRainbow:
                return rainbow;
                break;
            default:
                return ["c:1"];
                break;
        }
    }
}