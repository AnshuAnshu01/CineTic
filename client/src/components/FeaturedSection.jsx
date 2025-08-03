import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { dummyShowsData } from '../assets/assets'; // ✅ Correct shared import
import BlurCircle from './BlurCircle';
import MovieCard from './MovieCard';

const FeaturedSection = () => {
  const navigate = useNavigate();

  return (
    <div className="relative px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden bg-black text-white">
      {/* Gradient background */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-r from-transparent via-black/90 to-[rgba(248,69,101,0.15)]" />
      <BlurCircle top="70%" right="6%" size="250px" color="#f84565" opacity="0.25" />

      {/* Content */}
      <div className="relative z-10 pt-20">
        <div className="flex items-center justify-between pb-10">
          <p className="text-gray-300 font-medium text-lg">Now Showing</p>
          <button
            onClick={() => navigate("/movies")}
            className="group flex items-center gap-2 text-gray-300 cursor-pointer"
          >
            View All
            <ArrowRight className="w-[18px] h-[18px] group-hover:translate-x-0.5 transition" />
          </button>
        </div>

        {/* Movie Cards */}
        <div className="flex flex-wrap gap-8 justify-center mt-8">
          {dummyShowsData && dummyShowsData.length > 0 ? (
            dummyShowsData.slice(0, 8).map((movie) => (
              <MovieCard key={movie._id} movie={movie} />
            ))
          ) : (
            <p>No movies available</p>
          )}
        </div>

        {/* Show More Button */}
        <div className="flex justify-center mt-24">
          <button
            onClick={() => {
              navigate("/movies");
              scrollTo(0, 0);
            }}
            className="px-10 py-3 text-sm text-white bg-[#f84565] hover:bg-[#D63854] transition rounded-md font-medium shadow-lg cursor-pointer"
          >
            Show more
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
