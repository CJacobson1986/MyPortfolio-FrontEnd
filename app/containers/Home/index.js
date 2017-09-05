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
        <Helmet title="Efficient Designing" meta={[ { name: 'description', content: 'Description of Home' }]}/>
        <MenuButton ref="menu"/>
        <div onClick={() => this.refs.menu.handleMenu()}>
        <Slider />
        </div>
      </div>
    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.object
};
