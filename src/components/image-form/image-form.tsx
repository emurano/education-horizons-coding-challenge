import React, {ChangeEvent, useEffect, useState} from 'react';
import './image-form.css';

interface ImageFormProps {
    numPixels: number;
}

/**
 * Handles the width and height values
 *
 * The width and height values are kept such that the resulting image will
 * contain at least numPixels number of pixels
 *
 * @param numPixels
 */
const useDimensions = (numPixels: number) => {
    const [imageWidth, setImageWidth] = useState(0);
    const [imageHeight, setImageHeight] = useState(0);

    const changeImageWidth = (newWidth: number) => {
        if (isNaN(newWidth)) return;
        setImageWidth(newWidth);
        setImageHeight(Math.ceil(numPixels / newWidth));
    }

    const changeImageHeight = (newHeight: number) => {
        if (isNaN(newHeight)) return;
        setImageHeight(newHeight);
        setImageWidth(Math.ceil(numPixels / newHeight));
    }

    const handleWidthChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.trim() == '') setImageWidth(0);
        changeImageWidth(parseInt(event.target.value));
    };

    const handleHeightChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.trim() == '') setImageHeight(0);
        changeImageHeight(parseInt(event.target.value));
    };

    useEffect(() => {
        const root = Math.sqrt(numPixels);
        if (Math.ceil(root) != root) {
            changeImageWidth(Math.ceil(root));
        } else {
            setImageWidth(root);
            setImageHeight(root);
        }
    }, [numPixels]);

    return {
        imageWidth,
        imageHeight,
        handleWidthChange,
        handleHeightChange
    };
};

const ImageForm = ({numPixels}: ImageFormProps) => {

    const {
        imageWidth,
        imageHeight,
        handleWidthChange,
        handleHeightChange
    } = useDimensions(numPixels);

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
                className='image-form-button'
                type='button'>set</button>
        </div>
    );
}

export default ImageForm;