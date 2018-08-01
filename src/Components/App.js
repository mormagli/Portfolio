import React, { Component } from 'react'
import Header from './Header'
import Card from './Card'

import scr1 from '../match3.png'

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
          description= "I wrote a match-3 game with 2048-style progression. It's written in react-redux with popmotion-flux for animations. "
          imageSource={scr1}
          github='https://github.com/mormagli/match-3-client'
          deploy='https://match-three-client.herokuapp.com/'
          cardAlign='left'
        />
    

        <Card
          title='Match 3++'
          description= "I wrote a match-3 game with 2048-style progression. It's written in react-redux with popmotion-flux for animations. "
          imageSource={scr1}
          github='https://github.com/mormagli/match-3-client'
          deploy='https://match-three-client.herokuapp.com/'
          cardAlign='right'
        />
      </div>
    );
  }
}

export default App;
