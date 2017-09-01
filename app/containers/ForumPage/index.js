/*
 *
 * ForumPage
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';

export default class ForumPage extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="ForumPage" meta={[ { name: 'description', content: 'Description of ForumPage' }]}/>

        //Remove this line and you can start writing your code here.
      </div>
    );
  }
}

ForumPage.contextTypes = {
  router: React.PropTypes.object
};
