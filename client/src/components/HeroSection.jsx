import React from 'react';
import { assets } from '../assets/assets';
import { CalendarIcon, ClockIcon, ArrowRight } from 'lucide-react';
import backgroundImage from '../assets/backgroundImage.png';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div
      className='relative w-full h-screen bg-cover bg-center bg-no-repeat flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 text-white'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Optional overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-20 z-0" /> */}

      <div className="relative z-10">
        <img src={assets.marvelLogo} alt="Marvel Studios" className='h-11 mt-20' />

        <h1
  className='text-5xl md:text-[70px] md:leading-[72px] font-semibold max-w-[44rem]'
  style={{ color: '#E6B800' }}
>
  Guardians <br /> of the Galaxy
</h1>
<div className='flex items-center gap-4 mt-2' style={{ color: '#1A1A1A' }}>
  <span>Action | Adventure | Sci-Fi</span>

  <div className='flex items-center gap-1'>
    <CalendarIcon className='w-5 h-5' /> 2018
  </div>

  <div className='flex items-center gap-1'>
    <ClockIcon className='w-5 h-5' /> 2h 8m
  </div>
</div>


        <button
          onClick={() => {
            navigate('/movies');
            scrollTo(0, 0);
          }}
          className="mt-6 flex items-center gap-2 px-10 py-3 text-sm text-white bg-[#f84565] hover:bg-[#D63854] transition rounded-full font-medium shadow-lg cursor-pointer"
        >
          Explore Movies
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
