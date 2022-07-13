export function calculateHeightFromWidth(width: number, numPixels: number) : number {
    return Math.ceil(numPixels / width);
}

export function calculateWidthFromHeight(height: number, numPixels: number) : number {
    return Math.ceil(numPixels / height);
}

/**
 * The number of evenly spaced graduations to use for each colour component
 */
const numSteps = 32;

/**
 * The number of graduations in each colour component (red, green and blue)
 */
export const componentSize = 256;

/**
 * The number of gradiations to use for images
 */
export const stepSize = componentSize / numSteps;

/**
 * The total number of colours to be included in an image, give the step size
 */
export const numColours = Math.pow(numSteps, 3);