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

  createTopic = () => {
    fetch('http://localhost:8000/api/createTopic', {
      method:'Get'
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      this.setState({
        channels:json.channels
      })
    }.bind(this))
  };

  storeTopic = () => {
    let data = new FormData;
    data.append('taskContent', this.state.inputItem);
    fetch('http://localhost:8000/api/storeTopic', {
    method:'Post',
    body:data
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      let topics = this.state.topics;
      topics.push(json.task);
      this.setState({
        topics:topics,
        inputItem:""
      })
      this.forceUpdate();
    }.bind(this))
  };

  render() {

    let classType = "renuiDrawerBottom";

    if(this.props.open === true)
    {
      return (
        <div className="renuiDrawerContainer" style={this.props.overStyle}>
          <div className="renuiDrawerOverlay" onClick={this.props.onClose}>
            <div className="TopicTitles">
              {this.state.channels.map((t, i) => (
                <p> {t.channelTitle} </p>
              ))
              }
            </div>
          </div>
          <div className={classType} style={this.props.style}>
            {this.props.children}
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
