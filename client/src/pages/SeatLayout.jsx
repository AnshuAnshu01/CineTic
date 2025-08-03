import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { dummyDateTimeData, dummyShowsData, dummyBookingData, assets } from '../assets/assets'
import { ArrowRightIcon, ClockIcon } from 'lucide-react'
import BlurCircle from '../components/BlurCircle'
import { toast } from 'react-hot-toast'
import { useUser } from '@clerk/clerk-react'
import { handleConfirmBooking } from '../lib/bookingUtils' // ✅ import added

const SeatLayout = () => {
  const groupRows = [['A', 'B'], ['C', 'D'], ['E', 'F'], ['G', 'H'], ['I', 'J']]
  const { id, date } = useParams()

  const [selectedSeats, setSelectedSeats] = useState([])
  const [selectedTime, setSelectedTime] = useState(null)
  const [show, setShow] = useState(null)
  const [bookedSeats, setBookedSeats] = useState([])

  const navigate = useNavigate()
  const { isSignedIn } = useUser()

  const getShow = async () => {
    const show = dummyShowsData.find(show => show._id.toString() === id)
    if (show) {
      setShow({
        movie: show,
        dateTime: dummyDateTimeData
      })
    }
  }

  const handleSeatClick = (seatId) => {
    if (!selectedTime) {
      return toast('Please select a time first')
    }

    if (bookedSeats.includes(seatId)) {
      return toast.error('This seat is already booked')
    }

    if (!selectedSeats.includes(seatId) && selectedSeats.length >= 4) {
      return toast('You can only select up to 4 seats')
    }

    setSelectedSeats(prev =>
      prev.includes(seatId)
        ? prev.filter(seat => seat !== seatId)
        : [...prev, seatId]
    )
  }

  const renderSeats = (row, count = 9) => (
    <div key={row} className="flex gap-2 mt-2 sm:gap-1 sm:mt-1">
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-1">
        {Array.from({ length: count }, (_, i) => {
          const seatId = `${row}${i + 1}`
          const isBooked = bookedSeats.includes(seatId)
          const isSelected = selectedSeats.includes(seatId)

          return (
            <button
              key={seatId}
              disabled={isBooked}
              onClick={() => handleSeatClick(seatId)}
              className={`h-8 w-8 sm:h-6 sm:w-6 rounded border cursor-pointer transition-all duration-200
                ${isBooked
                  ? 'bg-gray-600 border-gray-500 text-white cursor-not-allowed'
                  : isSelected
                    ? 'bg-[#FF004F] border-[#FF004F] text-white'
                    : 'border-[#FF004F]/60 text-white hover:bg-[#FF004F]/10'
                }`}
            >
              {seatId}
            </button>
          )
        })}
      </div>
    </div>
  )

  useEffect(() => {
    getShow()
  }, [id])

  useEffect(() => {
    if (!selectedTime) return

    const matchingBookings = dummyBookingData.filter(
      booking =>
        booking.show._id === id &&
        new Date(booking.show.showDateTime).getTime() === new Date(selectedTime.time).getTime()
    )

    const seats = matchingBookings.flatMap(booking => booking.bookedSeats)
    setBookedSeats(seats)
  }, [selectedTime, id])

  return show ? (
    <div className='flex flex-col md:flex-row px-6 md:px-16 lg:px-40 py-30 md:pt-50'>
      {/* Available Timings */}
      <div className='w-60 bg-[#FF004F]/10 border border-[#FF004F]/20 rounded-lg py-10 h-max md:sticky md:top-30'>
        <p className='text-lg font-semibold px-6 text-white'>Available Timings</p>
        <div className='mt-5 space-y-1'>
          {show.dateTime[date]?.map((items) => (
            <div
              key={items.time}
              onClick={() => setSelectedTime(items)}
              className={`flex items-center gap-2 px-6 py-2 w-max rounded-r-md cursor-pointer transition text-white
                ${selectedTime?.time === items.time
                  ? 'bg-[#FF004F]'
                  : 'hover:bg-[#FF004F]/30'}`}
            >
              <ClockIcon className='w-4 h-4' />
              <p className='text-sm'>
                {new Date(items.time).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: true
                })}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Seat Layout */}
      <div className='relative flex-1 flex flex-col items-center max-md:mt-16'>
        <BlurCircle top='-100px' left='-100px' />
        <BlurCircle bottom='0' right='0' />

        <h1 className='text-2xl font-semibold mb-4 text-white'>Select your seat</h1>

        <img src={assets.screenImage} alt='screen' />
        <p className='text-gray-400 text-sm mb-6'>SCREEN SIDE</p>

        <div className='flex flex-col items-center mt-20 text-xs text-gray-300'>
          <div className='grid grid-cols-2 md:grid-cols-1 gap-8 md:gap-2 mb-6'>
            {groupRows[0].map(row => renderSeats(row))}
          </div>

          <div className='grid grid-cols-2 gap-11'>
            {groupRows.slice(1).map((group, idx) => (
              <div key={idx}>
                {group.map(row => renderSeats(row))}
              </div>
            ))}
          </div>

          {/* Back Row */}
          <div className="mt-8">
            <div className="flex justify-center">
              <div className="flex flex-wrap gap-1">
                {renderSeats('K', 20)}
              </div>
            </div>
          </div>

          {/* Proceed Button */}
          <button
            onClick={() => {
              if (!isSignedIn) return toast.error("Please login to proceed.")
              if (!selectedTime) return toast.error("Please select a time before proceeding.")
              if (selectedSeats.length === 0) return toast.error("Please select at least one seat before proceeding.")

              // ✅ Use shared utility function
              const selectedShow = {
                _id: show.movie._id,
                movie: show.movie,
                showDateTime: selectedTime.time,
                showPrice: show.movie.price,
              }

              handleConfirmBooking(selectedShow, selectedSeats, navigate)
            }}
            className='flex items-center gap-1 mt-20 px-6 py-2 sm:px-10 sm:py-3 text-sm bg-red-600 hover:bg-red-700 transition rounded-full font-medium text-white cursor-pointer active:scale-95'
          >
            Proceed to Checkout
            <ArrowRightIcon strokeWidth={3} className='w-5 h-5' />
          </button>
        </div>
      </div>
    </div>
  ) : null
}

export default SeatLayout
