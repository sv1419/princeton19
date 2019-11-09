import React, { Component } from 'react';
import '../App.css';
import '../App2.css';
import logo from './img/DRIFT-logo.png';
import '../fontawesome-free/css/all.min.css';


class Home extends Component{
  render(){
    return(
      <div className="App">
        <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
          <div class="container">
            <button class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
              &nbsp;
              <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item mx-0 mx-lg-1">
                  <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#portfolio">My Account</a>
                </li>
                <li class="nav-item mx-0 mx-lg-1">
                  <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">About</a>
                </li>
                <li class="nav-item mx-0 mx-lg-1">
                  <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>


        <header class="masthead bg-primary text-white text-center">
          <div class="container d-flex align-items-center flex-column">

            <img class="masthead-avatar mb-5" src={logo} alt="logo"></img>

            <p class="masthead-subheading font-weight-light mb-0">Keep Your Phone Close And Your Friends Closer</p>

            <div class="divider-custom divider-light">
              <div class="container">
                <a href="#"><button type="submit" class="btn btn-secondary btn-xl btn-block" id="sendMessageButton">Log In</button></a>
                &nbsp;
                <a href={'/signUp'}><button type="submit" class="btn btn-secondary btn-xl btn-block" id="sendMessageButton">Sign Up</button></a>
              </div>
            </div>
          </div>
        </header>

      </div>
    )
  }
}
export default Home;
