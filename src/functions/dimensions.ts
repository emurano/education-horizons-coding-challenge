export function calculateHeightFromWidth(width: number, numPixels: number) : number {
    return Math.ceil(numPixels / width);
}

export function calculateWidthFromHeight(height: number, numPixels: number) : number {
    return Math.ceil(numPixels / height);
}

const numSteps = 32;
export const componentSize = 256;
export const stepSize = componentSize / numSteps;
export const numColours = Math.pow(numSteps, 3);