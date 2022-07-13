import {Colour} from "./index";
import {numColours, stepSize} from "../dimensions";

/**
 * Generates an array of hex codes to be used as the colours for an imag
 *
 * @param height The height, in pixels, of the image
 * @param width The width, in pixels, of the image
 * @return An array of hex code strings to be used in css. The image's pixels are organised
 * from left to right and wrapping back to the left after `width` pixels
 */
export function generateImage(height: number, width: number) : Colour[] {
    const imageData: Colour[] = [];
    for (let i = 0; i < numColours; i++) {
        const colourIndex = i * stepSize;
        const hex = colourIndex.toString(16).padStart(6, "0");
        imageData.push(`#${hex}`);
    }
    return imageData;
}