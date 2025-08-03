import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

const HeartToggle = ({ movie }) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    // Check if movie is already in favorites on load
    const saved = JSON.parse(localStorage.getItem('favoriteMovies')) || [];
    const isLiked = saved.some(item => item._id === movie._id);
    setLiked(isLiked);
  }, [movie]);

  const toggleHeart = () => {
    const saved = JSON.parse(localStorage.getItem('favoriteMovies')) || [];

    let updatedFavorites;
    if (liked) {
      // Remove from favorites
      updatedFavorites = saved.filter(item => item._id !== movie._id);
    } else {
      // Add to favorites
      updatedFavorites = [...saved, movie];
    }

    localStorage.setItem('favoriteMovies', JSON.stringify(updatedFavorites));
    setLiked(!liked);
  };

  return (
    <Heart
      className={`w-5 h-5 cursor-pointer transition-colors duration-200 ${
        liked ? 'text-red-500 fill-red-500' : 'text-gray-400'
      }`}
      onClick={toggleHeart}
    />
  );
};

export default HeartToggle;
