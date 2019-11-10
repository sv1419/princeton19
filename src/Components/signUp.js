import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import '../fontawesome-free/css/all.min.css';
import logo from './img/gluuLogo.png';
import firestore from "./firestore";
var firebase = require('firebase');


class signUp extends React.Component{
  constructor() {
    super();
    this.state = {
     email: "",
     fullname: ""
    };
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  addUser = e => {
    e.preventDefault();
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    const userRef = db.collection("users").add({
      fullname: this.state.fullname,
      email: this.state.email
    });
    this.setState({
      fullname: "",
      email: ""
    });
  };
  render(){
    const collapsed = this.state.collapsed;

    const classOne = collapsed ? 'collapse navbar-collapse text-uppercase' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
    return(
      <div className="App">
        <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top">
          <div className="container" class="">
            <a className="navbar-brand" href="#"></a>
              <div align="left">
              <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                &nbsp;
                <i class="fas fa-bars"></i>
                <span className="navbar-toggler-icon" />
              </button>
              </div>

              <div className={`${classOne}`} id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item mx-0 mx-lg-1">
                    <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">My Account</a>
                  </li>
                  <li class="nav-item mx-0 mx-lg-1">
                    <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">About</a>
                  </li>
                  <li class="nav-item mx-0 mx-lg-1">
                    <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">Contact</a>
                  </li>
                </ul>
              </div>
          </div>
        </nav>

        <header class="masthead text-center">
          <div class="container d-flex align-items-center flex-column">
            <img class="masthead-avatar mb-5" src={logo} alt=""></img>

            <div class="divider-custom divider-light">
              <form onSubmit={this.addUser} action={'/profile'}>
                Full Name:<br></br>
                <input type="text" name="fullname" id="name" onChange={this.updateInput} value={this.state.fullname}></input><br></br>
                Email:<br></br>
                <input type="email" name="email" id="email" onChange={this.updateInput} value={this.state.email}></input><br></br>
                Password:<br></br>
                <input type="text" name="password" id="password"></input><br></br>
                Phone Number:<br></br>
                <input type="text" name="phone" id="phone"></input><br></br>
                <br></br>
                <a href={'/profile'} class="button1">Sign Up</a>

              </form>
              <br></br>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
export default signUp;
