import React from 'react';
import { Toaster, toast } from 'react-hot-toast';
import BlurCircle from './BlurCircle';
import { ArrowRightIcon } from 'lucide-react';

// Logos
import inoxLogo from '../assets/inox.png';
import pvrLogo from '../assets/pvr.png';
import keshariLogo from '../assets/keshari.png';
import mitraLogo from '../assets/mitra.png';
import cinepolisLogo from '../assets/cinepolis.png';

const TheaterSelect = ({ scrollTargetRef, selectedTheater, setSelectedTheater }) => {
  const showData = [
    { name: "INOX Bhubaneswar", location: "Esplanade Mall, Rasulgarh", logo: inoxLogo },
    { name: "PVR Cinemas", location: "DN Regalia Mall, Patrapada", logo: pvrLogo },
    { name: "Keshari Talkies", location: "Unit-2, Market Building", logo: keshariLogo },
    { name: "Mitra Mandap", location: "Saheed Nagar", logo: mitraLogo },
    { name: "Cinepolis", location: "Utkal Kanika Galleria, Kalpana Square", logo: cinepolisLogo },
  ];

  const onProceed = () => {
    if (!selectedTheater) {
      toast.error("Please select a theater", {
        style: {
          background: '#fee2e2',
          color: '#b91c1c',
          fontWeight: 'bold'
        }
      });
      return;
    }

    if (scrollTargetRef?.current) {
      const element = scrollTargetRef.current;
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      const offset = window.innerHeight / 2 - element.clientHeight / 2;

      window.scrollTo({
        top: elementTop - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='pt-12'>
      <Toaster position="top-center" reverseOrder={false} />

      <div className='flex flex-col gap-8 relative p-8 bg-primary/10 border border-primary/20 rounded-lg'>
        <BlurCircle top='-100px' left='-100px' />
        <BlurCircle top='100px' right='0px' />

        <p className='text-lg font-semibold'>Choose Theater</p>

        {showData.length === 0 ? (
          <p className='text-gray-400'>No theaters available.</p>
        ) : (
          <div className='flex flex-col gap-4'>
            {showData.map((theater, index) => (
              <div
                key={index}
                onClick={() => setSelectedTheater(theater)}
                className={`flex items-center gap-4 border p-4 rounded cursor-pointer transition-all
                  ${selectedTheater?.name === theater.name
                    ? 'bg-red-600 text-white'
                    : 'border-primary/70 hover:bg-white hover:text-primary'}`}
              >
                <img
                  src={theater.logo}
                  alt={theater.name}
                  className='w-14 h-14 object-contain rounded border bg-white'
                />
                <div className='flex flex-col'>
                  <p className='font-semibold text-lg'>{theater.name}</p>
                  <p className='text-sm opacity-80'>{theater.location}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-end">
          <button
            onClick={onProceed}
            className='bg-red-500 text-white px-8 py-2 rounded hover:bg-red-500/90 transition-all flex items-center gap-2'
          >
            Proceed <ArrowRightIcon size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TheaterSelect;
