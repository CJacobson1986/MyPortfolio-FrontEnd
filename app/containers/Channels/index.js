/*
 *
 * Channels
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';

export default class Channels extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="Channels" meta={[ { name: 'description', content: 'Description of Channels' }]}/>

        //Remove this line and you can start writing your code here.
      </div>
    );
  }
}

Channels.contextTypes = {
  router: React.PropTypes.object
};
