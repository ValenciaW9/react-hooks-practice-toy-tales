import React, { useState } from 'react';

const ToyForm = ({ addNewToy }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newToy = {
      name: name,
      image: image,
      likes: 0
    };
    addNewToy(newToy);
    setName('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Toy</h2>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="image">Image:</label>
      <input
        type="text"
        id="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ToyForm;