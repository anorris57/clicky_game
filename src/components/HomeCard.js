import React, { Component } from 'react'
import images from "../images.json";
import "./HomeCard.css"

class HomeCard extends Component {

  state = {
    images,
    score: 0,
    clicked: []
  };

  handleClick = event => {
    //capturing id of clicked image
    let clickedimage = event;

    //setting up comparison argument for conditional statement
    let imageclickedsecondtime = this.state.clicked.indexOf(clickedimage) > -1;

    //if image has already been clicked, score back to zero and images randomized
    if (imageclickedsecondtime) {
      this.handleSecondClick();
      this.handleRandom();
      alert("Try again");
    } else {
      this.setState({ clicked: this.state.clicked.concat(clickedimage) })
      this.handleIncrement();
      this.handleRandom();
      console.log(this.state.clicked.concat(clickedimage));
    }

    this.handleWin();
  };
  //increments score
  handleIncrement = () => {
    this.setState({ score: this.state.score + 1 });
  };
  //randomizes images
  handleRandom = () => {
    this.state.images.sort(function (a, b) { return 0.5 - Math.random() });
  }
  //sets score back to zero and empties clicked array
  handleSecondClick = () => {
    this.setState({ score: 0 });
    this.setState({ clicked: [] });
  }
  handleWin = () => {
    if (this.state.score === 11) {
      alert("Good job you won!");
      this.handleRandom();
      this.handleSecondClick();
      return;
    }
  }

  render() {

    const imageList = images.map(image => {
      return (
        <div className="card" key={image.id}
          id={image.id} >
          <img
            className="img-container"
            alt={image.name}
            src={require("../images/" + image.image)}
            onClick={this.handleClick.bind(this, image.id)}
          />
        </div>
      )
    });
    return (
      <div className=" container image-list">
        <p className="card-text">Click Score: {this.state.score}</p>
        <div className="card-columns">
          {imageList}
        </div>
      </div>
    )
  }
}

export default HomeCard