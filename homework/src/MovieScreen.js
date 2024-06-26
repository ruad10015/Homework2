import React from 'react';
import './MovieScreen.css';
import MovieCard from './MovieCard';

const movies = [
  {
    id: 1,
    name: 'Spider-Man: No Way Home',
    genre: 'Fantasy',
    rejissor: 'Jon Watts',
    imdb: 8.2,
    finance: '$58.3M',
    description: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes...",
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy1KAVnBKm-j3cQQm9kZQ3sLeGCbdp2trc3A&s'
  },
  {
    id: 2,
    name: 'Interstellar',
    genre: 'Francis Ford Coppola',
    rejissor: 'Christopher Nolan',
    imdb: 8.7,
    finance: '$134.8M',
    description: 'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, ...',
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0zt0lp-O3XdL8zzdrEvyzmcl6kOwfgbv4xQ&s'
  },
  {
    id: 3,
    name: 'Iron Man',
    genre: 'Fantasy',
    rejissor: 'Jon Favreau',
    imdb: 7.9,
    finance: '$1.005B',
    description: 'After being held captive in an Afghan cave, billionaire engineer Tony Stark...',
    imgSrc: 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg'
  },
  {
    id: 4,
    name: 'The Eminence in Shadow',
    genre: 'Dark fantasy,Fantasy comedy,Isekai',
    rejissor: 'Daisuke Aizawa',
    imdb: 7.9,
    finance: '$2M',
    description: "When Cid is isekai'd to another world, he creates an underground organization to live out a fight against...",
    imgSrc: 'https://m.media-amazon.com/images/M/MV5BMGU1NzE1Y2UtZmZkOC00ODQ4LTkwNDAtNmE4Yzk3NTA4MThlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg'
  },
  {
    id: 5,
    name: 'Avengers Endgame',
    genre: 'Drama',
    rejissor: 'Anthony Russo,Joe Russo',
    imdb: 8.4,
    finance: '$322.2M',
    description: 'After the devastating events of Мстители: Война бесконечности (2018), the universe is in ruins. With the help of remaining allies...',
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaw6QTsDE3d6-qOL5xMa4-JDdBNTa3uspCrg&s'
  }
];

function MovieScreen() {
  return (
    <div className="MovieScreen">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieScreen;
