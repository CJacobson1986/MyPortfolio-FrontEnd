/*
 *
 * New
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';

export default class New extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="New" meta={[ { name: 'description', content: 'Description of New' }]}/>

        //Remove this line and you can start writing your code here.
      </div>
    );
  }
}

New.contextTypes = {
  router: React.PropTypes.object
};
