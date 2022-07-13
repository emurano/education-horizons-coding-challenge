import React from 'react';
import './app-shell.css';
import ImageForm from "../image-form";

export default function AppShell() {
    return (
        <main className='app-shell'>
            <ImageForm numPixels={30000}/>
        </main>
    );
}