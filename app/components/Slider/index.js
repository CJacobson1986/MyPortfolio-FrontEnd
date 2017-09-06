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
      images: ['Morocco1.jpg', 'Morocco2.jpg', 'Morocco3.jpg', 'Morocco4.jpg', 'Morocco5.jpg', 'Morocco6.jpg', 'Morocco7.jpg'],
      activeIndex:0,
      slideStyle: "slideImage"
    }
  }

  componentDidMount() {
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
      return images[i];
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

  console.log(this.state.activeIndex);
  }

  autoSlide = () => {
  var _this = this;
  clearInterval(this.state.theInterval);
  let interval = setInterval(function() {
    _this.nextImage();
  }, 12000);
  this.setState({
    theInterval: interval,
  })
  }

  resetAnimation =() => {
   this.setState ({
     slideStyle: "slideImage"
    })
  }


  render() {
    return (
      <div>
            <div className="slider">
              <img className={this.state.slideStyle}
              src={require('../../images/'+this.renderImage())}/>
              </div>
      </div>
    );
  }
}

Slider.contextTypes = {
  router: React.PropTypes.object
};
