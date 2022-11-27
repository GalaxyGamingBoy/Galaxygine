// Copyright (c) 2022 GalaxyGamingBoy
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

export default class Vector2 {
  public x: number;
  public y: number;

  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  public print() {
    return `(${this.x}, ${this.y})`;
  }

  public changeX(x: number) {
    this.x += x;
    return this;
  }

  public changeY(y: number) {
    this.y += y;
    return this;
  }

  public setX(x: number) {
    this.x = x;
    return this;
  }

  public setY(y: number) {
    this.y = y;
    return this;
  }
}
