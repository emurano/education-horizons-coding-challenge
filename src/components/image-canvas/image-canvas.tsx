import React from 'react';
import {Colour} from 'functions/image-generation';
import Pixel from 'components/pixel';
import './image-canvas.css';

interface ImageCanvasProps {
    height: number;
    width: number;
    imageData: Colour[];
}

interface ImageRowsProps {
    height: number;
    width: number;
    imageData: string[];
};

interface ImageRowProps {
    width: number;
    rowNum: number;
    imageData: Colour[];
}

/**
 * Renders a single row of pixels
 *
 * @param height The height of the image
 * @param width The number of pixels per row
 * @param imageData The original image data - not a slice for this row!
 */
const ImageRow = ({width, rowNum, imageData}: ImageRowProps) => {
    const cols = [];
    for (let i = 0; i < width; i++) {
        const pixelNum = (rowNum * width) + i;
        cols.push(<Pixel colour={imageData[pixelNum]} key={`${rowNum}x${i}`}/>);
    }
    return <>{cols}</>;
}

/**
 * Renders the pixels of an image, one row at a rime
 *
 * @param height The height of the image
 * @param width The number of pixels per row
 * @param imageData The array of colours to use for colouring the pixels
 */
const ImageRows = ({height, width, imageData}: ImageRowsProps) => {
    const rowList = [];
    for (let i = 0; i < height; i++) {
        rowList.push(<ImageRow
            width={width}
            rowNum={i}
            imageData={imageData}
            key={`image_row_${i}`}/>);
    }
    return <>{rowList}</>;
}

/**
 * The container for an image's pixels
 *
 * @param height The number of pixels high
 * @param width The number of pixels wide
 * @param imageData The array of colours to use in the image
 */
const ImageCanvas = ({height, width, imageData}: ImageCanvasProps) => {
    const style = {
        gridTemplateColumns: `repeat(${width}, 1fr)`
    };

    return (
        <div className="image-canvas" style={style}>
            <ImageRows height={height} width={width} imageData={imageData}/>
        </div>
    );
};

export default ImageCanvas;