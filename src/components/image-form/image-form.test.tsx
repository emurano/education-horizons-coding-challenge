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
})
