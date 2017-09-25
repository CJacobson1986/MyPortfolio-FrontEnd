/**
*
* Drawer
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

export default class Drawer extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state={
      channels:[],
    }
  }

  componentWillMount () {
    this.createTopic();
  };

  storeTopic = () => {
    let data = new FormData;
    let _this = this;
    data.append('topicTitle', this.state.inputTitle);
    data.append('topicChannel', this.state.inputChannel);
    data.append('topicBody', this.state.inputBody);

    fetch('http://localhost:8000/api/storeTopic', {
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

  createTopic = () => {
    let _this = this;
    fetch('http://localhost:8000/api/createTopic', {
      method:'Get'
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      _this.setState({
        channels:json.channels
      })
    }.bind(this))
  };

  handleItemTitle = (event) => {
    this.setState({
      inputItemTitle: event.target.value
    })
  };
  handleItemChannel = (event) => {
    this.setState({
      inputItemChannel: event.target.id
    })
  };
  handleItemBody = (event) => {
    this.setState({
      inputItemBody: event.target.value
    })
  };

  render() {

    let classType = "renuiDrawerBottom";

    if(this.props.open === true)
    {
      return (
        <div>
          <div className="fullOverlayDrawer" onClick={this.props.onClose}>
          </div>
          <div className="renuiDrawerContainer" style={this.props.overStyle}>
            <div className="renuiDrawerOverlay">
              <div className="TopicTitles">
                <header>Channel List:
                </header>
                {this.state.channels.map((t, i) => (
                  <div key={i} className="channelButton" onClick={this.handleItemChannel}> {t.channelTitle} </div>
                ))
                }
              </div>
            </div>
            <div style={this.props.style}>
              {this.props.children}
            </div>
            <input type="text" className="textInput" onChange={this.handleItemTitle} placeholder="New Event"/>
            <input type="text" className="textInput" onChange={this.handleItemBody} placeholder="Event Description"/>
            <input type="submit" className="submitButton" value="submit" onClick={this.storeTopic}/>
            <div className="notification"> {this.state.notification} </div>
          </div>
        </div>
      );
    }
    else if(this.props.docked) {
      return (
        <div className={classType} style={this.props.style} style={this.props.overStyle}>
          {this.props.children}
        </div>
      );
    }
    else {
      return (
        <div className="renuiDrawerOverlayHidden"></div>
      );
    }
  }
}

Drawer.contextTypes = {
  router: React.PropTypes.object
};
