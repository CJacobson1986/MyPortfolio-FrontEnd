/*
 *
 * Search
 *
 */
 import React from 'react';
 import Helmet from 'react-helmet';
 import {Link} from 'react-router';

 import './style.css';
 import './styleM.css';
 import FAComments from 'react-icons/lib/fa/comments';
 import FaList from 'react-icons/lib/fa/list';
 import FaTh from 'react-icons/lib/fa/th';
 import FaGroup from 'react-icons/lib/fa/group';
 import FaSearch from 'react-icons/lib/fa/search';
 import FaSignIn from 'react-icons/lib/fa/sign-in';

export default class Search extends React.PureComponent {
  constructor () {
    super();
    this.state = {
    }
  };
  render() {
    return (
      <div className="container">
        <Helmet title="Search" meta={[ { name: 'description', content: 'A forum for free events in Augusta!' }]}/>

        <Link className="siteTitle" to="/ForumPage">
          <FaSearch/>
          <header>Search
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

          <Link className="navButtons" to="/SignIn-SignUp">
            <FaSignIn/>
            <header>SignIn/SignUp
            </header>
          </Link>
        </navBar>
      </div>
    );
  }
  }

  Search.contextTypes = {
  router: React.PropTypes.object
  };
