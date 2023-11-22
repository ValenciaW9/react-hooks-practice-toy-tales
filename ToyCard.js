import React from 'react';

const ToyCard = ({ toy, onDelete, onLike }) => {
  const handleDelete = () => {
    onDelete(toy.id);
  };

  const handleLike = () => {
    onLike(toy.id, toy.likes + 1);
  };

  return (
    <div>
      <h2>{toy.name}</h2>
      <img src={toy.image} alt={toy.name} />
      <p>Likes: {toy.likes}</p>
      <button onClick={handleDelete}>Donate to Goodwill</button>
      <button onClick={handleLike}>Like</button>
    </div>
  );
};

export default ToyCard;