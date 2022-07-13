import React, {useState} from 'react';
import './app-shell.css';
import ImageForm from "../image-form";
import ImageCanvas from "../image-canvas/image-canvas";
import {calculateHeightFromWidth} from "../../functions/dimensions";
import {generateImage} from "../../functions/image-generation/generate-image";

const numColours = 32768;
const defaultWidth = 256;
const defaultHeight = calculateHeightFromWidth(defaultWidth, numColours);

function AppShell() {

    const [height, setHeight] = useState(defaultHeight);
    const [width, setWidth] = useState(defaultWidth);
    const handleDimensionsSet = (newHeight: number, newWidth: number) => {
        setHeight(newHeight);
        setWidth(newWidth);
    };

    const imageData = generateImage(height, width);

    return (
        <main className='app-shell'>
            <ImageForm numPixels={numColours} defaultWidth={defaultWidth} onDimensionSet={handleDimensionsSet}/>
            <ImageCanvas height={height} width={width} imageData={imageData}/>
        </main>
    );
}

export default AppShell;