import React from 'react';
import icon from '../postHorn.png';
import linkedin from '../linkedin.png'
import github from '../github.png'


export default function Header(props){
    
      return (

        <header className='header'>
            <div className='top-bar'>
                <div className='logo-container'>
                    <img className='logo' src={icon} alt='logo'></img>
                </div>
                <h1>Giovanni Ricci</h1>
                <h2>Developer,</h2>
                <h2>Anthropologist</h2>
                <h2>mormagli@gmail.com</h2>
                <div className='link-container'>
                    <a href="https://github.com/mormagli" target="_blank">
                        <img src={github} alt="https://github.com/mormagli">
                        </img>
                    </a>
                    <a href="https://linkedin.com/mormagli" target="_blank">
                        <img src={linkedin} alt="https://github.com/mormagli">
                        </img>
                    </a>
                </div>
            </div>
        </header>

    )
}