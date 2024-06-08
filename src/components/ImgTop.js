import React from 'react';
import '../styles/img-top.css'
import { ContactUsButton } from './ButtonContactUs';

export const ImgTop = ({text}) => {
    return (
        <>
        <h1 className='img-text'>{text}</h1>
        <div className='button-container'>
            <ContactUsButton />
        </div>
        </>
        
    );
}