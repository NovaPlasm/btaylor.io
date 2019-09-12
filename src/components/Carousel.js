import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ChevronLeft from '../assets/chevron-circle-left.svg';
import ChevronRight from '../assets/chevron-circle-right.svg';

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
      <MainGrid>
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
      </MainGrid>
    );
  }
}

export default Carousel;

const MainGrid = styled.section`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 5rem 1fr 5rem;
  grid-gap: 2.4rem;
  font-family: "Source Sans Pro", sans-serif;
  margin: 4rem auto 0 auto;

  .previous {
    width: 5rem;
    height: 5rem;
    align-self: center;
    background-image: url(${ChevronLeft});
    background-size: cover;
  }

  .content {
    width: 76.8rem;
  }

  .next {
    width: 5rem;
    height: 5rem;
    align-self: center;
    background-image: url(${ChevronRight});
    background-size: cover;
  }
`;