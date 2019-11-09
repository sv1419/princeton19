import React from 'react';
import '../App.css';
import '../party.css';
import '../fontawesome-free/css/all.min.css';

function friendProfile (props){
  return(
    <div>
      <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
        <div class="container">
          <button class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
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
          <img class="masthead-avatar mb-5 image" src="img/claudia.jpg" alt=""></img>
        </div>
        <h1>Claudia Rodriguez</h1>
      </header>
      <h2>Current Location:</h2>
      <div id="map"></div>
      <footer>
        <div class="container">
          <div class="buttons">
            <a href="#" class="icon phone" id='phone'>
                <i class="fa fa-phone"></i>
            </a>
            <a href="#" class="icon comment" id='text'>
                <i class="fa fa-comment"></i>
            </a>
          </div>
          <div class="emergency">
            <button type="submit" class="btn btn-secondary btn-xl btn-block" id="Emergency">Emergency Contacts</button>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default friendProfile;
