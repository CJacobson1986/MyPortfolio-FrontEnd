/*
 *
 * Replies
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
 import FaBullhorn from 'react-icons/lib/fa/bullhorn';
 import SignIn from 'components/SignIn';
 import SignUp from 'components/SignUp';

export default class Replies extends React.PureComponent {
  constructor () {
    super();
    this.state = {
    }
  };

  componentWillMount () {
    this.getReplies()
  }

  getReplies = () => {
    let _this = this;
    fetch('http://localhost:8000/api/getReplies/'+this.props.params.slug, {
      method:'Get'
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      _this.setState({
        detailReply:json.replies,
        detailData:json.data
      })
    }.bind(this))
  };

  storeReply = () => {
    let data = new FormData;
    let _this = this;
    data.append('topicID', this.state.inputItemEmail);
    data.append('username', this.state.inputItemUser);
    fetch('http://localhost:8000/api/storeReply', {
      method:'POST',
      body:data
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      _this.setState({
        notification: json.message
      })
    })
      this.forceUpdate();
  };



  render() {
    return (
      <div className="container">
        <Helmet title="Comments" meta={[ { name: 'description', content: 'A forum for free events in Augusta!' }]}/>

        <Link className="siteTitle" to="/ForumPage">
          <FaBullhorn/>
          <header>Comments
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


        </navBar>

        <div className="topicReplies">
          <p>{this.state.detailData}</p>
          <p>{this.state.detailReply}</p>
        </div>
      </div>
    );
  }
  }

Replies.contextTypes = {
  router: React.PropTypes.object
};
