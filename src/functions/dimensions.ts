export function calculateHeightFromWidth(width: number, numPixels: number) : number {
    return Math.ceil(numPixels / width);
}

export function calculateWidthFromHeight(height: number, numPixels: number) : number {
    return Math.ceil(numPixels / height);
}