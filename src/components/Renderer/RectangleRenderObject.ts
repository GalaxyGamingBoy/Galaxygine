// Copyright (c) 2022 GalaxyGamingBoy
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import Vector2 from '../Utils/Vector2';
import RenderObject from './RenderObject';

export default class RectangleRenderObject extends RenderObject {
  private size: Vector2 = new Vector2();
  private color = '#000000';

  constructor(
    position: Vector2 = new Vector2(),
    size: Vector2 = new Vector2(),
    id = '',
    color = '#000000'
  ) {
    super(position, 'rectangle');
    super.setID(id);
    this.color = color;
    this.size = size;
  }

  // Getters
  public getSize(): Vector2 {
    return this.size;
  }

  public getColor(): string {
    return this.color;
  }

  // Setters
  public setSize(newSize: Vector2): void {
    this.size = newSize;
  }

  public setColor(newColor: string): void {
    this.color = newColor;
  }

  public render(context: CanvasRenderingContext2D): void {
    context.fillStyle = this.color;
    context.fillRect(
      this.getPosition().x,
      this.getPosition().y,
      this.size.x,
      this.size.y
    );
    super.render(context);
  }
}
