import React from 'react';
import '../App.css';
import '../fontawesome-free/css/all.min.css';
import logo from './img/DRIFT-logo.png';


function signUp (props){
  return(
    <div>
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
          <img class="masthead-avatar mb-5" src={logo} alt=""></img>

          <div class="divider-custom divider-light">
            <form>
              Full Name:<br></br>
              <input type="text" name="name" id="name"></input><br></br>
              Email:<br></br>
              <input type="text" name="email" id="email"></input><br></br>
              Password:<br></br>
              <input type="text" name="password" id="password"></input><br></br>
              Phone Number:<br></br>
              <input type="text" name="phone" id="phone"></input><br></br>
            </form>
            <br></br>
            <div class="container">
                <a href={'/profile'}><button type="submit" class="btn btn-secondary btn-xl btn-block" id="sendMessageButton">Log In</button></a>
                &nbsp;
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
export default signUp;
