import React from 'react';
import icon from '../postHorn.png';


export default function Header(props){
    
      return (

        <header className='header'>
            <div className='icon-container'>
                <img className='icon' src={icon} alt='icon'></img>
            </div>
            <h1>Giovanni Ricci</h1>
            <h2>Developer,</h2>
            <h2>Anthropologist</h2>
            <h2>mormagli@gmail.com</h2>
        </header>

    )
}