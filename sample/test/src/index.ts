import Vector2 from "./components/Utils/Vector2";
import { Galaxygine } from "./Galaxygine";

var galaxygine: Galaxygine = new Galaxygine();
galaxygine.setCanvasContext(galaxygine.Core.engineInitialization());
galaxygine.Draw.drawRectangle(
    new Vector2(10, 10),
    new Vector2(20, 20),
    "red",
    "sampleRectangle"
);
galaxygine.Draw.drawRectangleOutline(
    new Vector2(60, 10),
    new Vector2(20, 20),
    "blue",
    "sampleRectangleOutline"
);
galaxygine.Draw.drawRectangleWithOutline(
    new Vector2(100, 100),
    new Vector2(50, 75),
    "blue",
    "red",
    "sampleRectangleWithOutline"
);
galaxygine.Draw.drawText(
    new Vector2(150, 150),
    "black",
    "Hello Galaxygine, #1",
    "sampleText"
);
galaxygine.Draw.drawStrokeText(
    new Vector2(150, 200),
    "black",
    "Hello Galaxygine, #2",
    "sampleStrokeText"
);
galaxygine.galaxygineMainLoop(() => {});
