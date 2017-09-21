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
 import SignIn from 'components/SignIn';
 import SignUp from 'components/SignUp';

export default class Search extends React.PureComponent {
  constructor () {
    super();
    this.state = {
      openSignUp:false,
      openSignIn:false,
      result:[]
    }
  };

  handleLogIn = () => {
    this.setState({
      openSignIn: !this.state.openSignIn,
      openSignUp: false
    })
  }

  handleSignUp = () => {
    this.setState({
      openSignUp:!this.state.openSignUp,
      openSignIn: false
    })
  }

  handleEnter = (event) => {
    if (event.keyCode === 13)
    this.storeTask();
  };

  handleItem = (event) => {
    this.setState({
      inputItem: event.target.value
    })
  };

  searchContent = () => {
    let data = new FormData;
    data.append('searchContent', this.state.inputItem);
  fetch('http://localhost:8000/api/search', {
    method:'Post',
    result:data
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      this.setState({
        result:json.data
      })
    }.bind(this))
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

          <div className="navButtons" onClick={this.handleLogIn}>
            <FaSignIn/>
            <header>SignIn
            </header>
          </div>

          <SignIn open={this.state.openSignIn} onClose={this.handleLogIn}>
            </SignIn>

            <div className="navButtons" onClick={this.handleSignUp}>
              <FaSignIn/>
              <header>SignUp
              </header>
          </div>

            <SignUp open={this.state.openSignUp} onClose={this.handleSignUp}>
            </SignUp>
        </navBar>
        <input type="text" className="searchContentInput" placeholder="Topic Title" onChange={this.handleItem} onKeyDown={this.handleEnter} value={this.state.inputItem} />
        <input type="submit" className="submitButton" onClick={this.searchContent}/>
        <div className="searchResults">

        </div>
      </div>
    );
  }
  }

  Search.contextTypes = {
  router: React.PropTypes.object
  };
