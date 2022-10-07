import Vector2 from "../Utils/Vector2";

export default class RenderObject {
    private id: string;
    private position: Vector2;

    constructor(position: Vector2 = new Vector2()) {
        this.position = position;
    }

    // Getters
    public getPosition(): Vector2 {
        return this.position;
    }

    public getID(): string {
        return this.id;
    }

    // Setters
    public setPosition(newPosition: Vector2): void {
        this.position = newPosition;
    }

    public setId(newID: string): void {
        this.id = newID;
    }
}
