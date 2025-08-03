import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { dummyTrailers } from '../assets/assets';
import BlurCircle from './BlurCircle';
import { PlayCircle } from 'lucide-react';
import Youtube from 'react-youtube-embed';

const TrailerSection = () => {
  const [params] = useSearchParams();
  const queryVideoId = params.get('videoId');

  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0] || {});

  useEffect(() => {
    if (queryVideoId) {
      const matched = dummyTrailers.find(t => t.videoId === queryVideoId);
      if (matched) setCurrentTrailer(matched);
    }
  }, [queryVideoId]);

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden relative bg-black">
      <p className="text-gray-300 font-medium text-lg max-w-[960px] mx-auto">Trailers</p>

      {/* Blur Effects */}
      <BlurCircle top="-100px" right="-100px" size="300px" color="#f84565" opacity="0.3" />
      <BlurCircle top="70%" right="5%" size="220px" color="#f84565" opacity="0.25" />

      <div className="relative mt-6">
        {/* ✅ Responsive YouTube Player */}
        <div className="w-full max-w-[960px] aspect-video mx-auto px-4">
          <Youtube id={currentTrailer.videoId} className="w-full h-full" />
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-6">
          {dummyTrailers.map((trailer, index) => (
            <button
              key={index}
              onClick={() => setCurrentTrailer(trailer)}
              className={`w-4 h-4 rounded-full ${
                currentTrailer.videoId === trailer.videoId ? 'bg-[#f84565]' : 'bg-gray-600'
              } hover:scale-110 transition`}
              title={`Trailer ${index + 1}`}
              aria-label={`Select Trailer ${index + 1}`}
            />
          ))}
        </div>

        {/* Trailer Thumbnails */}
        <div className="group grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8 mt-10 max-w-3xl mx-auto">
          {dummyTrailers.map((trailer) => (
            <div
              key={trailer.image}
              className="relative group-hover:opacity-50 hover:-translate-y-1 duration-300 transition max-md:h-60 md:max-h-60 cursor-pointer"
              onClick={() => setCurrentTrailer(trailer)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setCurrentTrailer(trailer);
                }
              }}
            >
              <img
                src={trailer.image}
                alt={trailer.title || 'Trailer thumbnail'}
                className="rounded-lg w-full h-full object-cover brightness-75"
              />
              <PlayCircle
                strokeWidth={1.6}
                className="absolute top-1/2 left-1/2 w-5 md:w-8 h-5 md:h-12 transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrailerSection;
