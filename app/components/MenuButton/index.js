/**
*
* MenuButton
*
*/

import React from 'react';

import './style.css';
import './styleM.css';
import { Link } from 'react-router';

import Bars from 'react-icons/lib/fa/bars';

export default class MenuButton extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      menuOpen:false
    }
  }

  handleMenu = () => {
    if(this.state.menuOpen === true)
    {this.setState
      ({menuOpen:false
      })
    }
    else if(this.state.menuOpen === false)
    {
      this.setState
      ({menuOpen:true
      })
    }
  }

  closeMenu = () => {
    this.setState({
      menuOpen:false
    })
  }
  renderMenu() {
    if(this.state.menuOpen === true) {
      return(
        <nav className="navBar">
          <Link to="/" className="navButton">Home</Link>
          <Link to="/ForumPage" className="navButton">Forum</Link>
          <a href="https://github.com/Cjacobson1986" className="navButton">Github</a>
        </nav>
      )
    }
  }
  render() {
    return (
      <div>
      <Bars className="menuIcon" onClick={this.handleMenu}/>
      {this.renderMenu()}
      <header className="pageTitle">Full Stack Web Development</header>
      </div>
    );
  }
}

MenuButton.contextTypes = {
  router: React.PropTypes.object
};
