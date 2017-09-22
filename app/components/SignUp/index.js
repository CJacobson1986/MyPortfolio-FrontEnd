/**
*
* SignUp
*
*/

import React from 'react';

import './style.css';
import './styleM.css';
import FaClose from 'react-icons/lib/fa/close';

export default class SignUp extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state={
    }
  };

  componentWillMount () {

  };

  doSignUp = () => {
    let data = new FormData;
    data.append('email', this.state.inputItemEmail); data.append('username', this.state.inputItemUser);
    data.append('password', this.state.inputItemPass); data.append('fullname', this.state.inputItemName)

  fetch('http://localhost:8000/api/signUp', {
    method:'Post',
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

  handleEnter = (event) => {
    if (event.keyCode === 13)
    this.doSignUp();
  };

  handleItemUser = (event) => {
    this.setState({
      inputItemUser: event.target.value
    })
  };
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
  handleItemName = (event) => {
    this.setState({
      inputItemName: event.target.value
    })
  };

  render() {
    if(this.props.open === true)
    {
      return (
        <div>
          <div className="fullOverlaySignUp" onClick={this.props.onClose}>
          </div>
          <div className="renuiDialogOverlayThree">
            <div className="renuiDialogThree">
            <header>Please fill out all fields.</header>
              <input type="text" className="userName" onChange={this.handleItemUser} placeholder="Username"/>
              <input type="text" className="email" onChange={this.handleItemEmail} placeholder="Email"/>
              <input type="text" className="password" onChange={this.handleItemPass} placeholder="Password"/>
              <input type="text" className="fullname" onChange={this.handleItemName} placeholder="Full Name"/>
              <input type="submit" className="SubmitButton" onClick={this.doSignUp} value="submit"/>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="renuiDialogOverlayHiddenThree"></div>
      );
    }
  }
}

SignUp.contextTypes = {
  router: React.PropTypes.object
};
