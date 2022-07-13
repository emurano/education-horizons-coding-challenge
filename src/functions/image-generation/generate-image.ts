import {Colour} from "./index";

export function generateImage(height: number, width: number) : Colour[] {
    const imageData: Colour[] = [];
    for (let i = 0; i < (height * width); i++) {
        const hex = i.toString(16).padStart(6, "0");
        imageData.push(`#${hex}`);
    }

    return imageData;
}