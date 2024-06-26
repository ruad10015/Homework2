import React from 'react';
import './Feedback.css';

const feedbacks = [
  {
    id: 1,
    movieId: 1,
    user: 'Revan Haciyev',
    comment: 'Spider-Man: No Way Home - The film was good but have some missing details',
    rating: 3.5,
    date: '2021-12-20'
  },
  {
    id: 2,
    movieId: 2,
    user: 'Elvin Camalzade',
    comment: 'Interstellar - I like this film so much and i wish to watch this film in cinema',
    rating: 5,
    date: '2016-06-21'
  },
  {
    id: 3,
    movieId: 3,
    user: 'Seid Memmedov',
    comment: 'Iron Man - I liked this film wish this film will have continue',
    rating: 4,
    date: '2008-06-22'
  },
  {
    id: 4,
    movieId: 4,
    user: 'Ruad Dunyamaliyev',
    comment: 'The Eminence in Shadow - The best film i have ever seen.',
    rating: 5,
    date: '2024-06-14'
  },
  {
    id: 5,
    movieId: 5,
    user: 'Vuqar Aslanov',
    comment: 'Avengers Endgame - This film is good but i dont like ending why Tony Stark died?Why not Spider-Man Thor Hulk?',
    rating: 4.5,
    date: '2019-05-15'
  }
];

function FeedbackSection() {
  return (
    <div className="FeedbackSection">
      <h2>Feedback</h2>
      {feedbacks.map(feedback => (
        <div className="feedback-item" key={feedback.id}>
          <p><strong>Movie ID:</strong> {feedback.movieId}</p>
          <p><strong>User:</strong> {feedback.user}</p>
          <p><strong>Comment:</strong> {feedback.comment}</p>
          <p><strong>Rating:</strong> {feedback.rating} / 5</p>
          <p><strong>Date:</strong> {feedback.date}</p>
        </div>
      ))}
    </div>
  );
}

export default FeedbackSection;
