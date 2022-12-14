// Copyright (c) 2022 GalaxyGamingBoy
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import Vector2 from './Utils/Vector2';
import Renderer from './Renderer/Renderer';
import TextRenderObject from './Renderer/TextRenderObject';
import RectangleRenderObject from './Renderer/RectangleRenderObject';
import RectangleOutlineRenderObject from './Renderer/RectangleOutlineRenderObject';
import StrokeTextRenderObject from './Renderer/StrokeTextRenderObject';
import ImageRenderObject from './Renderer/ImageRenderObject';

// Galaxygine - DRAW
export default class Draw {
  private galaxygineCanvasContext: CanvasRenderingContext2D =
    new CanvasRenderingContext2D();
  public renderer: Renderer;

  // GET / SET
  public setCanvasContext(context: CanvasRenderingContext2D) {
    this.galaxygineCanvasContext = context;
  }

  // FUNCTIONS
  public drawRectangle(
    position: Vector2 = new Vector2(),
    size: Vector2 = new Vector2(),
    id = '',
    color = '#000000'
  ): void {
    this.renderer.addRenderObject(
      new RectangleRenderObject(position, size, id, color)
    );
  }

  public drawRectangleOutline(
    position: Vector2 = new Vector2(),
    size: Vector2 = new Vector2(),
    id = '',
    color = '#000000'
  ): void {
    this.renderer.addRenderObject(
      new RectangleOutlineRenderObject(position, size, id, color)
    );
  }

  public drawRectangleWithOutline(
    position: Vector2 = new Vector2(),
    size: Vector2 = new Vector2(),
    id = '',
    outlineColor = '#000000',
    rectangleColor = '#000000'
  ): void {
    this.drawRectangle(position, size, id, rectangleColor);
    this.drawRectangleOutline(position, size, id + '_outline', outlineColor);
  }

  public drawImage(
    position: Vector2 = new Vector2(),
    size: Vector2 = new Vector2(),
    imagePath = '',
    id = ''
  ): void {
    this.renderer.addRenderObject(
      new ImageRenderObject(position, size, imagePath, id)
    );
  }

  public drawText(
    position: Vector2 = new Vector2(),
    text = '',
    id = '',
    color = '#000000',
    font = '48px serif'
  ): void {
    this.renderer.addRenderObject(
      new TextRenderObject(position, text, id, color, font)
    );
  }

  public drawStrokeText(
    position: Vector2 = new Vector2(),
    text = '',
    id = '',
    color = '#000000',
    font = '48px serif'
  ): void {
    this.renderer.addRenderObject(
      new StrokeTextRenderObject(position, text, id, color, font)
    );
  }

  public eraseRectangle(
    position: Vector2 = new Vector2(),
    size: Vector2 = new Vector2()
  ): void {
    this.galaxygineCanvasContext.clearRect(
      position.x,
      position.y,
      size.x,
      size.y
    );
  }

  public eraseCanvas(): void {
    const galaxygineCanvas = <HTMLCanvasElement>(
      document.getElementById('galaxygine-canvas')
    );
    this.eraseRectangle(
      new Vector2(0, 0),
      new Vector2(galaxygineCanvas.width, galaxygineCanvas.height)
    );
  }

  // Constuctor
  constructor(context: CanvasRenderingContext2D) {
    this.setCanvasContext(context);
    this.renderer = new Renderer();
  }
}
