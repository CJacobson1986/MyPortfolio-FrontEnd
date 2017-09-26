/**
*
* Slider
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

export default class Slider extends React.PureComponent {

  constructor() {
    super();
    this.state = {
      images: [],
      activeIndex:0,
      slideStyle: "slideImage"
    }
  }

  componentDidMount() {
  this.getBackground();
  this.autoSlide();
  this.setState({
    slideStyle: "slideImage slideAnimation"
    });
  }

  renderImage = () => {
  var images = this.state.images;
  var activeIndex = this.state.activeIndex;

  for(var i=0; i < images.length; i++)
  {
    if(i === activeIndex)
    {
      return images[i].photoURL;
    }
  }
  }

  nextImage = () => {
  var images = this.state.images;
  var activeIndex = this.state.activeIndex;

  if(activeIndex + 1 < images.length){
    this.setState({
      activeIndex: activeIndex +1,
    });
  }
  else {
    this.setState({
      activeIndex: 0,
    });
  }

  }

  autoSlide = () => {
  var _this = this;
  clearInterval(this.state.theInterval);
  let interval = setInterval(function() {
    _this.nextImage();
  }, 10000);
  this.setState({
    theInterval: interval,
  })
  }

  resetAnimation =() => {
   this.setState ({
     slideStyle: "slideImage"
    })
  }

  getBackground = () => {
    fetch('http://localhost:8000/api/getPictures', {
      method: 'GET'
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      this.setState({
        images: json.pictures
      })
    }.bind(this))
  }


  render() {
    return (
      <div>
            <div className="slider">
              <img className={this.state.slideStyle}
              src={this.renderImage()}/>
              </div>
      </div>
    );
  }
}

Slider.contextTypes = {
  router: React.PropTypes.object
};
