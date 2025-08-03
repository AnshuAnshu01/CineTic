import React, { useEffect, useState } from 'react';
import { dummyShowsData } from '../../assets/assets';
import Title from '../../components/admin/Title';
import { StarIcon, CheckIcon, CalendarIcon, Trash2Icon as DeleteIcon } from 'lucide-react';
import { kConverter } from '../../lib/kConverter';

const Addshows = () => {
  const currency = import.meta.env.VITE_CURRENCY || '₹';
  const [newPlayingMovies, setnewPlayingMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [dateTimeSelection, setDateTimeSelection] = useState({});
  const [dateTimeInput, setDateTimeInput] = useState('');
  const [showPrice, setShowPrice] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchNewPlayingMovies = async () => {
    setnewPlayingMovies(dummyShowsData);
  };

  const handleSelectMovie = (movieId) => {
    if (
      selectedMovie &&
      (Object.keys(dateTimeSelection).length > 0 || showPrice)
    ) {
      const confirmReset = window.confirm(
        'Switching movies will reset current date-time and price. Continue?'
      );
      if (!confirmReset) return;

      // Reset form
      setDateTimeSelection({});
      setShowPrice('');
      setDateTimeInput('');
    }
    setSelectedMovie(movieId);
  };

  const handleDateTimeAdd = () => {
    if (!dateTimeInput) return;
    const [date, time] = dateTimeInput.split('T');
    if (!date || !time) return;

    setDateTimeSelection((prev) => {
      const times = prev[date] || [];
      if (!times.includes(time)) {
        return { ...prev, [date]: [...times, time] };
      }
      return prev;
    });

    setDateTimeInput('');
  };

  const handleRemoveTime = (date, time) => {
    setDateTimeSelection((prev) => {
      const filteredTimes = prev[date].filter((t) => t !== time);
      if (filteredTimes.length === 0) {
        const { [date]: _, ...rest } = prev;
        return rest;
      }
      return {
        ...prev,
        [date]: filteredTimes,
      };
    });
  };

  const handleAddShow = () => {
    if (!selectedMovie || !showPrice || Object.keys(dateTimeSelection).length === 0) {
      alert('Please select a movie, set price, and add at least one show time.');
      return;
    }

    // Dummy submission logic
    console.log({
      movieId: selectedMovie,
      showPrice,
      dateTimeSelection,
    });

    alert('Show added successfully!');

    // Reset form
    setSelectedMovie(null);
    setShowPrice('');
    setDateTimeInput('');
    setDateTimeSelection({});
  };

  useEffect(() => {
    fetchNewPlayingMovies().finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-white bg-black">
        Loading...
      </div>
    );
  }

  return newPlayingMovies.length > 0 ? (
    <>
      <Title text1="Add" text2="Shows" />

      <p className="mt-20 text-lg font-medium">Now Playing Movies</p>
      <div className="overflow-x-auto pb-4">
        <div className="group flex flex-wrap gap-4 mt-4 w-max">
          {newPlayingMovies.map((movie) => (
            <div
              key={movie.id}
              className={`relative max-w-40 cursor-pointer group-hover:not-hover:opacity-40 hover:-translate-y-1 transition duration-300`}
              onClick={() => handleSelectMovie(movie.id)}
            >
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src={movie.poster_path}
                  alt={movie.title || 'Movie Poster'}
                  className="w-full object-cover brightness-90"
                />
                <div className="text-sm flex items-center justify-between p-2 bg-black/70 w-full absolute bottom-0 left-0">
                  <p className="flex items-center gap-1 text-gray-400">
                    <StarIcon className="w-4 h-4 text-primary fill-primary" />
                    {movie.vote_average?.toFixed(1) || '0.0'}
                  </p>
                  <p className="text-gray-300">
                    {kConverter(movie.vote_count || 0)} Votes
                  </p>
                </div>
              </div>

              {selectedMovie === movie.id && (
                <div className="absolute top-2 right-2 flex items-center justify-center bg-white h-6 w-6 rounded">
                  <CheckIcon className="w-4 h-4 text-red-500" strokeWidth={2.5} />
                </div>
              )}
              <p className="font-medium truncate">{movie.title}</p>
              <p className="text-gray-400 text-sm">{movie.release_date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Show Price Input */}
      <div className="mt-8">
        <label className="block text-sm font-medium mb-2">Show Price</label>
        <div className="inline-flex items-center gap-2 border border-gray-600 px-3 py-2 rounded-md">
          <p className="text-gray-400 text-sm">{currency}</p>
          <input
            min={0}
            type="number"
            value={showPrice}
            onChange={(e) => setShowPrice(e.target.value)}
            placeholder="Enter show price"
            className="outline-none bg-transparent text-white"
          />
        </div>
      </div>

      {/* Date & Time Selection */}
      <div className="mt-6">
        <label className="block text-sm font-medium mb-2">Select Date and Time</label>
        <div className="inline-flex gap-5 border border-gray-600 p-1 pl-3 rounded-lg items-center">
          <div className="relative">
            <CalendarIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-300 pointer-events-none" />
            <input
              type="datetime-local"
              value={dateTimeInput}
              onChange={(e) => setDateTimeInput(e.target.value)}
              className="pl-8 pr-2 py-2 bg-gray-800 text-white border border-gray-700 rounded-md outline-none"
            />
          </div>
          <button
            onClick={handleDateTimeAdd}
            className="bg-red-500/80 text-white px-3 py-2 text-sm rounded-lg hover:bg-primary cursor-pointer"
          >
            Add Time
          </button>
        </div>
      </div>

      {/* Display selected date-times with delete option */}
      {Object.keys(dateTimeSelection).length > 0 && (
        <div className="mt-6">
          <h2 className="mb-2 font-medium">Selected Date-Time</h2>
          <ul className="space-y-3">
            {Object.entries(dateTimeSelection).map(([date, times]) => (
              <li key={date}>
                <div className="font-medium">{date}</div>
                <div className="flex flex-wrap gap-2 mt-1 text-sm">
                  {times.map((time) => (
                    <div
                      key={time}
                      className="border border-primary px-2 py-1 flex items-center rounded"
                    >
                      <span>{time}</span>
                      <DeleteIcon
                        onClick={() => handleRemoveTime(date, time)}
                        width={15}
                        className="ml-2 text-red-500 hover:text-red-700 cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      <button
        onClick={handleAddShow}
        className="bg-red-500 text-white px-8 py-2 mt-6 rounded hover:bg-red-500/90 transition-all cursor-pointer"
      >
        Add Show
      </button>
    </>
  ) : (
    <div className="flex justify-center items-center min-h-screen text-white bg-black">
      No movies found.
    </div>
  );
};

export default Addshows;
