import Vector2 from "./components/Utils/Vector2";
import TextRenderObject from "./components/Renderer/TextRenderObject";
import RenderObject from "./components/Renderer/RenderObject";
import {Galaxygine} from "./Galaxygine";

var galaxygine: Galaxygine = new Galaxygine();
galaxygine.setCanvasContext(galaxygine.Core.engineInitialization());
galaxygine.Draw.drawRectangle(
    new Vector2(10, 10),
    new Vector2(20, 20),
    "sampleRectangle",
    "red"
);
galaxygine.Draw.drawRectangleOutline(
    new Vector2(60, 10),
    new Vector2(20, 20),
    "sampleRectangleOutline",
    "blue"
);
galaxygine.Draw.drawRectangleWithOutline(
    new Vector2(100, 100),
    new Vector2(50, 75),
    "sampleRectangleWithOutline",
    "blue",
    "red"
);
galaxygine.Draw.drawText(
    new Vector2(150, 150),
    "Hello Galaxygine, #1",
    "sampleText",
    "black"
);
galaxygine.Draw.drawStrokeText(
    new Vector2(150, 200),
    "Hello Galaxygine, #2",
    "sampleStrokeText",
    "black"
);
galaxygine.Draw.drawText(
    new Vector2(300, 300),
    "KEY",
    "keyPressed",
    "black"
)

galaxygine.galaxygineMainLoop(() => {
    if (galaxygine.InputHandler.isKeyPressed("w")) {
        console.log("W Pressed");
    }
    if (galaxygine.InputHandler.isKeyActionPressed("key_right")) {
        console.log("Action Right Pressed");
    }
    if (galaxygine.InputHandler.isAnyKeyPressed()) {
        let keyPressedObject: [TextRenderObject, number] = galaxygine.Draw.renderer.getRenderObjectByID("keyPressed") as [TextRenderObject, number];
        keyPressedObject[0].setText(galaxygine.InputHandler.getKeyPressArray()[0])
        galaxygine.Draw.renderer.setRenderObject(keyPressedObject);
    }
});
