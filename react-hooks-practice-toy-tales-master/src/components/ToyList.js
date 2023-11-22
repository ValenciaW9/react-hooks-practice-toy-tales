import React from 'react';
import ToyCard from './ToyCard';

const ToyList = ({ toys, deleteToy, likeToy }) => {
  const handleDelete = (toyId) => {
    deleteToy(toyId);
  };

  const handleLike = (toyId, newLikes) => {
    likeToy(toyId, newLikes);
  };

  return (
    <div>
      {toys.map((toy) => (
        <ToyCard
          key={toy.id}
          toy={toy}
          onDelete={handleDelete}
          onLike={handleLike}
        />
      ))}
    </div>
  );
};

export default ToyList;