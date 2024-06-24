import React from 'react';
import './styles.css';

const IconButton = ({goToLink}) => {
  const goToOtherMfe = () => {
    window.location.href = goToLink;
  }
  return  (
    <img  
      alt="Seta para ir para outra pag"
      onClick={goToOtherMfe} 
      className="icon-button" 
      src="https://img.icons8.com/?size=100&id=40075&format=png&color=000000" 
    />
  )
}

export default IconButton;