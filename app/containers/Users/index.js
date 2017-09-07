/*
 *
 * Users
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';

export default class Users extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="Users" meta={[ { name: 'description', content: 'Description of Users' }]}/>

        //Remove this line and you can start writing your code here.
      </div>
    );
  }
}

Users.contextTypes = {
  router: React.PropTypes.object
};
