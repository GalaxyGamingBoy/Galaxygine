import { Galaxygine } from "./Galaxygine";

var galaxygine: Galaxygine = new Galaxygine();
galaxygine.setCanvasContext(galaxygine.Core.engineInitialization());
galaxygine.Draw.drawRectangle(10, 10, 20, 20, "red");
galaxygine.Draw.drawRectangleOutline(60, 10, 20, 20, "blue");
<<<<<<< Updated upstream
=======
galaxygine.Draw.drawRectangleWithOutline(100, 100, 50, 75, "blue", "red");
galaxygine.Draw.drawText(150, 150, "Hello Galaxygine, #1", "black");
galaxygine.Draw.drawStrokeText(150, 200, "Hello Galaxygine, #2", "black");
>>>>>>> Stashed changes
