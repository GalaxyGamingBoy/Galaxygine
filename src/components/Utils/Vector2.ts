export default class Vector2 {
    public x: number;
    public y: number;

    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

    public print() {
        return `(${this.x}, ${this.y})`;
    }
}
