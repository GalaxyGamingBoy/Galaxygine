import RenderObject from "./RenderObject";

export default class Renderer {
    private renderPath: Array<RenderObject>;

    constructor() {
        this.renderPath = new Array<RenderObject>();
    }

    public getRenderObject(index: number): [RenderObject, number] {
        return [this.renderPath[index], index];
    }

    public getRenderObjectByID(id: string): [RenderObject, number] | number {
        this.renderPath.map((renderObject, index) => {
            if (renderObject.getID() == id) {
                return this.getRenderObject(index);
            }
        });
        return 0;
    }

    public setRenderObject(index: number, renderObject: RenderObject): void {
        this.renderPath[index] = renderObject;
    }

    public setRenderObjectByID(id: string, renderObject: RenderObject): void {
        this.renderPath.map((pathRenderObject, index) => {
            if (pathRenderObject.getID() == id) {
                this.setRenderObject(index, renderObject);
                return;
            }
        });
    }

    public addRenderObject(renderObject: RenderObject): void {
        this.renderPath.push(renderObject);
    }

    public renderObjects(context: CanvasRenderingContext2D): void {
        this.renderPath.map((renderObject) => {
            renderObject.render(context);
        });
    }
}
