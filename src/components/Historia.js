import React from 'react';
import '../styles/Historia.css'
import FirstImg from '../assets/Futbolista1.png';
import SecondImg from '../assets/Futbolista2.png';

export const Historia = ({textOne, textTwo}) => {
    return(
        <>
        <div className='historia-container'>
            <div className='primer-panel'>
                <img src={FirstImg}></img>
                <p className='texto-historia'>{textOne}</p>
            </div>
        </div>
        <div className='historia-container'>
            <div className='primer-panel'>
                <p className='texto-historia'>{textTwo}</p>
                <img src={SecondImg}></img>
            </div>
        </div>
        </>
    );
}