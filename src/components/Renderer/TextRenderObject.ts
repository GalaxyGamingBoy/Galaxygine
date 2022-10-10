import Vector2 from "../Utils/Vector2";
import RenderObject from "./RenderObject";

export default class TextRenderObject extends RenderObject {
    private color: string = "#000000";
    private text: string = "";

    constructor(
        position: Vector2 = new Vector2(),
        color: string = "#000000",
        text: string = "",
        id: string = ""
    ) {
        super(position, "text");
        super.setID(id);
        this.color = color;
        this.text = text;
    }

    // Getters
    public getText(): string {
        return this.text;
    }

    public getColor(): string {
        return this.color;
    }

    // Setters
    public setText(newText: string): void {
        this.text = newText;
    }

    public setColor(newColor: string): void {
        this.color = newColor;
    }

    public render(context: CanvasRenderingContext2D): void {
        context.fillStyle = this.color;
        context.fillText(this.text, this.getPosition().x, this.getPosition().y);
        super.render(context);
    }
}
