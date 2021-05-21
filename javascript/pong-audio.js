/*This File creates the sound file players and their default properties
If you create a new player, be sure to import it at the top of index.js!
*/

//import * as Tone from "../lib/Tone.js";

class soundFile {
  constructor(file, deferPlay) {
    //this.deferPlay = false;
    this.player = new Tone.Player({
      url: "./" + file,
      loop: false,
      autostart: false
    }).toMaster();
  }
  //Play function also with pre-stop and deferred playing
  play() {
    //defer playback if sound isn't finished loading
    if (this.player.loaded === true) {
      this.deferPlay = false;
      this.player.stop();
      this.player.start();
    } else {
      this.deferPlay = true;
    }
  }
  //Stop function that may have easier syntax
  stop() {
    this.player.stop();
  }
}

//Try to play sounds that had their playback deferred
export function playDeferredSounds() {
  for (var i = 0; i < soundArray.length; i++) {
    if (soundArray[i].deferPlay === true) {
      soundArray[i].play();
    }
  }
}

export var soundArray = []; //list of sounds loaded

//Here is where all the Sound File Players Start

export var wallSound = new soundFile("thunderwall.wav"); //load sound
soundArray.push(wallSound); //add sound to list of sounds

export var paddleSound = new soundFile("paddlethuder.wav");
soundArray.push(paddleSound);

export var scoreSound = new soundFile("thunderwall.wav");
soundArray.push(scoreSound);

export var ambientSound = new soundFile("theraincomescomplete.wav");
soundArray.push(ambientSound);
ambientSound.player.loop = true; //turn on looping
ambientSound.player.volume.value = -20; //turn down volume

export var adventureMusic = new soundFile("theraincomescomplete.wav");
soundArray.push(adventureMusic);
adventureMusic.player.loop = true;
adventureMusic.player.volume.value = -20;

export var villageMusic = new soundFile("theraincomescomplete.wav");
soundArray.push(villageMusic);
villageMusic.player.loop = true;
villageMusic.player.volume.value = -20;
