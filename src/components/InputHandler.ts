// Copyright (c) 2022 GalaxyGamingBoy
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// Galaxygine - INPUT HANDLER
import keyActions from '../res/keyActions.json';
export default class InputHandler {
  private keyPressArray: Array<string>;

  // CONSTRUCTOR
  constructor() {
    this.keyPressArray = new Array<string>();

    // KeyDown Event
    document.addEventListener('keydown', event => {
      if (event.isComposing) {
        return;
      }

      if (this.keyPressArray.indexOf(event.key) === -1) {
        this.keyPressArray.push(event.key);
      }
    });

    // KeyUp Event
    document.addEventListener('keyup', event => {
      if (event.isComposing) {
        return;
      }

      if (this.keyPressArray.indexOf(event.key) !== -1) {
        this.keyPressArray.splice(this.keyPressArray.indexOf(event.key), 1);
      }
    });
  }

  // GET
  public getKeyPressArray() {
    return this.keyPressArray;
  }

  // Other
  public isKeyPressed(key: string): boolean {
    return !(this.keyPressArray.indexOf(key) === -1);
  }

  public isAnyKeyPressed(): boolean {
    return this.keyPressArray.length !== 0;
  }

  public isKeyArrayPressed(keyArray: Array<string>): boolean {
    let keyPressed = false;
    keyArray.map(key => {
      if (this.isKeyPressed(key)) {
        keyPressed = true;
      }
    });
    return keyPressed;
  }

  public isKeyActionPressed(actionID: string): boolean {
    let actionPressed = false;
    keyActions.map(action => {
      if (this.isKeyArrayPressed(action.keys) && actionID === action.actionID) {
        actionPressed = true;
      }
    });
    return actionPressed;
  }
}
