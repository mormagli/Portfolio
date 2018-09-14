import React, { Component } from 'react'
import Header from './Header'
import Card from './Card'

import scr1 from '../match3.png'
import scr2 from '../whereAmI.png'
import scr3 from '../hearbuds.png'
import scr4 from '../c3page.png'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header/>
        <p className='blurb'>
        I'm a software developer passionate about building and analyzing complex systems. Whether it's web apps (you can find some things I've built below), cultural logics (I'm a PhD candidate in Anthropology), or game rules (I do hobbyist boardgame design), I'm driven by figuring out how things fit together. 
        </p>

        <Card
          title='Match 3++'
          description= "I made a match-3 game with 2048-style progression. It's written in react-redux with popmotion-flux for animations."
          imageSource={scr1}
          github='https://github.com/mormagli/match-3-client'
          deploy='https://match-three-client.herokuapp.com/'
          cardAlign='left'
        />
    
        <Card
          title='Where am I?'
          description = {<div>I made a spaced repetition for aspirational travelers with <a href='https://github.com/LeReiver'>Michael Le-Reiver</a>. I wrote our spaced repetition algorithm, for which I implimented a linked list in mongoose.</div>}
          imageSource={scr2}
          github='https://github.com/thinkful-ei21/Mike-Giovanni-Spaced-Repetition-Client'
          deploy='https://whereami.surge.sh/'
          cardAlign='right'
        />

        <Card
          title='HearBuds'
          description= "I helped make an app for finding concerts buddies. I was primarily responsible for our GraphQL reducers and for stitching together response data from our mongo database and multiple public APIs."
          imageSource={scr3}
          github='https://github.com/thinkful-ei21/hearbuds-client'
          deploy='https://hearbuds-client.firebaseapp.com/'
          cardAlign='left'
        />

        <Card
          title='Circuit'
          description = "I made a minimalist card game for 2-6 players. Making the cards themselves required constraint programming, for which I wrote a series of Python scripts."
          imageSource={scr4}
          github='https://github.com/mormagli/cirucit-game/tree/master'
          
          cardAlign='right'
        />

      </div>
    );
  }
}

export default App;
