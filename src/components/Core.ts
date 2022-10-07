// Galaxygine - CORE
export default class Core {
    private isGalaxygineRunning = false;
    public engineInitialization(
        mountID: string = "galaxygine",
        canvasWidth: number = window.innerWidth,
        canvasHeight: number = window.innerHeight
    ): CanvasRenderingContext2D {
        // Hide overflow
        document.body.appendChild(document.createElement("style")).innerHTML =
            "html, body { margin: 0px; overflow: hidden; display: block;}";
        // Create and append canvas
        var GalaxygineCanvas: HTMLCanvasElement =
            document.createElement("canvas");
        GalaxygineCanvas.id = "galaxygine-canvas";
        GalaxygineCanvas.width = canvasWidth;
        GalaxygineCanvas.height = canvasHeight;
        GalaxygineCanvas.style.display = "block";
        document.getElementById(mountID).appendChild(GalaxygineCanvas);
        return GalaxygineCanvas.getContext("2d");

        // Start Galaxygine
        this.isGalaxygineRunning = true;
    }

    public getScreenSize(): { width: number; height: number } {
        return { width: window.innerWidth, height: window.innerHeight };
    }

    public hasTouchscreen(): boolean {
        return typeof screen.orientation == "undefined";
    }

    public galaxygineMainLoop(customCode: Function) {
        while (this.isGalaxygineRunning) {
            customCode();
        }
    }
}
