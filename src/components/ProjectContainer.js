import React from 'react';
import './ProjectContainer.scss';

/*
Java - FF8011
JavaScript - FFF200
C++ - FF0A12

React - B722A6
WebGL - 24991E
Big Data (?) - 2F3199
React Native - 3A9997
GraphQL - 9429CE
AWS - FF6C23


*/

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
  <div className="project-container">
    <img src={props.src} alt={props.title} />
    <h2 className="title">{props.title}</h2>
    <span className="tags">
      {
        props.tags.map((tag) => {
          return <p style={{backgroundColor: tagColor[tag]}}>{tag}</p>
        })
      }
    </span>
    <span className="description">
      {props.children}
    </span>
  </div>
);

export default ProjectContainer;