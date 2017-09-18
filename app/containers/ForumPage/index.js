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

export default class ForumPage extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      topics: [],
      openDrawer:false,
      openBottomDrawer:false
    }
  };

  componentWillMount() {
    this.getTopics();
  };

  handleBottomDrawer = () => {
    this.setState({
      openBottomDrawer:!this.state.openBottomDrawer
    })
  }

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


  render() {
    return (
      <div className="container">
        <Helmet title="ForumPage" meta={[ { name: 'description', content: 'A forum for free events in Augusta!' }]}/>

        <Link className="siteTitle" to="/ForumPage">
          <header>Free Events in Augusta
          </header>
        </Link>

        <navBar className="desktopNavBar">

          <Link className="navButtons" to="/ForumPage">
              <FAComments/>
              <header>Recent
              </header>
          </Link>

          <a onClick={this.handleBottomDrawer} className="navButtons">
            <FaPlus/>
            New Topic
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

          <Link className="navButtons" to="/SignIn-SignUp">
            <FaSignIn/>
            <header>SignIn/SignUp
            </header>
          </Link>
        </navBar>

        <Drawer open={this.state.openBottomDrawer} onClose={this.handleBottomDrawer} bottom>
        </Drawer>
        <div className="topicEntries">
        {this.state.topics.map((t, i) => (
          <p>{t.topicTitle}</p>
        ))}
        </div>

      </div>
    );
  }
}

ForumPage.contextTypes = {
  router: React.PropTypes.object
};
