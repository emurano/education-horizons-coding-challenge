import React, {ChangeEvent, useEffect, useState} from 'react';
import './image-form.css';

interface ImageFormProps {
    numPixels: number;
}

const ImageForm = ({numPixels}: ImageFormProps) => {
    const [imageWidth, setImageWidth] = useState(0);

    const changeImageWidth = (newWidth: number) => {
        if (!isNaN(newWidth)) {
            setImageWidth(newWidth);
            const height = Math.ceil(numPixels / newWidth);
            setImageHeight(height);
        }
    }

    const changeImageHeight = (newHeight: number) => {
        if (!isNaN(newHeight)) {
            setImageWidth(newHeight);
            const height = Math.ceil(numPixels / newHeight);
            setImageHeight(height);
        }
    }

    const handleWidthChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.trim() == '') setImageWidth(0);
        const parsedInt = parseInt(event.target.value);
        changeImageWidth(parsedInt);
    };

    const [imageHeight, setImageHeight] = useState(0);
    const handleHeightChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.trim() == '') setImageHeight(0);
        const parsedInt = parseInt(event.target.value);
        changeImageHeight(parsedInt);
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