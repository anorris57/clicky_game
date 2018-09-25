import React, { Component } from 'react'
import images from "../images.json";

class HomeCard extends Component{
   
  state = {
    images,
    clickedImage: false,
    score: 0
  };

  handleClick = event => {
    this.handleIncrement();
    this.handleRandom();
  };
  
  handleIncrement = () => {
    this.setState({ score: this.state.score + 1 });
  };
  handleRandom = () => {
    this.state.images.sort(function(a,b){return 0.5 - Math.random()});
  }

  render(){
    
    const imageList = images.map(image => {
      return(
        <div>
        <div className="container">
        <div className="card" key={image.id}>
          <div className="img-container">
            <img 
            alt = {image.name}
            src = {require("../images/" + image.image)}
            onClick={this.handleClick}
            />
          </div>
        </div>
        </div>
        </div>
      )
    });
    return (
      <div className="image-list">
        
      <div className="card-body">
          <p className="card-text">Click Score: {this.state.score}</p>
        </div>
        { imageList}
      </div>
    )
  }
}

export default HomeCard