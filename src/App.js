import React, { Component } from 'react';
import HomeCard from './components/HomeCard'



class App extends Component {
 
  render() {
    return (
      <div className="App">
       <div className= "jumbotron">
         <h1>Welcome to the Click Memory Game</h1><br/>
         <p>Try and click on each image only one time. If you click all 12 images only once you win the game.</p>
       </div>
       
       <HomeCard />
      </div>
    );
  }
}

export default App;
