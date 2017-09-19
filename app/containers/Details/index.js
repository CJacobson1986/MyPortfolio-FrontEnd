/*
 *
 * Details
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';
import SignIn from 'components/SignIn';
import SignUp from 'components/SignUp';

export default class Details extends React.PureComponent {
  constructor () {
    super();
    this.state = {
      openSignUp:false,
      openSignIn:false
    }
  };
  render() {
    return (
      <div className="container">
        <Helmet title="Users" meta={[ { name: 'description', content: 'A forum for free events in Augusta!' }]}/>

        <Link className="siteTitle" to="/ForumPage">
          <FaGroup/>
          <header>Users
          </header>
        </Link>

        <navBar className="desktopNavBar">

          <Link className="navButtons" to="/ForumPage">
              <FAComments/>
              <header>Recent
              </header>
          </Link>

          <Link className="navButtons" to="/Channels">
              <FaTh/>
              <header>Channels
              </header>
          </Link>

          <Link className="navButtons" to="/Users">
              <FaGroup/>
              <header>Users
              </header>
          </Link>

          <Link className="navButtons" to="/Search">
            <FaSearch/>
            <header>Search
            </header>
          </Link>

          <div className="navButtons" onClick={this.handleLogIn}>
            <FaSignIn/>
            <header>SignIn
            </header>
            </div>

            <SignIn open={this.state.openLogIn}>
            </SignIn>

            <div className="navButtons" onClick={this.handleSignUp}>
              <FaSignIn/>
              <header>SignUp
              </header>
              </div>

              <SignUp open={this.state.openSignUp}>
              </SignUp>
        </navBar>
      </div>
    );
  }
  }

Details.contextTypes = {
  router: React.PropTypes.object
};
