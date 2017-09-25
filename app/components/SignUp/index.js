/**
*
* SignUp
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

export default class SignUp extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state={
      notification:""
    }
  };

  componentWillMount () {

  };

  doSignUp = () => {
    let data = new FormData;
    let _this = this;
    data.append('email', this.state.inputItemEmail);
    data.append('username', this.state.inputItemUser);
    data.append('password', this.state.inputItemPass);
    data.append('fullname', this.state.inputItemName);

    fetch('http://localhost:8000/api/signUp', {
      method:'Post',
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
            <header>Please fill out all fields</header>
              <input type="text" className="textInputThree" onChange={this.handleItemUser} placeholder="Username"/>
              <input type="text" className="textInputThree" onChange={this.handleItemEmail} placeholder="Email"/>
              <input type="text" className="textInputThree" onChange={this.handleItemPass} placeholder="Password"/>
              <input type="text" className="textInputThree" onChange={this.handleItemName} placeholder="Full Name"/>
              <input type="submit" className="submitButtonThree" value="submit" onClick={this.doSignUp}/>
              <div className="notification"> {this.state.notification} </div>
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
