import Vector2 from "../Utils/Vector2";
import RenderObject from "./RenderObject";

export default class RectangleOutlineRenderObject extends RenderObject {
    private size: Vector2 = new Vector2();
    private color: string = "#000000";

    constructor(
        position: Vector2 = new Vector2(),
        size: Vector2 = new Vector2(),
        color: string = "#000000",
        id: string = ""
    ) {
        super(position, "rectangleOutline");
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
        context.strokeStyle = this.color;
        context.strokeRect(
            this.getPosition().x,
            this.getPosition().y,
            this.size.x,
            this.size.y
        );
        super.render(context);
    }
}
