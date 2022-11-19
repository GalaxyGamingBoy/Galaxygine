// Copyright (c) 2022 GalaxyGamingBoy
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import Vector2 from "../Utils/Vector2";
import RenderObject from "./RenderObject";

export default class RectangleRenderObject extends RenderObject {
    private size: Vector2 = new Vector2();
    private image: HTMLImageElement = new Image();

    constructor(
        position: Vector2 = new Vector2(),
        size: Vector2 = new Vector2(),
        imagePath: string = "",
        id: string = ""
    ) {
        super(position, "image");
        super.setID(id);
        this.size = size;
        this.image = new Image();
        this.image.src = imagePath;
    }

    // Getters
    public getSize(): Vector2 {
        return this.size;
    }

    public getImage(): HTMLImageElement {
        return this.image;
    }

    // Setters
    public setSize(newSize: Vector2): void {
        this.size = newSize;
    }

    public setImage(newImage: HTMLImageElement): void {
        this.image = newImage;
    }

    public changeImagePath(newImagePath: string): void {
        this.image.src = newImagePath;
    }

    public render(context: CanvasRenderingContext2D): void {
        context.drawImage(
            this.image,
            this.getPosition().x,
            this.getPosition().y,
            this.getSize().x,
            this.getSize().y
        );
        super.render(context);
    }
}
