import React from 'react';
import logo from '../style/freeCodeCamp.jpg';

const Header = ({updateDisplay, displayChanger, url}) => {

  return (
    <nav className="navbar">
      <img className="header-logo" src={logo} alt={'freeCodeCamp'} />
      <div className="header-group">
        <span><h6>Sort by:</h6></span>
        <button
          onClick={() => displayChanger('https://fcctop100.herokuapp.com/api/fccusers/top/recent', 'Past 30 Days')}
          className="btn btn-outline-success">Last 30 days
        </button>
        <button
          onClick={() => displayChanger('https://fcctop100.herokuapp.com/api/fccusers/top/alltime', 'All Time')}
          className="btn btn-outline-success rightButton">All Time</button>
      </div>
    </nav>

  )
}
export default Header;
