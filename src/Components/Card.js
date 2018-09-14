
import React from 'react';
import githubIcon from '../github.png';
import herokuIcon from '../heroku.png';
import surgeIcon from '../surge2.png';
import firebaseIcon from '../firebase.png';



export default function Card(props){

    // takes props title, description, imageSource, github, deploy, and cardAlign 

    const linkIcon =(url)=>{
        if(url.includes('github')){return <img className='icon' src={githubIcon}></img>}
        else if (url.includes('heroku')){return <img className='icon' src={herokuIcon}></img>}
        else if (url.includes('surge.sh')){return <img className='icon' src={surgeIcon}></img>}
        else if (url.includes('firebase')){return <img className='icon' src={firebaseIcon}></img>}
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
                {linkIcon(props.github)} <a href={props.github}>Source</a> 
                {props.deploy? <span>{linkIcon(props.deploy)} <a href={props.deploy}>Deployed</a> </span>: <a></a>}
                
            </div>

        </div>
    )
}