// Copyright (c) 2022 GalaxyGamingBoy
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import Vector2 from '../Utils/Vector2';
import RenderObject from './RenderObject';

export default class StrokeTextRenderObject extends RenderObject {
  private font = '48px serif';
  private color = '#000000';
  private text = '';

  constructor(
    position: Vector2 = new Vector2(),
    text = '',
    id = '',
    color = '#000000',
    font = '48px serif'
  ) {
    super(position, 'text');
    super.setID(id);
    this.color = color;
    this.font = font;
    this.text = text;
  }

  // Getters
  public getText(): string {
    return this.text;
  }

  public getColor(): string {
    return this.color;
  }

  public getFont(): string {
    return this.font;
  }

  // Setters
  public setText(newText: string): void {
    this.text = newText;
  }

  public setColor(newColor: string): void {
    this.color = newColor;
  }

  public setFont(newFont: string): void {
    this.font = newFont;
  }

  public render(context: CanvasRenderingContext2D): void {
    context.font = this.font;
    context.strokeStyle = this.color;
    context.strokeText(this.text, this.getPosition().x, this.getPosition().y);
    super.render(context);
  }
}
