import React from 'react';
import './MovieCard.css';

function MovieCard({ movie }) {
  return (
    <div className="MovieCard">
      <div className="cinema-image">
        <img src={movie.imgSrc} alt={movie.name} />
      </div>
      <div className="cinema-details">
        <h2>{movie.name}</h2>
        <p>Movie Id: {movie.id}</p>
        <p>Genre: {movie.genre}</p>
        <p>Rejissor: {movie.rejissor}</p>
        <p>IMDB: {movie.imdb}</p>
        <p>Finance: {movie.finance}</p>
        <p>Description: {movie.description}</p>
      </div>
    </div>
  );
}

export default MovieCard;
