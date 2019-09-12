import React from 'react';
import styled from 'styled-components';

const tagColor = {
  'Java': '#FF8011',
  'JavaScript': '#CEBD00',
  'C++': '#FF0A12',
  'React': '#B722A6',
  'WebGL': '#24991E',
  'Big Data': '#2F3199',
  'React Native': '#3A9997',
  'GraphQL': '#9429CE',
  'AWS': '#FF6C23',
}

const ProjectContainer = (props) => (
  <Container>
    <img src={props.src} alt={props.title} />
    <h2>{props.title}</h2>
    <Tags>
      {
        props.tags.map((tag) => {
          return <p style={{backgroundColor: tagColor[tag]}}>{tag}</p>
        })
      }
    </Tags>
    <span className="description">
      {props.children}
    </span>
  </Container>
);

export default ProjectContainer;

const Container = styled.section`
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 2.5rem;
  height: 51.2rem;
  padding: 2.4rem;

  img {
    display: block;
    max-width: 100%;
    height: 35rem;
    border-radius: .5rem;
    margin: 0 auto;
  }

  h2 {
    display: inline-block;
  }

  .description {
    display: block;
    line-height: 2.2rem;
  }
`;

const Tags = styled.span`
  float: right;
  margin-top: .6rem;

  p {
    display: inline-block;
    border-radius: .8rem;
    padding: .2rem .8rem;
    margin-left: .5rem;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;