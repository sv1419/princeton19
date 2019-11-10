import React from 'react';
import '../App.css';
import '../fontawesome-free/css/all.min.css';
import serena from './img/serenaBig.jpg';



function partySelection (props){
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

      <header class="masthead bg-primary text-black text-center">
        <div class="container d-flex align-items-center flex-column">
          <img class='fun-menu' options={{ width: 200 }} src={serena}></img>
          <div class="divider-custom divider-light">
            <div class="container my-4">
              <p class="font-weight-bold">Select Your Party</p>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="check1"></input>
                    <label class="custom-control-label" for="check1">Claudia Rodriguez</label>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="custom-control custom-checkbox">
                    <input label="Filled-in unchecked" type="checkbox" class="custom-control-input" id="check2"></input>
                    <label class="custom-control-label" for="check2">Jordan Beloosesky</label>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="check3"></input>
                    <label class="custom-control-label" for="check3">Denise Ching</label>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="check4"></input>
                    <label class="custom-control-label" for="check4">Yang Yang</label>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="check5"></input>
                    <label class="custom-control-label" for="check5">John Adam</label>
                  </div>
                </li>
              </ul>
              &nbsp;
              <div class="container">
                <a href={'/myParty'}><button type="submit" class="btn btn-secondary btn-xl btn-block" id="sendMessageButton">Start Your Party</button></a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <br></br>
    </div>
  )
}
export default partySelection;
