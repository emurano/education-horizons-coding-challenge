import React, {useState} from 'react';
import './app-shell.css';
import ImageForm from "../image-form";
import ImageCanvas from "../image-canvas/image-canvas";
import {Colour} from "../../functions/image-generation";
import {calculateHeightFromWidth} from "../../functions/dimensions";

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

    const imageData: Colour[] = [];
    for (let i = 0; i < numColours; i++) {
        const hex = i.toString(16).padStart(6, "0");
        imageData.push(`#${hex}`);
    }

    return (
        <main className='app-shell'>
            <ImageForm numPixels={numColours} defaultWidth={defaultWidth} onDimensionSet={handleDimensionsSet}/>
            <ImageCanvas height={height} width={width} imageData={imageData}/>
        </main>
    );
}

export default AppShell;