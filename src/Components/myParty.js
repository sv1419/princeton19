import React from 'react';
import '../App.css';
import '../fontawesome-free/css/all.min.css';
import claudia from './img/claudia.jpg';
import yang from './img/yang.png';
import denise from './img/denise.png';
import serena from './img/serenaBig.jpg';


function myParty (props){
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
          <div class="divider-custom divider-light">
            <nav class="menu">
            <label class="expandmenu-button" for="expandmenu">
              <img class='fun-menu' src={serena}></img>
            </label>
              <a href={'/friendProfile'} class="menu-item col1" class='fun-menu'><i><img src={claudia}></img></i></a>
              <a href={'/friendProfile'} class="menu-item col2" class='fun-menu'><i><img src={yang}></img></i></a>
              <a href={'/friendProfile'} class="menu-item col3" class='fun-menu'><i><img src={denise}></img></i></a>
          	</nav>
          </div>
          <h1>Party in Progress!</h1>
          <a>Click on profile to check on your friends!</a>
        </div>
      </header>
      <footer>
        <div class="container">
          <button class="btn btn-secondary btn-xl btn-block" id="sendMessageButton">PANIC </button>
          <a id="endParty">End Your Party</a>
        </div>
      </footer>
      <br></br>
    </div>
  )
}
export default myParty;
