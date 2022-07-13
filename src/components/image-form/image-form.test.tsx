import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import ImageForm from "./image-form";


describe('image form width field', () => {
    const getWidthField = () => screen.getByTestId('image-form-width-field') as HTMLInputElement;

    test('is rendered in th ImageForm component', () => {
        render(<ImageForm numPixels={100}/>);

        expect(getWidthField()).toBeTruthy();
    })

    test('keeps the original number value when a non-number is entered', () => {
        render(<ImageForm numPixels={100}/>)

        fireEvent.change(getWidthField(), {target: {value: 'A'}});
        expect(getWidthField().value).toBe('10');
    });

    test('has zero value when field contents is deleted', () => {
        render(<ImageForm numPixels={100}/>)

        fireEvent.change(getWidthField(), {target: {value: ''}});
        expect(getWidthField().value).toBe('0');
    });
});


describe('image form height field', () => {
    const getHeightField = () => screen.getByTestId('image-form-height-field') as HTMLInputElement;

    test('is rendered in th ImageForm component', () => {
        render(<ImageForm numPixels={100}/>)

        expect(getHeightField()).toBeTruthy();
    })

    test('keeps the original number value when a non-number is entered', () => {
        render(<ImageForm numPixels={100}/>)

        fireEvent.change(getHeightField(), {target: {value: 'A'}});
        expect(getHeightField().value).toBe('10');
    });

    test('has zero value when field contents is deleted', () => {
        render(<ImageForm numPixels={100}/>);

        fireEvent.change(getHeightField(), {target: {value: ''}});
        expect(getHeightField().value).toBe('0');
    });
});

describe('image form width and height fields initial values', () => {
    const getWidthField = () => screen.getByTestId('image-form-width-field') as HTMLInputElement;
    const getHeightField = () => screen.getByTestId('image-form-height-field') as HTMLInputElement;

    test('num pixels square root is integer, height and width are the same value', () => {
        render(<ImageForm numPixels={25600}/>);

        expect(getWidthField().value).toEqual('160');
        expect(getHeightField().value).toEqual('160');
    });

    test('num pixels square root is irrational number, height and width are rounded', () => {
        render(<ImageForm numPixels={30000}/>);

        expect(getWidthField().value).toEqual('174');
        expect(getHeightField().value).toEqual('173');
    });

});

describe('image form width and height fields', () => {
    const getWidthField = () => screen.getByTestId('image-form-width-field') as HTMLInputElement;
    const getHeightField = () => screen.getByTestId('image-form-height-field') as HTMLInputElement;

    test('height is recalculated when width is changed', () => {
        render(<ImageForm numPixels={25600}/>);

        fireEvent.change(getWidthField(), {target: {value: '200'}});
        expect(getHeightField().value).toEqual('128');
    });

    test('height is recalculated to smallest value that allows at least all pixels required when width is changed', () => {
        render(<ImageForm numPixels={10000}/>);

        fireEvent.change(getWidthField(), {target: {value: '300'}});
        expect(getHeightField().value).toEqual('34');
    });
});