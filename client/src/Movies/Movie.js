import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import axios from 'axios';

const Movie = (props) => {
  const [movie, setMovie] = useState();
 
  useEffect(() => {
    const id = Number(props.match.params.dataID);
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[]);
  
  // Uncomment this only when you have moved on to the stretch goals
  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie)
    console.log("savebutton", addToSavedList)
  }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }
  return (
    <div className="save-wrapper">
      
      <MovieCard key={movie.id} movie={movie} saveMovie={saveMovie} />
      <div className='save-button' onClick={saveMovie}>Save</div>

    </div>
  );
}

export default Movie;
