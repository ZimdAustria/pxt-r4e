enum r4eMelodies {
    HarryPotter,
    HappyBirthday,
    SuperMario,
    StarWars
}

namespace r4eMelody {

    const harryPotter = ["e4:2", "a4:4", "c5:1", "b4:2", "a4:4"
        , "e5:2", "d5:6", "b4:6", "a4:4", "c5:1"
        , "b4:2", "g4:4", "as4:2", "e4:8", "r:2"
        , "e4:2", "a4:4", "c5:1", "b4:2", "a4:4"
        , "e5:2", "g5:4", "fs5:2", "f5:4", "cs5:2"
        , "f5:4", "e5:1", "ds5:2", "ds4:4", "c5:2", "a4:8"];
    const happyBirthday = ["e4:1", "e4:2", "e4:4", "e4:6", "e4:8", "e4:3"];
    const superMario = ["e5:8"];
    const starWars = ["e4:1"];

    
    export function getMelody(melody:r4eMelodies) {
        switch(melody) {
            case r4eMelodies.HarryPotter:
                return harryPotter;
                break;
            case r4eMelodies.HappyBirthday:
                return happyBirthday;
                break;
            case r4eMelodies.SuperMario:
                return superMario;
                break;
            case r4eMelodies.StarWars:
                return starWars;
                break;
            default:
                return ["c:1"];
                break;
        }
    }
}
