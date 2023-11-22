import React from 'react';

const DeleteToy = ({ toyId, onDelete }) => {
  const handleDelete = () => {
    onDelete(toyId);
  };

  return (
    <button onClick={handleDelete}>Donate to Goodwill</button>
  );
};

export default DeleteToy;