import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import '../App2.css';
import logo from './img/gluuLogo.png';
import '../fontawesome-free/css/all.min.css';


class Home extends Component{
  constructor(props) {
    super(props);
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

            <img class="masthead-avatar mb-5" src={logo} alt="logo"></img>

            <p class="masthead-subheading font-weight-light mb-0">Keep Your Phone Close And Your Friends Closer</p>

            <div class="divider-custom divider-light">
              <div class="container">
                <a href="#" class="button1">Log In</a>
                &nbsp;
                <a href={'/signUp'} class="button1">Sign Up</a>
              </div>
            </div>
          </div>
        </header>

      </div>
    )
  }
}
export default Home;
