// Galaxygine - DRAW
export default class Draw {
    private galaxygineCanvasContext: CanvasRenderingContext2D;

    // GET / SET
    public setCanvasContext(context: CanvasRenderingContext2D) {
        this.galaxygineCanvasContext = context;
    }

    // FUNCTIONS
    public drawSquare(
        x: number,
        y: number,
        width: number,
        height: number,
        color: string = "000000"
    ): void {
        this.galaxygineCanvasContext.fillStyle = color;
        this.galaxygineCanvasContext.fillRect(x, y, width, height);
    }

    public drawSquareOutline(
        x: number,
        y: number,
        width: number,
        height: number,
        color: string = "000000"
    ): void {
        this.galaxygineCanvasContext.strokeStyle = color;
        this.galaxygineCanvasContext.strokeRect(x, y, width, height);
    }

    public eraseSquare(
        x: number,
        y: number,
        width: number,
        height: number
    ): void {
        this.galaxygineCanvasContext.clearRect(x, y, width, height);
    }

    // Constuctor
    constructor(context: CanvasRenderingContext2D) {
        this.galaxygineCanvasContext = context;
    }
}
