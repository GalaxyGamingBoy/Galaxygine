// Galaxygine - DRAW
export default class Draw {
    private galaxygineCanvasContext: CanvasRenderingContext2D;

    // GET / SET
    public setCanvasContext(context: CanvasRenderingContext2D) {
        this.galaxygineCanvasContext = context;
    }

    // FUNCTIONS
    public drawRectangle(
        x: number,
        y: number,
        width: number,
        height: number,
        color: string = "000000"
    ): void {
        this.galaxygineCanvasContext.fillStyle = color;
        this.galaxygineCanvasContext.fillRect(x, y, width, height);
    }

    public drawRectangleOutline(
        x: number,
        y: number,
        width: number,
        height: number,
        color: string = "000000"
    ): void {
        this.galaxygineCanvasContext.strokeStyle = color;
        this.galaxygineCanvasContext.strokeRect(x, y, width, height);
    }

    public drawRectangleWithOutline(
        x: number,
        y: number,
        width: number,
        height: number,
        outlineColor: string = "000000",
        squareColor: string = "000000"
    ): void {
        this.drawRectangle(x, y, width, height, squareColor);
        this.drawRectangleOutline(x, y, width, height, outlineColor);
    }

    public drawText(
        x: number,
        y: number,
        text: string,
        color: string = "000000"
    ) {
        this.galaxygineCanvasContext.fillStyle = color;
        this.galaxygineCanvasContext.fillText(text, x, y);
    }

    public drawStrokeText(
        x: number,
        y: number,
        text: string,
        color: string = "000000"
    ) {
        this.galaxygineCanvasContext.strokeStyle = color;
        this.galaxygineCanvasContext.strokeText(text, x, y);
    }

    public eraseRectangle(
        x: number,
        y: number,
        width: number,
        height: number
    ): void {
        this.galaxygineCanvasContext.clearRect(x, y, width, height);
    }

    public eraseCanvas(): void {
        const galaxygineCanvas = <HTMLCanvasElement>(
            document.getElementById("galaxygine-canvas")
        );
        this.eraseRectangle(
            0,
            0,
            galaxygineCanvas.width,
            galaxygineCanvas.height
        );
    }

    // Constuctor
    constructor(context: CanvasRenderingContext2D) {
        this.galaxygineCanvasContext = context;
    }
}
