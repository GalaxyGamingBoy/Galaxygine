// Galaxygine Engine
import Core from "./components/Core";
import Draw from "./components/Draw";
import InputHandler from "./components/InputHandler";
import Sound from "./components/Sound";
import {isDebug} from "./components/Utils/Settings";
import {tick} from "./components/Utils/Settings";

export class Galaxygine {
    // Galaxygine - ESSENTIALS
    public static version: string = "v0.0.1";
    private galaxygineCanvasContext: CanvasRenderingContext2D;

    // Classes
    public Core: Core;
    public Draw: Draw;
    public InputHandler: InputHandler;
    public Sound: Sound;

    public setCanvasContext(context: CanvasRenderingContext2D) {
        this.galaxygineCanvasContext = context;
        this.Draw.setCanvasContext(context);
    }

    public galaxygineMainLoop(customCode: Function) {
        window.setInterval(() => {
            this.Draw.eraseCanvas();
            try {
                this.Draw.renderer.renderObjects(this.galaxygineCanvasContext);
            } catch (e) {
                if (isDebug) {
                    console.log("No renderObjects to render.");
                }
            }
            customCode();

        }, tick);
    }

    // Constructor
    constructor() {
        this.Core = new Core();
        this.Draw = new Draw(this.galaxygineCanvasContext);
        this.InputHandler = new InputHandler();
        this.Sound = new Sound();
    }
}
