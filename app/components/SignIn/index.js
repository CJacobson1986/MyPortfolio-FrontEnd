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
    }
  };

  componentWillMount () {
  };

  render() {
    if(this.props.open === true)
    {
      return (
        <div className="renuiDialogOverlay">
          <div className="renuiDialog">
            <input type="text" className="UserName" placeholder="UserName"/>
            <input type="text" className="Password" placeholder="Password"/>
            <input type="submit" className="SubmitButton" value="submit"/>
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
