import React from 'react'
import '../styles/Tittle.css'
import "@fontsource/inknut-antiqua";

export const Tittle = ({text}) => {
  return (
    <h1 className='tittle'>{text}</h1>
  );
}
