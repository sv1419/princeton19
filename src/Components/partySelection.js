import React from 'react';
import '../App.css';
import '../fontawesome-free/css/all.min.css';
import serena from './img/serenaBig.jpg';
import ResizeImage from 'react-resize-image';


class partySelection extends React.Component{
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
    <div>
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

      <header class="masthead bg-primary text-black text-center">
        <div class="container d-flex align-items-center flex-column">
          <img class="masthead-avatar mb-5 image" src={serena}></img>
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
                <br></br>
                <a href={'/myParty'} class="button1">Start your party!</a>
            </div>
          </div>
        </div>
      </header>
      <br></br>
    </div>
  )
}
}


export default partySelection;
