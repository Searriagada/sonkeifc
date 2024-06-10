import React from 'react';
import '../styles/Historia.css'
import FirstImg from '../assets/Futbolista1.png';
import SecondImg from '../assets/Futbolista2.png';

export const Historia = ({ tittleOne, tittleTwo, textOne, textTwo }) => {
    return (
        <>
            <div className='historia-container'>
                <div className='primer-panel'>
                    <img src={FirstImg}></img>
                    <div className='text-panel'>
                        <h1 className='titulo-historia'>{tittleOne}</h1>
                        <p className='texto-historia'>{textOne}</p>
                    </div>
                </div>
            </div>
            <div className='historia-container'>
                <div className='primer-panel'>
                    <div className='text-panel'>
                        <h1 className='titulo-historia'>{tittleTwo}</h1>
                        <p className='texto-historia'>{textTwo}</p>
                    </div>
                    <img src={SecondImg}></img>
                </div>
            </div>
        </>
    );
}