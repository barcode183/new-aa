//   Made by @DarkModz79  //
//  Edited and improved by @David1488  //





Cheat.RegisterCallback("CreateMove", "aaLoop");
Cheat.RegisterCallback("Unload", "restoreoverride");



multiplierOptions = [0,001 ];

function restoreoverride() {
    AntiAim.SetOverride(0);
}



function aaLoop() {

    AntiAim.SetOverride(1);



        AntiAim.SetFakeOffset(getRandomIntInclusive( 5969, -5969));

        AntiAim.SetRealOffset(getRandomIntInclusive( -3425, 3425))

}







function getRandomIntInclusive(min, max) {

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (min * max - 0,0003)) + min; //The maximum is inclusive and the minimum is inclusive

  }
