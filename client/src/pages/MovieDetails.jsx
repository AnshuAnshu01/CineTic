import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { dummyDateTimeData, dummyShowsData } from '../assets/assets';
import BlurCircle from '../components/BlurCircle';
import { PlayCircleIcon, StarIcon } from 'lucide-react';
import HeartToggle from '../components/HeartToggle';
import DateSelect from '../components/DateSelect';
import MovieCard from '../components/MovieCard';
import TheaterSelect from '../components/TheaterSelect';

const TimeFormat = (minutes) => {
  const hrs = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hrs}h ${mins}m`;
};

const MovieDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [selectedTheater, setSelectedTheater] = useState(null); // ✅ Theater state
  const navigate = useNavigate();

  const theaterSelectRef = useRef(null);
  const dateSelectRef = useRef(null);

  const getShow = async () => {
    const movie = dummyShowsData.find(show => show._id.toString() === id);
    if (movie) {
      setShow({
        movie,
        dateTime: dummyDateTimeData
      });
    } else {
      setShow({ movie: null });
    }
  };

  useEffect(() => {
    getShow();
  }, [id]);

  if (!show) return <div></div>;
  if (!show.movie) return <div>Movie not found</div>;

  const trailerTitle = show.movie.title;

  const handleScrollToTheaterSelect = () => {
    if (theaterSelectRef.current) {
      theaterSelectRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const allDates = Object.keys(show.dateTime);
  const firstDate = allDates.length > 0 ? allDates[0] : null;
  const firstDateShowData = firstDate ? show.dateTime[firstDate] : [];

  return (
    <div className='px-6 md:px-16 lg:px-40 pt-30 md:pt-50'>
      {/* 🖼️ Movie Info Section */}
      <div className='flex flex-col md:flex-row gap-8 max-w-6xl mx-auto'>
        <img
          src={show.movie.poster_path}
          alt={show.movie.title}
          className='max-md:mx-auto rounded-xl h-104 max-w-70 object-cover'
        />

        <div className='relative flex flex-col gap-3'>
          <BlurCircle top='-100px' left='-100px' />
          <p className='text-red-500'>ENGLISH / HINDI</p>
          <h1 className='text-4xl font-semibold max-w-96 text-balance'>
            {show.movie.title}
          </h1>
          <div className='flex items-center gap-2 text-gray-300'>
            <StarIcon className='w-5 h-5 text-primary fill-primary' />
            {show.movie.vote_average.toFixed(1)} User Rating
          </div>
          <p className='text-gray-400 mt-2 text-sm leading-tight max-w-xl'>
            {show.movie.overview}
          </p>

          <p>
            {TimeFormat(show.movie.runtime)} ·{' '}
            {show.movie.genres.map(genre => genre.name).join(', ')} ·{' '}
            {show.movie.release_date.split('-')[0]}
          </p>

          <div className='flex items-center flex-wrap gap-4 mt-4'>
            <button
              onClick={() => navigate(`/trailers?videoId=${encodeURIComponent(trailerTitle)}`)}
              className="flex items-center gap-2 px-7 py-3 text-sm bg-gray-800 hover:bg-gray-900 transition rounded-md font-medium cursor-pointer active:scale-95"
            >
              <PlayCircleIcon className='w-5 h-5' />
              Watch Trailer
            </button>

            <button
              onClick={handleScrollToTheaterSelect}
              className="px-10 py-3 text-sm bg-red-600 hover:bg-red-700 transition rounded-md font-medium cursor-pointer active:scale-95 text-white"
            >
              Buy Tickets
            </button>

            <button className='bg-gray-700 p-2.5 rounded-full transition cursor-pointer active:scale-95'>
              <HeartToggle movie={show.movie} />
            </button>
          </div>
        </div>
      </div>

      {/* 👥 Cast */}
      <p className='text-lg font-medium mt-20'>Your Favorite Cast</p>
      <div className='overflow-x-auto no-scrollbar mt-8 pb-4'>
        <div className='flex items-center gap-4 w-max px-4'>
          {show.movie.casts.slice(0, 12).map((cast, index) => (
            <div key={index} className='flex flex-col items-center text-center'>
              <img
                src={cast.profile_path}
                alt={cast.name}
                className='rounded-full h-20 md:h-20 aspect-square object-cover'
              />
              <p>{cast.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 🎭 Theater & Date Selection */}
      <div className='mt-20'>
        <div ref={theaterSelectRef}>
          <TheaterSelect
            showData={firstDateShowData}
            scrollTargetRef={dateSelectRef}
            selectedTheater={selectedTheater}
            setSelectedTheater={setSelectedTheater}
          />
        </div>

        <div className='mt-16' ref={dateSelectRef}>
          <DateSelect
            dateTime={show.dateTime}
            id={id}
            selectedTheater={selectedTheater} // ✅ Passed correctly
          />
        </div>
      </div>

      {/* 🎬 Recommended Movies */}
      <p className='text-lg font-medium mt-20 mb-8'>You May Also Like</p>
      <div className='flex flex-wrap max-sm:justify-center gap-8'>
        {dummyShowsData.slice(0, 3).map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>

      <div className='flex justify-center mt-20'>
        <button
          onClick={() => {
            navigate(`/movies`);
            scrollTo(0, 0);
          }}
          className="px-10 py-3 text-sm bg-red-600 hover:bg-red-700 transition rounded-md font-medium cursor-pointer"
        >
          Show more
        </button>
      </div>
    </div>
  );
};

export default MovieDetails;
