/*
 *
 * Details
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';

export default class Details extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="Details" meta={[ { name: 'description', content: 'Description of Details' }]}/>

        //Remove this line and you can start writing your code here.
      </div>
    );
  }
}

Details.contextTypes = {
  router: React.PropTypes.object
};
