/*
 *
 * Admin
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';
import FAComments from 'react-icons/lib/fa/comments';
import FaList from 'react-icons/lib/fa/list';
import FaTh from 'react-icons/lib/fa/th';
import FaGroup from 'react-icons/lib/fa/group';
import FaSearch from 'react-icons/lib/fa/search';
import './style.css';
import './styleM.css';

export default class Admin extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      photo:"",
      preview:""
    }
  };

  handlePhoto = (event) => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({
        photo: file,
        preview: reader.result
      })
    }
    reader.readAsDataURL(file);
  };

  storePhoto = () => {
    let data = new FormData();
    data.append('photo', this.state.photo);
    fetch('http://localhost:8000/api/storePhoto', {
      method:'POST' ,
      body:data
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      if(json.error)
      {
        alert(json.error);
      }
      else if (json.success)
      {
        alert(json.success);
      }
    })
  };

  updateTopic = () => {
    let data = new FormData();
    data.append('topicTitle', this.state.topicTitle);
    data.append('topicChannel', this.state.topicChannel);
    data.append('topicBody', this.state.topicBody);
    fetch('http://localhost:8000/api/updateTopic/'+this.props.params.slug, {
      method:'POST',
      body:data
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

  render() {
    return (
      <div className="container">
        <Helmet title="Administrator" meta={[ { name: 'description', content: 'Description of Home' }]}/>
        <div className="siteTitle">
          <header>Administration Page
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

        </navBar>
        <p className="picUploadHeader">Picture upload for Home Page background:</p>
        <input type="file" className="chooseFile" onChange={this.handlePhoto}/>
        <input type="submit" className="submitButton" value="submit" onClick={this.storePhoto}/>
        <img src={this.state.preview} className="image" />
      </div>
    );
  }
}

Admin.contextTypes = {
  router: React.PropTypes.object
};
