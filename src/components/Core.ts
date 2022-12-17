// Copyright (c) 2022 GalaxyGamingBoy
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// Galaxygine - CORE
import Vector2 from './Utils/Vector2';

export default class Core {
  public engineInitialization(
    mountID = 'galaxygine',
    canvasWidth: number = window.innerWidth,
    canvasHeight: number = window.innerHeight
  ): CanvasRenderingContext2D | null {
    // Hide overflow
    document.body.appendChild(document.createElement('style')).innerHTML =
      'html, body { margin: 0px; overflow: hidden; display: block;}';
    // Create and append canvas
    const GalaxygineCanvas: HTMLCanvasElement =
      document.createElement('canvas');
    GalaxygineCanvas.id = 'galaxygine-canvas';
    GalaxygineCanvas.width = canvasWidth;
    GalaxygineCanvas.height = canvasHeight;
    GalaxygineCanvas.style.display = 'block';
    document.getElementById(mountID)!.appendChild(GalaxygineCanvas);
    return GalaxygineCanvas.getContext('2d');
  }

  public getScreenSize(): Vector2 {
    return new Vector2(window.innerWidth, window.innerHeight);
  }

  public hasTouchscreen(): boolean {
    return typeof screen.orientation === 'undefined';
  }
}
