/*
 *
 * ForumPage
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
import FaPlus from 'react-icons/lib/fa/plus';
import Drawer from 'components/Drawer';
import SignIn from 'components/SignIn';
import SignUp from 'components/SignUp';

export default class ForumPage extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      topics: [],
      openDrawer:false,
      openBottomDrawer:false,
      openSignUp:false,
      openSignIn:false,
      admin: 1
    }
  };

  componentWillMount() {
    this.getTopics();
  };

  handleBottomDrawer = () => {
    this.setState({
      openBottomDrawer:!this.state.openBottomDrawer
    })
  };

  getTopics = () => {
    fetch('http://localhost:8000/api/getTopics/channel=0&count=25', {
      method:'Get'
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      this.setState({
        topics:json.data
      })
    }.bind(this))
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

render() {
  let adminLink = null;
  if(this.state.admin == 1)
  {
    adminLink = <Link className="adminButton" to='/Admin'>Admin Link</Link>;
  }
    return (
      <div className="container">
        <Helmet title="ForumPage" meta={[ { name: 'description', content: 'A forum for free events in Augusta!' }]}/>



        <div className="siteTitle">
          <header>Event Headquarters for Augusta, Georgia
          </header>
        </div>

        <p className="adminButton">{adminLink}
        </p>

        <navBar className="desktopNavBar">

          <Link className="navButtons" to="/ForumPage">
              <FAComments/>
              <header>Recent
              </header>
          </Link>

          <a onClick={this.handleBottomDrawer} className="navButtons">
            <FaPlus/>
            NewTopic
          </a>

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

        <Drawer open={this.state.openBottomDrawer} onClose={this.handleBottomDrawer}>
        </Drawer>
        <div className="topicEntries">
        {this.state.topics.map((t, i) => (
          <Link key={i} to={'/Details/'+t.topicSlug}>{t.topicTitle}</Link>
        ))}
        </div>
      </div>
    );
  }
}

ForumPage.contextTypes = {
  router: React.PropTypes.object
};
