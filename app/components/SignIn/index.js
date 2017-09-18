/**
*
* SignIn
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

export default class SignIn extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state={
      channels:[],

    }
  }

  componentWillMount () {
    this.();
  };





  render() {

    let classType = "renuiDrawerBottom";

    if(this.props.open === true)
    {
      return (
        <div className="renuiDrawerContainer" style={this.props.overStyle}>
          <div className="renuiDrawerOverlay" onClick={this.props.onClose}>
            <input type="text" className="UserName" placeholder="UserName/Email"/>
            <input type="text" className="Password" placeholder="Password"/>
            <input type="submit" className="SubmitButton" value="submit"/>
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

SignIn.contextTypes = {
  router: React.PropTypes.object
};
