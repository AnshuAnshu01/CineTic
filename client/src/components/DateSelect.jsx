import React, { useState } from 'react';
import BlurCircle from './BlurCircle';
import { ChevronLastIcon, ChevronRightIcon } from 'lucide-react';
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const DateSelect = ({ dateTime = {}, id, selectedTheater }) => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const onBookHandlen = () => {
    if (!selectedTheater) {
      toast.error("Please select a theater before booking.", {
        style: {
          background: '#fee2e2',
          color: '#b91c1c',
          fontWeight: 'bold',
        },
      });
      return;
    }

    if (!selected) {
      toast.error("Please select a date", {
        style: {
          background: '#fee2e2',
          color: '#b91c1c',
          fontWeight: 'bold',
        },
      });
      return;
    }

    navigate(`/movies/${id}/${selected}`);
    scrollTo(0, 0);
  };

  return (
    <div id='dateSelect' className='pt-30'>
      <Toaster position="top-center" reverseOrder={false} />

      <div className='flex flex-col md:flex-row items-center justify-between gap-10 relative p-8 bg-primary/10 border border-primary/20 rounded-lg'>
        <BlurCircle top='-100px' left='-100px' />
        <BlurCircle top='100px' right='0px' />

        <div>
          <p className='text-lg font-semibold'>Choose Date</p>
          <div className='flex items-center gap-6 text-sm mt-5 text-white'>
            <ChevronLastIcon width={28} />
            <div className='grid grid-cols-3 md:flex flex-wrap md:max-w-lg gap-4'>
              {dateTime && Object.keys(dateTime).map((date) => (
                <button
                  onClick={() => setSelected(date)}
                  key={date}
                  className={`flex flex-col items-center justify-center h-14 w-14 aspect-square rounded cursor-pointer transition text-white 
                    ${selected === date
                      ? 'bg-red-600 text-white'
                      : 'border border-primary/70 hover:bg-white hover:text-primary'}`}>
                  <span className='text-base font-bold'>{new Date(date).getDate()}</span>
                  <span className='text-xs'>
                    {new Date(date).toLocaleDateString('en-US', { month: 'short' })}
                  </span>
                </button>
              ))}
            </div>
            <ChevronRightIcon width={28} />
          </div>
        </div>

        <button
          onClick={onBookHandlen}
          className='bg-red-500 text-white px-8 py-2 mt-6 rounded hover:bg-red-500/90 transition-all cursor-pointer'>
          Book Now
        </button>
      </div>
    </div>
  );
};

export default DateSelect;
