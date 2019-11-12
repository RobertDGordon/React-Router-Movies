import React from 'react';
import { Link } from 'react-router-dom';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <button onClick={routeToHome} className="home-button">Home</button>
  </div>
);

export default SavedList;
