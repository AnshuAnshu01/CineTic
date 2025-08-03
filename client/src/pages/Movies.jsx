import React from 'react';
import { dummyShowsData } from '../assets/assets';
import MovieCard from '../components/MovieCard';
import BlurCircle from '../components/BlurCircle'; // 🔹 Make sure this is correctly imported

const Movies = () => {
  return dummyShowsData.length > 0 ? (
    <div className='relative my-40 mb-60 px-6 md:px-16 lg:px-40 xl:px-44 overflow-hidden min-h-[80vh]'>

      {/* 🔵 Blur Effects */}
      <BlurCircle top="-120px" left="-100px" size="300px" color="#f84565" opacity="0.3" />
      <BlurCircle bottom="-80px" right="-100px" size="250px" color="#f84565" opacity="0.25" />

      <h1 className='text-lg font-medium my-4 text-white'>Now Showing</h1>
      <div className='flex flex-wrap max-sm:justify-center gap-8'>
        {dummyShowsData.map((movie) => (
          <MovieCard movie={movie} key={movie._id} />
        ))}
      </div>
    </div>
  ) : (
    <div className='relative'>
      <BlurCircle top="30%" left="30%" size="250px" color="#f84565" opacity="0.2" />
      <h2 className='text-center text-xl mt-10 text-white'>No movies available</h2>
    </div>
  );
};

export default Movies;
