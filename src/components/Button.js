import React from 'react';
import '../styles/Button.css'

export const  Button = ({idsection, text}) => {

  const handleButtonClick = () => {
    const section = document.getElementById(idsection);
    if(section) {
      section.scrollIntoView({behavior: "smooth"});
    }
  };
    return (
      <button className='contact-button' onClick={handleButtonClick}>
        {text}
      </button>
    );
  }