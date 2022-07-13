import React from "react";
import './pixel.css';

interface PixelProps {
    colour: string;
}
const Pixel = ({colour}: PixelProps) => {

    const divStyle = {
        backgroundColor: colour
    };

    return <div className="pixel" style={divStyle}></div>
}

export default Pixel;