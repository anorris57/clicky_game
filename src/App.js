import React, { Component } from 'react';
import HomeCard from './components/HomeCard'



class App extends Component {
 
  render() {
    return (
      <div className="App">
       <div className= "jumbotron">Welcome to clicky game</div>
       
       <HomeCard />
      </div>
    );
  }
}

export default App;
