import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import './image-form.css';
import {calculateHeightFromWidth, calculateWidthFromHeight} from "../../functions/dimensions";

interface ImageFormProps {
    /**
     * The number of pixels the width and height should produce
     */
    numPixels: number;

    /**
     * Callback to be called when the user clicks the set button
     *
     * @param height The height the user entered into the form
     * @param width The width the user entered into the form
     */
    onDimensionSet: (height: number, width: number) => void;
}

/**
 * Handles the width and height values
 *
 * The width and height values are kept such that the resulting image will
 * contain at least numPixels number of pixels
 *
 * @param numPixels
 */
const useDimensions = (numPixels: number, onDimensionSet: (height: number, width: number) => void) => {
    const [imageHeight, setImageHeight] = useState(0);
    const [imageWidth, setImageWidth] = useState(0);

    const changeImageWidth = useCallback((newWidth: number) => {
        if (isNaN(newWidth)) return;
        setImageWidth(newWidth);
        setImageHeight(calculateHeightFromWidth(newWidth, numPixels));
    }, [numPixels]);

    const changeImageHeight = (newHeight: number) => {
        if (isNaN(newHeight)) return;
        setImageHeight(newHeight);
        setImageWidth(calculateWidthFromHeight(newHeight, numPixels));
    }

    const handleWidthChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.trim() === '') setImageWidth(0);
        changeImageWidth(parseInt(event.target.value));
    };

    const handleHeightChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.trim() === '') setImageHeight(0);
        changeImageHeight(parseInt(event.target.value));
    };

    useEffect(() => {
        const root = Math.sqrt(numPixels);
        if (Math.ceil(root) !== root) {
            changeImageWidth(Math.ceil(root));
        } else {
            setImageWidth(root);
            setImageHeight(root);
        }
    }, [numPixels, changeImageWidth, onDimensionSet]);

    return {
        imageHeight,
        imageWidth,
        handleWidthChange,
        handleHeightChange
    };
};

const ImageForm = ({numPixels, onDimensionSet}: ImageFormProps) => {
    const {
        imageHeight,
        imageWidth,
        handleWidthChange,
        handleHeightChange
    } = useDimensions(numPixels, onDimensionSet);

    const handleSetClick = () => {
        if (onDimensionSet) onDimensionSet(imageHeight, imageWidth);
    };

    return (
        <div className='image-form'>
            <label>Width</label>
            <input
                data-testid='image-form-width-field'
                className='image-form-width-field'
                type="text"
                value={imageWidth}
                onChange={handleWidthChange} />

            <label>Height</label>
            <input
                data-testid='image-form-height-field'
                className='image-form-height-field'
                type="text"
                value={imageHeight}
                onChange={handleHeightChange} />

            <button
                data-testid='image-form-button'
                className='image-form-button'
                type='button'
                onClick={handleSetClick}
                >set</button>
        </div>
    );
}

export default ImageForm;