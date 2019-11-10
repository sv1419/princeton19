import React from 'react';
import '../App.css';
import '../fontawesome-free/css/all.min.css';
import claudia from './img/claudia.jpg';
import jordan from './img/jordan.png';
import denise from './img/denise.png';
import serena from './img/serenaBig.jpg';



function myParty (props){
  function sendMessageButton(e) {
    e.preventDefault();
    const Http = new XMLHttpRequest();
    const url='https://svanchiro.api.stdlib.com/http-twilio@dev/exampleText/';
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange = (e) => {
    console.log(Http.responseText)
}
  }

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
          <div>
            <div class="divider-custom divider-light">
              <nav class="menu">
                <input type="checkbox" href="#" name="expandmenu" id="expandmenu" class="expandmenu"></input>
                <label class="expandmenu-button" for="expandmenu">
                  <img class='fun-menu' src={serena}></img>
                </label>
                <a href={'/friendProfile'} class="menu-item col1"><i><img class='fun-menu' src={claudia}></img></i></a>
                <a href="#" class="menu-item col3"><i><img class='fun-menu' src={denise}></img></i></a>
                <a href="#" class="menu-item col6"><i><img class='fun-menu' src={jordan}></img></i></a>
              </nav>
            </div>
          </div>
          <h1>Welcome Serena!</h1>
          <a>Click on your icon to see your closest friends</a>
        </div>
      </header>
      <footer>
        <div class="container">
          <button class="btn btn-secondary btn-xl btn-block" onClick={sendMessageButton}>PANIC </button>
          <br></br>
          <br></br>
          <a id="endParty" href={'/profile'}>End Your Party</a>
        </div>
      </footer>
      <br></br>
    </div>
  )
}

export default myParty;
