/*
 *
 * Details
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

export default class Details extends React.PureComponent {
  constructor () {
    super();
    this.state = {
      openSignUp:false,
      openSignIn:false,
      details:"",
      detailUser:""
    }
  };

  componentWillMount() {
    this.getDetail()
  }

  getDetail = () => {
    fetch('http://localhost:8000/api/getDetail/'+this.props.params.slug, {
      method:'Get'
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      this.setState({
        details:json.topic,
        detailUser:json.user
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
    return (
      <div className="container">
        <Helmet title="Topic Details" meta={[ { name: 'description', content: 'A forum for events in Augusta!' }]}/>

        <div className="siteTitle">
          <FaGroup/>
          <header>Topic Details
          </header>
        </div>

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

        <div className="topicBody">
          <p>Author:{this.state.detailUser.name}</p>
          <p>Channel:{this.state.details.channelTitle}</p>
          <p>Topic Title:{this.state.details.topicTitle}</p>
          <p>Topic Body:{this.state.details.topicBody}</p>
          <p>Replies:{this.state.details.topicReplies}</p>
          <p>Views:{this.state.details.topicViews}</p>
          <p><img src={this.state.detailUser.avatar} className="avatar"/></p>
        </div>
      </div>
    );
  }
  }

Details.contextTypes = {
  router: React.PropTypes.object
};
