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

  render() {
    if(this.state.open === true)
    {
      return (
        <div>
          <div className="renuiDialogOverlay">
            <div className="renuiDialog">
              <input type="text" className="UserName" placeholder="Email"/>
              <input type="text" className="Password" placeholder="Password"/>
              <input type="submit" className="SubmitButton" value="submit"/>
              <FaClose/>
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

SignUp.contextTypes = {
  router: React.PropTypes.object
};
