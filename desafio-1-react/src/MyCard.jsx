import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Tags from './Tags';

const MyCard = ({ imgSrc, name, description, tagText, tagColor }) => (
  <div className="card">
    <img src={imgSrc} className="card-img-top" alt={name} />
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">{description}</p>
      <Tags text={tagText} color={tagColor} />
    </div>
  </div>
);

export default MyCard;
