// Galaxygine - INPUT HANDLER
export default class InputHandler {
    private keyPressArray: Array<string>;

    // CONSTRUCTOR
    constructor() {
        this.keyPressArray = new Array<string>();

        // KeyDown Event
        document.addEventListener("keydown", (event) => {
            if (event.isComposing) {
                return;
            }

            if (this.keyPressArray.indexOf(event.key) == -1) {
                this.keyPressArray.push(event.key);
            }
        });

        // KeyUp Event
        document.addEventListener("keyup", (event) => {
            if (event.isComposing) {
                return;
            }

            if (this.keyPressArray.indexOf(event.key) != -1) {
                this.keyPressArray.splice(
                    this.keyPressArray.indexOf(event.key),
                    1
                );
            }
        });
    }

    // GET
    public getKeyPressArray() {
        return this.keyPressArray;
    }
}
