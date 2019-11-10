import React from 'react';
import '../App.css';
import '../party.css';
import '../fontawesome-free/css/all.min.css';
import claudia from './img/claudia.jpg';







function friendProfile (props){
  function sendMessageButton(e) {
    e.preventDefault();
    const Http = new XMLHttpRequest();
    const url='https://svanchiro.api.stdlib.com/http-locationreq@dev/callfunc/';
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange = (e) => {
    console.log(Http.responseText)
}
  }

  var map, infoWindow;
    function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 20
      });
      infoWindow = new google.maps.InfoWindow;
      // Try HTML5 geolocation.
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          infoWindow.setPosition(pos);
          infoWindow.setContent('Location found.');
          infoWindow.open(map);
          map.setCenter(pos);
        }, function() {
          handleLocationError(true, infoWindow, map.getCenter());
        });
      } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
      }
    }
    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
      infoWindow.setPosition(pos);
      infoWindow.setContent(browserHasGeolocation ?
                            'Error: The Geolocation service failed.' :
                            'Error: Your browser doesn\'t support geolocation.');
      infoWindow.open(map);
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
          <img class="masthead-avatar mb-5 image" src={claudia} alt=""></img>
        </div>
        <h1>Claudia Rodriguez</h1>
      </header>
      <h2>Current Location:</h2>
      <div id="map"></div>
      <footer>
        <div class="container">
          <div class="buttons">
            <button href="#" class="icon phone" id='phone' onClick={sendMessageButton}>
                <i class="fa fa-phone"></i>
            </button>
            <button href="#" class="icon comment" onClick={sendMessageButton}>
                <i class="fa fa-comment"></i>
            </button>
          </div>
          <div class="emergency">
            <button type="submit" class="btn btn-secondary btn-xl btn-block" onClick={sendMessageButton}>Emergency Contacts</button>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default friendProfile;
