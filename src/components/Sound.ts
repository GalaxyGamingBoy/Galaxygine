// Copyright (c) 2022 GalaxyGamingBoy
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// Galaxygine - SOUND
export default class Sound {
  private soundLibrary: Array<{soundID: string; sound: HTMLAudioElement}>;

  // CONSTRUCTOR
  constructor() {
    this.soundLibrary = new Array<{
      soundID: string;
      sound: HTMLAudioElement;
    }>();
  }

  // SET / ADD / REMOVE
  public addSound(soundID: string, soundPath: string) {
    const sound: HTMLAudioElement = new Audio(soundPath);
    this.soundLibrary.push({soundID, sound});
  }

  public removeSound(soundID: string) {
    this.soundLibrary.splice(
      this.soundLibrary.indexOf(
        this.getSoundElementFromLibrary(soundID) as {
          soundID: string;
          sound: HTMLAudioElement;
        }
      ),
      1
    );
  }

  public removeALLSounds() {
    this.soundLibrary = new Array<{
      soundID: string;
      sound: HTMLAudioElement;
    }>();
  }

  // GET
  public getSoundLibrary() {
    return this.soundLibrary;
  }

  public getSoundElementFromLibrary(
    soundID: string
  ): number | {soundID: string; sound: HTMLAudioElement} {
    let returnElement: {soundID: string; sound: HTMLAudioElement} = {
      soundID: '',
      sound: new Audio(),
    };
    this.soundLibrary.map(element => {
      if (element.soundID === soundID) {
        returnElement = element;
      }
    });
    if (returnElement) {
      return returnElement;
    }
    return -1;
  }

  // OTHER
  public playSound(soundID: string) {
    const soundToBePlayed: {soundID: string; sound: HTMLAudioElement} =
      this.getSoundElementFromLibrary(soundID) as {
        soundID: string;
        sound: HTMLAudioElement;
      };
    soundToBePlayed.sound.play();
  }

  public stopSound(soundID: string) {
    const soundToBePlayed: {soundID: string; sound: HTMLAudioElement} =
      this.getSoundElementFromLibrary(soundID) as {
        soundID: string;
        sound: HTMLAudioElement;
      };
    soundToBePlayed.sound.pause();
  }
}
