import React from 'react';
import { useLocation } from 'react-router-dom';
import YouTube from 'react-youtube';

const TestPlayer = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const searchTitle = params.get('videoId')?.toLowerCase(); // movie title passed as param

const dummyTrailers = [
  { title: "Saiyaara", videoId: "Es2bYMBusfc" },
  { title: "War 2", videoId: "5LiAbT1Tx-I" },
  { title: "Housefull 5", videoId: "RWsh8NMo0e0" },
  { title: "Dhadak 2", videoId: "GRq6nXiJdug" },
  { title: "Phule", videoId: "MzxVEJrDpCE" },
  { title: "Mission Mumbai", videoId: "yHrgF_paQfA" },
  { title: "Jewel Thief: The Heist Begins", videoId: "gzN46jvgTck" },
  { title: "Metro... In Dino", videoId: "x0vbGmK_yRI" },
  { title: "Heer Express", videoId: "x0vbGmK_yRI" },
  { title: "Aankhon Ki Gustaakhiyan", videoId: "JbCwz-1OHWE" },
  { title: "Param Sundari", videoId: "N4wK3NtVRT0" },
  { title: "So Long Valley", videoId: "HZ6okhVPp28" },
  { title: "Sanam Teri Kasam", videoId: "XXQaKHlyC1o" },
  { title: "Rasa", videoId: "lTwOy4kRhvI" },
  { title: "Superboys of Malegaon", videoId: "Jl6XYTGTKFQ" },
  { title: "Sarzameen", videoId: "ZrXimagT6O4" },
  { title: "The Great Tanvi", videoId: "AXxoNlTbzwQ" },
  { title: "Baaghi 4", videoId: "EILt1kNWNkM" },
  { title: "Mere Husband Ki Biwi", videoId: "kPDPBU8eVuo" },
  { title: "Son of Sardaar 2", videoId: "HSX_KPfbP1o" },
];


  const matchedTrailer = dummyTrailers.find(trailer =>
    trailer.title?.toLowerCase().includes(searchTitle)
  );

  const videoId = matchedTrailer?.videoId;

  if (!videoId) {
    return (
      <div className="flex justify-center items-center h-screen text-lg text-white">
        Trailer not found.
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-6 py-12 bg-black text-white">
      <h1 className="text-2xl font-semibold mb-6">
        Official Trailer: {matchedTrailer.title}
      </h1>
      <div className="w-full max-w-4xl aspect-video">
        <YouTube
          videoId={videoId}
          opts={{
            width: '100%',
            height: '100%',
            playerVars: {
              autoplay: 1,
            },
          }}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default TestPlayer;
