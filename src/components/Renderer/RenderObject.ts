import Vector2 from "../Utils/Vector2";
import { isDebug } from "../Utils/Settings";
export default class RenderObject {
    private id: string;
    private type: string;
    private position: Vector2;

    constructor(
        position: Vector2 = new Vector2(),
        type: string = "renderObject"
    ) {
        this.position = position;
        this.type = type;
    }

    // Getters
    public getPosition(): Vector2 {
        return this.position;
    }

    public getID(): string {
        return this.id;
    }

    public getType(): string {
        return this.type;
    }

    // Setters
    public setPosition(newPosition: Vector2): void {
        this.position = newPosition;
    }

    public setID(newID: string): void {
        this.id = newID;
    }

    // Render
    public render(context: CanvasRenderingContext2D): void {
        if (isDebug) {
            console.log(
                `RenderObject ${this.id} with type ${
                    this.type
                } at ${this.position.print()} rendered.`
            );
        }
    }
}
