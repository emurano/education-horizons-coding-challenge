import React from "react";
import './pixel.css';

interface PixelProps {
    colour: string;
}

/**
 * A single pixel part of an image
 *
 * @param colour the css colour of the image
 */
const Pixel = ({colour}: PixelProps) => {
    const divStyle = {
        backgroundColor: colour
    };

    return <div className="pixel" style={divStyle}></div>
}

export default Pixel;