
import React from 'react';



export default function Card(props){

    // takes props title, description, imageSource, github, deploy, and cardAlign 

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
                <a href={props.github}>Source Code</a> {props.deploy? <a href={props.deploy}>deployed</a> : <a></a>}
                
            </div>

        </div>
    )
}