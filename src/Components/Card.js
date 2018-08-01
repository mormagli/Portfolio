
import React from 'react';
import githubIcon from '../github.png';
import herokuIcon from '../heroku.png'



export default function Card(props){

    // takes props title, description, imageSource, github, deploy, and cardAlign 

    const linkIcon =(url)=>{
        if(url.includes('github')){return <img className='icon' src={githubIcon}></img>}
        else if (url.includes('heroku')){return <img className='icon' src={herokuIcon}></img>}
    }

      return (

        <div className={`card align-${props.cardAlign}`}>
            <div className='imageContainer'>
                <img className='screenshot' 
                    src={`${props.imageSource}`} alt={props.title}
                    onClick={()=> window.location = props.deploy}
                ></img>
            </div>
            <h2 className='title'>{props.title}</h2>
            <p className='description'> {props.description}</p>
            <div className='links'>
                {linkIcon(props.github)} <a href={props.github}>Source Code</a> 
                {props.deploy? <span>{linkIcon(props.deploy)} <a href={props.deploy}>Deployed</a> </span>: <a></a>}
                
            </div>

        </div>
    )
}