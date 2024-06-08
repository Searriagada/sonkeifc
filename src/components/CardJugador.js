import React from 'react';
import '../styles/CardJugador.css'

export function CardJugador({ id, posicion, nombre, profesion, rrss, imagen }) {
    return (
        <div key={id} className='box'>
            <div className='card'>
                <div className='image'>
                    <img src={imagen} alt='' />
                    <div className='description'>
                        <h1>{posicion}</h1>
                    </div>
                </div>
                <div className='overlay'>
                    <h1>{nombre}</h1>
                    <h3>{posicion}</h3>
                    <div className='additional-info'>
                        <div className='info-data'>
                            <p className='info-item'>{profesion}</p>
                            <p className='info-item'> {rrss}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}