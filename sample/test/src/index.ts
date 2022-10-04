import { Galaxygine } from "./Galaxygine";

var galaxygine: Galaxygine = new Galaxygine();
galaxygine.setCanvasContext(galaxygine.Core.engineInitialization());
galaxygine.Draw.drawSquare(10, 10, 20, 20, "red");
galaxygine.Draw.drawSquareOutline(60, 10, 20, 20, "blue");
