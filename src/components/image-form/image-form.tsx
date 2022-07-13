import React, {ChangeEvent, useState} from 'react';
import './image-form.css';

const ImageForm = () => {
    const [imageWidth, setImageWidth] = useState(256);
    const changeImageWidth = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.trim() == '') setImageWidth(0);
        const parsedInt = parseInt(event.target.value);
        if (!isNaN(parsedInt)) {
            setImageWidth(parsedInt);
        }
    };

    const [imageHeight, setImageHeight] = useState(256);
    const changeImageHeight = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.trim() == '') setImageHeight(0);
        const parsedInt = parseInt(event.target.value);
        if (!isNaN(parsedInt)) {
            setImageHeight(parsedInt);
        }
    };

    return (
        <div className='image-form'>
            <label>Width</label>
            <input
                data-testid='image-form-width-field'
                className='image-form-width-field'
                type="text"
                value={imageWidth}
                onChange={changeImageWidth} />

            <label>Height</label>
            <input
                data-testid='image-form-height-field'
                className='image-form-height-field'
                type="text"
                value={imageHeight}
                onChange={changeImageHeight} />

            <button
                className='image-form-button'
                type='button'>set</button>
        </div>
    );
}

export default ImageForm;