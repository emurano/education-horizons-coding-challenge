import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import ImageForm from "./image-form";


describe('image form width field', () => {
    const getWidthField = () => screen.getByTestId('image-form-width-field') as HTMLInputElement;

    test('is rendered in th ImageForm component', () => {
        render(<ImageForm />);

        expect(getWidthField()).toBeTruthy();
    })

    test('keeps the original number value when a non-number is entered', () => {
        render(<ImageForm />)

        fireEvent.change(getWidthField(), {target: {value: 'A'}});
        expect(getWidthField().value).toBe('256');
    });

    test('has zero value when field contents is deleted', () => {
        render(<ImageForm />)

        fireEvent.change(getWidthField(), {target: {value: ''}});
        expect(getWidthField().value).toBe('0');
    });
});


describe('image form height field', () => {
    const getHeightField = () => screen.getByTestId('image-form-height-field') as HTMLInputElement;

    test('is rendered in th ImageForm component', () => {
        render(<ImageForm />);

        expect(getHeightField()).toBeTruthy();
    })

    test('keeps the original number value when a non-number is entered', () => {
        render(<ImageForm />)

        fireEvent.change(getHeightField(), {target: {value: 'A'}});
        expect(getHeightField().value).toBe('256');
    });

    test('has zero value when field contents is deleted', () => {
        render(<ImageForm />)

        fireEvent.change(getHeightField(), {target: {value: ''}});
        expect(getHeightField().value).toBe('0');
    });
});
