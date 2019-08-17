import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Carousel.scss';

class Carousel extends Component {

  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired,
    looping: PropTypes.bool
  }

  static defaultProps = {
    looping: false
  }

  constructor() {
    super();

    this.state = {
      id: 0
    }

    this.cycle = this.cycle.bind(this);
  }

  cycle(increment) {
    let id = this.state.id;
    const looping = this.props.looping;
    id = (!looping && (id+increment < 0 || id + increment >= this.props.children.length))?id:(id+increment);
    if (id < 0) id = this.props.children.length-1;
    else if (id >= this.props.children.length) id = 0;
    this.setState({id: id});
  }

  render() {
    return (
      <div className="carousel-grid">
        <span className="previous" onClick={() => {this.cycle(-1)}} />
        <span className="content">
          {
            this.props.children.map((child, index) => {
              if (index === this.state.id) return child;
              return '';
            })
          }
        </span>
        <span className="next" onClick={() => {this.cycle(1)}} />
      </div>
    );
  }
}

export default Carousel;