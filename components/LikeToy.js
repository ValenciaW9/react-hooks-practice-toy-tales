import React from 'react';

const LikeToy = ({ toyId, likes, onLike }) => {
  const handleLike = () => {
    onLike(toyId, likes + 1);
  };

  return (
    <div>
      <p>Likes: {likes}</p>
      <button onClick={handleLike}>Like</button>
    </div>
  );
};

export default LikeToy;