import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import ImageForm from "./image-form";

test('displays a field for the width', () => {
    render(<ImageForm />)

    expect(screen.getByTestId('image-form-width-field')).toBeTruthy();
})