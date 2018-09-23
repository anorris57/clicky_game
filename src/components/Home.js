import React, { Component } from 'react'
import apple3 from "../images/apple3.jpg"
import apple5 from "../images/apple5.jpeg"
import apple6 from "../images/apple6.jpeg"
import apple7 from "../images/apple7.jpeg"
import apple8 from "../images/apple8.jpg"
import apple9 from "../images/apple9.jpg"
import apple10 from "../images/apple10.jpg"
import apple11 from "../images/apple11.jpg"
import apple12 from "../images/apple12.jpg"
import applefour from "../images/applefour.jpeg"
import appleOne from "../images/appleOne.jpg"
import appletwo from "../images/appletwo.jpeg"

class Home extends Component {
  render() {
    return(
  <div className="container">
    <div class="card-columns ">
      <div className="card img-fluid" >
        <img src={apple3}  alt="apple"/></div>
        <div className="card img-fluid" >
        <img src={apple5}  alt="apple"/></div>
        <div className="card img-fluid" >
        <img src={apple6}  alt="apple"/></div>
        <div className="card img-fluid" >
        <img src={apple7}  alt="apple"/></div>
        <div className="card img-fluid" >
        <img src={apple8}  alt="apple"/></div>
        <div className="card img-fluid" >
        <img src={apple9}  alt="apple"/></div>
        <div className="card img-fluid" >
        <img src={apple10}  alt="apple"/></div>
        <div className="card img-fluid" >
        <img src={apple11}  alt="apple"/></div>
        <div className="card img-fluid" >
        <img src={apple12}  alt="apple"/></div>
        <div className="card img-fluid" >
        <img src={applefour}  alt="apple"/></div>
        <div className="card img-fluid" >
        <img src={appleOne}  alt="apple"/></div>
        <div className="card img-fluid" >
        <img src={appletwo}  alt="apple"/></div>
    </div>
  </div>
  
    )
  }
}







export default Home;