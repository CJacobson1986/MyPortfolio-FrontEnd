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
  constructor (props) {
    super(props);
    this.state = {
      detailReply:[],
      openSignUp:false,
      openSignIn:false,
      inputComment:""
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
        detailReply:json.replies.data
      })
    }.bind(this));
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

  storeReply = () => {
    let data = new FormData;
    let _this = this;
    data.append('topicID', this.props.params.id);
    data.append('replyBody', this.state.inputComment);
    fetch('http://localhost:8000/api/storeReply', {
      method:'POST',
      body:data,
      headers:{"Authorization":"Bearer "+ sessionStorage.getItem('token')}
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      _this.setState({
        notification: json.message
      }, function(){
        this.setState({
          inputComment:""
        })
        this.getReplies();
      })
    })
      // this.forceUpdate();
  };

  handleEnter = (event) => {
    if (event.keyCode === 13)
    this.storeReply();
  };

  handleComment = (event) => {
    this.setState({
      inputComment: event.target.value
    })
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

        <div className="topicReplies">
        <header className="topicTitle">Comments:</header>
        {this.state.detailReply.map((t, i) => (
          <div className="topicItems" key={i}><img src={t.avatar} className="avatar"/>{t.name}:{t.replyBody}</div>
        ))}
        </div>
        <div className="commentBox">
          <input type="text" className="commentInput" onChange={this.handleComment} placeholder="Enter Comments Here" value={this.state.inputComment}/>
          <input type="submit" className="submitButtonFour" value="submit" onClick={this.storeReply}/>
        </div>
      </div>
    );
  }
  }

Replies.contextTypes = {
  router: React.PropTypes.object
};
