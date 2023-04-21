import React, { useState } from "react";

const Liker = () => {
  const [likes, setLike] = useState(0);
  const [image, setImage] = useState("https://randomfox.ca/images/41.jpg");

  function handleLikes() {
    setLike((likes) => likes + 1);
  }

  function handleNewFoxClick() {
    fetch("https://randomfox.ca/floof/")
      .then((res) => res.json())
      .then(({ image }) => {
        setImage(image);
      });
  }

  return (
    <div>
      <h1>Fox Finder</h1>
      <div>
        <button onClick={handleNewFoxClick}>New fox Please</button>
        <button onClick={handleLikes}>Likes fox likes: {likes}</button>
      </div>
      <img src={image} alt="Random Fox" />
    </div>
  );
};

export default Liker;
