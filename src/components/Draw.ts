import Vector2 from "./Utils/Vector2";
import Renderer from "./Renderer/Renderer";
import TextRenderObject from "./Renderer/TextRenderObject";
import RectangleRenderObject from "./Renderer/RectangleRenderObject";
import RectangleOutlineRenderObject from "./Renderer/RectangleOutlineRenderObject";
import StrokeTextRenderObject from "./Renderer/StrokeTextRenderObject";
// Galaxygine - DRAW
export default class Draw {
    private galaxygineCanvasContext: CanvasRenderingContext2D;
    public renderer: Renderer;

    // GET / SET
    public setCanvasContext(context: CanvasRenderingContext2D) {
        this.galaxygineCanvasContext = context;
    }

    // FUNCTIONS
    public drawRectangle(
        position: Vector2 = new Vector2(),
        size: Vector2 = new Vector2(),
        color: string = "#000000",
        id: string = ""
    ): void {
        this.renderer.addRenderObject(
            new RectangleRenderObject(position, size, color, id)
        );
    }

    public drawRectangleOutline(
        position: Vector2 = new Vector2(),
        size: Vector2 = new Vector2(),
        color: string = "#000000",
        id: string = ""
    ): void {
        this.renderer.addRenderObject(
            new RectangleOutlineRenderObject(position, size, color, id)
        );
    }

    public drawRectangleWithOutline(
        position: Vector2 = new Vector2(),
        size: Vector2 = new Vector2(),
        outlineColor: string = "#000000",
        squareColor: string = "#000000",
        id: string = ""
    ): void {
        this.drawRectangle(position, size, squareColor, id);
        this.drawRectangleOutline(
            position,
            size,
            outlineColor,
            id + "_outline"
        );
    }

    public drawText(
        position: Vector2 = new Vector2(),
        color: string = "#000000",
        text: string = "",
        id: string = ""
    ): void {
        this.renderer.addRenderObject(
            new TextRenderObject(position, color, text, id)
        );
    }

    public drawStrokeText(
        position: Vector2 = new Vector2(),
        color: string = "#000000",
        text: string = "",
        id: string = ""
    ): void {
        this.renderer.addRenderObject(
            new StrokeTextRenderObject(position, color, text, id)
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
            document.getElementById("galaxygine-canvas")
        );
        this.eraseRectangle(
            new Vector2(0, 0),
            new Vector2(galaxygineCanvas.width, galaxygineCanvas.height)
        );
    }

    // Constuctor
    constructor(context: CanvasRenderingContext2D) {
        this.galaxygineCanvasContext = context;
        this.renderer = new Renderer();
    }
}
