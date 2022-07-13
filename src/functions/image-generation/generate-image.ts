import {Colour} from "./index";
import {numColours, stepSize} from "../dimensions";

export function generateImage(height: number, width: number) : Colour[] {
    const imageData: Colour[] = [];
    for (let i = 0; i < numColours; i++) {
        const colourIndex = i * stepSize;
        const hex = colourIndex.toString(16).padStart(6, "0");
        imageData.push(`#${hex}`);
    }
    return imageData;
}