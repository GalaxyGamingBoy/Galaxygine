// Copyright (c) 2022 GalaxyGamingBoy
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import RenderObject from './RenderObject';

export default class Renderer {
  private renderPath: Array<RenderObject>;

  constructor() {
    this.renderPath = new Array<RenderObject>();
  }

  public getRenderObject(index: number): [RenderObject, number] {
    return [this.renderPath[index], index];
  }

  public getRenderObjectByID(id: string): RenderObject {
    let renderObjectReturn: [RenderObject, number] = [new RenderObject(), 0];
    this.renderPath.map((renderObject, index) => {
      if (renderObject.getID() === id) {
        renderObjectReturn[1] = index;
      }
    });
    renderObjectReturn = this.getRenderObject(renderObjectReturn[1]);
    return renderObjectReturn[0];
  }

  public addRenderObject(renderObject: RenderObject): void {
    this.renderPath.push(renderObject);
  }

  public renderObjects(context: CanvasRenderingContext2D): void {
    this.renderPath.map(renderObject => {
      renderObject.render(context);
    });
  }
}
