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
          Blah Blah Blah Blah Blah Blah Blah, Blah Blah Blah Blah Blah Blah Blah. Blah Blah Blah Blah Blah Blah Blah
        </p>

        <Card
          title='Match 3++'
          description='A match-3 style game wirtten in react-redux with popmotion-flux animations. Match 3 blocks to clear or more to upgrade... '
          imageSource={scr1}
          github='https://github.com/mormagli/match-3-client'
          deploy='https://match-three-client.herokuapp.com/'
          cardAlign='left'
        />
    
      </div>
    );
  }
}

export default App;
