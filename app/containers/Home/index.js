/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';

import Slider from 'components/Slider';
import MenuButton from 'components/MenuButton'

export default class Home extends React.PureComponent {

  render() {
    return (
      <div className="container">
        <Helmet title="Effective Web Design" meta={[ { name: 'description', content: 'Description of Home' }]}/>
        <MenuButton ref="menu"/>
        <div onClick={() => this.refs.menu.closeMenu()}>
        <Slider />
        </div>
          <div className='VerticalOverlay'><header className='Author'>Christopher Jacobson</header><div className="siteDesc">I created this web page for the purpose of showing a simple clean presentation of a web page. I utilized the full stack development style creating the front-end, back-end, and database utilized in this site. I hope you enjoy.</div></div>
      </div>
    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.object
};
