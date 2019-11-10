import React from 'react';
import '../App.css';
import '../fontawesome-free/css/all.min.css';
import serena from './img/serenaBig.jpg';
import claudia from './img/claudia.jpg';
import yang from './img/yang.png';
import denise from './img/denise.png';
import john from './img/john.png';
import steph from './img/steph.png';
import jordan from './img/jordan.png';


class Profile extends React.Component{
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

      <header class="masthead bg-primary text-white text-center">
        <div class="container d-flex align-items-center flex-column">
          <div>
            <div class="divider-custom divider-light">
              <nav class="menu">
                <input type="checkbox" href="#" name="expandmenu" id="expandmenu" class="expandmenu"></input>
                <label class="expandmenu-button" for="expandmenu">
                  <img class='fun-menu' src={serena}></img>
                </label>
                <a href="#" class="menu-item col1"><i><img class='fun-menu' src={claudia}></img></i></a>
                <a href="#" class="menu-item col2"><i><img class='fun-menu' src={yang}></img></i></a>
                <a href="#" class="menu-item col3"><i><img class='fun-menu' src={denise}></img></i></a>
                <a href="#" class="menu-item col4"><i><img class='fun-menu' src={john}></img></i></a>
                <a href="#" class="menu-item col5"><i><img class='fun-menu' src={steph}></img></i></a>
                <a href="#" class="menu-item col6"><i><img class='fun-menu' src={jordan}></img></i></a>
              </nav>
            </div>
          </div>
          <h1>Welcome Serena!</h1>
          <a>Click on your icon to see your closest friends</a>
        </div>
      </header>

          <a href={'/partySelection'} class="button1">Start your party!</a>
    </div>
  )
}
}

export default Profile;
