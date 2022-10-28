import Vector2 from "./components/Utils/Vector2";
import { Galaxygine } from "./Galaxygine";

let galaxygine = new Galaxygine();
galaxygine.setCanvasContext(galaxygine.Core.engineInitialization());

galaxygine.Draw.drawText(new Vector2(15, 45), "Hello World!", "helloWorld");
galaxygine.galaxygineMainLoop(() => {});
