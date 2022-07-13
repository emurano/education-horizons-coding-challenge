import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import ImageForm from "./image-form";

const getWidthField = () => screen.getByTestId('image-form-width-field') as HTMLInputElement;
const getHeightField = () => screen.getByTestId('image-form-height-field') as HTMLInputElement;
const onDimensionSet = jest.fn();

describe('image form width field', () => {
    test('is rendered in th ImageForm component', () => {
        render(<ImageForm numPixels={100} defaultWidth={256} onDimensionSet={onDimensionSet}/>);

        expect(getWidthField()).toBeTruthy();
    })

    test('keeps the original number value when a non-number is entered', () => {
        render(<ImageForm numPixels={100} defaultWidth={256} onDimensionSet={onDimensionSet}/>)

        fireEvent.change(getWidthField(), {target: {value: 'A'}});
        expect(getWidthField().value).toBe('256');
    });

    test('has zero value when field contents is deleted', () => {
        render(<ImageForm numPixels={100} defaultWidth={256} onDimensionSet={onDimensionSet}/>)

        fireEvent.change(getWidthField(), {target: {value: ''}});
        expect(getWidthField().value).toBe('0');
    });
});


describe('image form height field', () => {

    test('is rendered in th ImageForm component', () => {
        render(<ImageForm numPixels={100} defaultWidth={256} onDimensionSet={onDimensionSet}/>)

        expect(getHeightField()).toBeTruthy();
    })

    test('keeps the original number value when a non-number is entered', () => {
        render(<ImageForm numPixels={25600} defaultWidth={256} onDimensionSet={onDimensionSet}/>)

        fireEvent.change(getHeightField(), {target: {value: 'A'}});
        expect(getHeightField().value).toBe('100');
    });

    test('has zero value when field contents is deleted', () => {
        render(<ImageForm numPixels={100} defaultWidth={256} onDimensionSet={onDimensionSet}/>);

        fireEvent.change(getHeightField(), {target: {value: ''}});
        expect(getHeightField().value).toBe('0');
    });
});

describe('image form width and height fields initial values', () => {
    test('height is set to num pixels divided by default width, when num pixels evenly divides into default width', () => {
        render(<ImageForm numPixels={25600} defaultWidth={256} onDimensionSet={onDimensionSet}/>);

        expect(getWidthField().value).toEqual('256');
        expect(getHeightField().value).toEqual('100');
    });
});

describe('image form width and height fields', () => {
    test('height is recalculated when width is changed', () => {
        render(<ImageForm numPixels={25600} defaultWidth={256} onDimensionSet={onDimensionSet}/>);

        fireEvent.change(getWidthField(), {target: {value: '200'}});

        expect(getHeightField().value).toEqual('128');
    });

    test('height is recalculated to smallest value that allows at least all pixels required when width is changed', () => {
        render(<ImageForm numPixels={10000} defaultWidth={256} onDimensionSet={onDimensionSet}/>);

        fireEvent.change(getWidthField(), {target: {value: '300'}});

        expect(getHeightField().value).toEqual('34');
    });
});

describe('image form width set button', () => {
    test('dimensions set callback is called with the height and width when button is tapped', () => {
        render(<ImageForm numPixels={100000} defaultWidth={256} onDimensionSet={onDimensionSet}/>);

        const height = parseInt(getHeightField().value);
        const width = parseInt(getWidthField().value);

        fireEvent.click(screen.getByTestId('image-form-button') as HTMLButtonElement);

        expect(onDimensionSet).toHaveBeenLastCalledWith(height, width);
    });
});