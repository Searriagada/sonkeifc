import React from 'react';
import '../styles/img-top.css'
import { Button } from './Button';

export const ImgTop = ({text}) => {
    return (
        <>
        <h1 className='img-text'>{text}</h1>
        <div className='button-container'>
            <Button 
            idsection='contacto'
            text='Inscribete'
            />
        </div>
        </>
        
    );
}