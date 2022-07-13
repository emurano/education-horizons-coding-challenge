import React, {ChangeEvent, useState} from 'react';

const ImageForm = () => {
    const [imageWidth, setImageWidth] = useState(256);
    const changeImageWidth = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.trim() == '') setImageWidth(0);
        const parsedInt = parseInt(event.target.value);
        if (!isNaN(parsedInt)) {
            setImageWidth(parsedInt);
        }
    };

    return (
        <form>
            <label>Width</label>
            <input
                data-testid='image-form-width-field'
                type="text"
                value={imageWidth}
                onChange={changeImageWidth} />
        </form>
    );
}

export default ImageForm;