/*
 *
 * ForumPage
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';

import './style.css';
import './styleM.css';
import 'react-icons/lib/fa/comments';
import 'react-icons/lib/fa/list';
import 'react-icons/lib/fa/th';
import 'react-icons/lib/fa/fort-awesome';

export default class ForumPage extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="ForumPage" meta={[ { name: 'description', content: 'Description of ForumPage' }]}/>

        <navBar className="DesktopNavBar">
          <header className="SiteTitle"> Fun in Augusta
          </header>
          <Link className="navButtons" to="/Home">
              <FAComments/>
              <header>Recent
              </header>
          </Link>
          <Link className="navButtons" to="/New">
              <FaList/>
              <header>New
              </header>
          </Link>
          <Link className="navButtons" to="/Channels">
              <FaTh/>
              <header>Channels
              </header>
          </Link>
          <Link className="navButtons" to="Users">
              <FaFortAwesome/>
              <header>
              </header>
          </Link>
          <Link className="navButtons" to="Search">
            <div typ>
          </Link>
          <div className="SignIn/SignUp">
          </div>
        </navBar>
        <div>
        <a href="TopicNewTopicTitle">
          <header className="NewTopic">+ New Topic</header>
        </a>
        </div>
        <div className="TopicEntries">

        </div>

      </div>
    );
  }
}

ForumPage.contextTypes = {
  router: React.PropTypes.object
};
