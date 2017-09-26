/**
*
* SignIn
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

export default class SignIn extends React.PureComponent {

  constructor (props) {
    super(props);
    this.state={
      notification:""
    }
  };

  componentWillMount () {
  };

  authenticate = () => {
    let data = new FormData;
    let _this = this;
    data.append('email', this.state.inputItemEmail);
    data.append('password', this.state.inputItemPass);

  fetch('http://localhost:8000/api/authenticate', {
    method:'Post',
    body:data
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      if(json.error) {
        alert(json.error);
      }
      else {
        _this.setState({
          notification: json.message
        })
        sessionStorage.setItem('token', json.token);
      }
    })
      this.forceUpdate();
  };

  handleLogIn = () => {
    this.setState({
      openSignIn: !this.state.openSignIn
    })
  }
  handleItemPass = (event) => {
    this.setState({
      inputItemPass: event.target.value
    })
  };
  handleItemEmail = (event) => {
    this.setState({
      inputItemEmail: event.target.value
    })
  };

  render() {
    if(this.props.open === true)
    {
      return (
        <div>
          <div className="fullOverlaySignIn" onClick={this.props.onClose}>
          </div>
          <div className="renuiDialogOverlayTwo">
            <div className="renuiDialogTwo">
              <h>Please enter your email and password</h>
              <input type="text" className="textInputTwo" onChange={this.handleItemEmail} placeholder="Email"/>
              <input type="passwprd" className="textInputTwo" onChange={this.handleItemPass} placeholder="Password"/>
              <input type="submit" className="submitButtonTwo" value="submit" onClick={this.authenticate}/>
              <div className="notification"> {this.state.notification} </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="renuiDialogOverlayHidden"></div>
      );
    }
  }
}

SignIn.contextTypes = {
  router: React.PropTypes.object
};
