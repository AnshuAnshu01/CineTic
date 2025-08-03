import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom' // ✅ Import this
import BlurCircle from '../components/BlurCircle'
import { dateFormat } from '../lib/dateFormat'
import { X } from 'lucide-react'

const MyBooking = () => {
  const currency = import.meta.env.VITE_CURRENCY || "₹"
  const navigate = useNavigate(); // ✅ useNavigate hook

  const [bookings, setBookings] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getMyBookings = async () => {
    setTimeout(() => {
      const storedBookings = JSON.parse(localStorage.getItem("myBookings")) || []
      setBookings(storedBookings)
      setIsLoading(false)
    }, 500)
  }

  const handleCancelBooking = (indexToDelete) => {
    const updatedBookings = bookings.filter((_, index) => index !== indexToDelete)
    localStorage.setItem("myBookings", JSON.stringify(updatedBookings))
    setBookings(updatedBookings)
  }

  const handlePayNow = (booking, index) => {
    // Optional: Save current booking to localStorage/sessionStorage or pass via state
    navigate(`/payment`, { state: { booking, index } }) // ✅ redirect with booking info
  }

  useEffect(() => {
    getMyBookings()
  }, [])

  return !isLoading ? (
    <div className='relative px-6 md:px-16 lg:px-40 pt-30 md:pt-40 min-h-[80vh]'>
      {/* ...blur effects & heading */}

      {bookings.map((items, index) => (
        <div key={index} className='relative flex flex-col md:flex-row justify-between bg-primary/8 border border-primary/20 rounded-lg mt-4 p-2 max-w-3xl'>
          {/* ❌ Cancel Button */}
          <button onClick={() => handleCancelBooking(index)} className='absolute top-2 right-2 text-red-500 hover:text-red-700'>
            <X size={20} />
          </button>

          {/* Left Section */}
          <div className='flex flex-col md:flex-row'>
            <img src={items.show.movie.poster_path} alt="" className='md:max-w-45 aspect-video h-auto object-cover object-bottom rounded' />
            <div className='flex flex-col p-4'>
              <p className='text-lg font-semibold'>{items.show.movie.title}</p>
              <p className='text-gray-400 text-sm'>{Math.floor(items.show.movie.runtime / 60)} hr {items.show.movie.runtime % 60} min</p>
              <p className='text-gray-400 text-sm mt-auto'>{dateFormat(items.show.showDateTime)}</p>
            </div>
          </div>

          {/* Right Section */}
          <div className='flex flex-col justify-between items-end p-4 text-right'>
            <div className='text-sm mb-4'>
              <p><span>Theater: </span>{items.selectedTheater?.name || items.selectedTheater || items.show?.theaterName || "N/A"}</p>
              <p><span>Total Tickets: </span>{items.bookedSeats.length}</p>
              <p><span>Seat Number: </span>{items.bookedSeats.join(", ")}</p>
            </div>

            <div className='flex items-center gap-4 mt-auto'>
              <p className='text-2xl font-semibold'>{currency}{items.amount}</p>
              {!items.ispaid && (
                <button
                  onClick={() => handlePayNow(items, index)} // ✅ Button triggers redirect
                  className='bg-blue-300 hover:bg-blue-400 text-black px-4 py-1.5 text-sm rounded-full font-medium cursor-pointer'
                >
                  Pay Now
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="flex justify-center items-center min-h-screen text-white bg-black">
      Loading...
    </div>
  )
}

export default MyBooking
