import React from 'react';
import '../App.css';
import '../fontawesome-free/css/all.min.css';

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
          		<input type="checkbox" href="#" name="expandmenu" id="expandmenu" class="expandmenu"></imput>
          		<label class="expandmenu-button" for="expandmenu">
              <img style="border-radius:50%" width="80" height="80" src="img/serenaBig.jpg"></img>
          		</label>
          		<a href="location.html" class="menu-item col1"><i><img style="border-radius:50%" width="80" height="80" src="img/claudia.jpg"></img></i></a>
          		<a href="location.html" class="menu-item col3"><i><img style="border-radius:50%" width="80" height="80" src="img/denise.png"></img></i></a>
          		<a href="location.html" class="menu-item col6"><i><img style="border-radius:50%" width="80" height="80" src="img/jordan.png"></img></i></a>
          	</nav>
          </div>
          <h1>Party in Progress!</h1>
          <a>Click on profile to check on your friends!</a>
        </div>
      </header>
      <footer>
        <div class="container">
          <button class="btn btn-secondary btn-xl btn-block" id="sendMessageButton">PANIC </button>
          <a style="color:'black' "href=# id="endParty">End Your Party</a>
        </div>
      </footer>
      <br></br>
    </div>
  )
}
export default myParty;
