// import React from 'react'
// import { useLocation, useNavigate } from 'react-router-dom'

// const Payment = () => {
//   const { state } = useLocation()
//   const navigate = useNavigate()

//   const booking = state?.booking

//   if (!booking) {
//     return (
//       <div className="flex items-center justify-center min-h-screen text-white bg-black">
//         <p>No booking found.</p>
//       </div>
//     )
//   }

//   const currency = import.meta.env.VITE_CURRENCY || "₹"

//   const handleConfirmPayment = () => {
//     const updatedBooking = { ...booking, ispaid: true }

//     // Update localStorage
//     const existingBookings = JSON.parse(localStorage.getItem("myBookings")) || []
//     const updatedBookings = existingBookings.map(b =>
//       JSON.stringify(b) === JSON.stringify(booking) ? updatedBooking : b
//     )

//     localStorage.setItem("myBookings", JSON.stringify(updatedBookings))

//     // Navigate back to bookings page
//     navigate('/mybooking')
//   }

//   return (
//     <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
//       <div className="bg-[#181818] border border-white/10 p-6 rounded-xl shadow-lg w-full max-w-2xl relative">
//         <h2 className="text-2xl font-semibold mb-6 text-center">Payment Summary</h2>

//         {/* Movie & Theater Info */}
//         <div className="flex flex-col md:flex-row items-center gap-4">
//           <img
//             src={booking.show.movie.poster_path}
//             alt="Movie Poster"
//             className="w-40 h-auto rounded shadow"
//           />
//           <div className="flex-1">
//             <h3 className="text-xl font-bold">{booking.show.movie.title}</h3>
//             <p className="text-sm text-gray-400">
//               {Math.floor(booking.show.movie.runtime / 60)} hr {booking.show.movie.runtime % 60} min
//             </p>
//             <p className="text-sm mt-2">
//               <span className="text-gray-400">Theater:</span> {booking.selectedTheater?.name || booking.selectedTheater}
//             </p>
//             <p className="text-sm">
//               <span className="text-gray-400">Show Time:</span> {new Date(booking.show.showDateTime).toLocaleString()}
//             </p>
//           </div>
//         </div>

//         {/* Ticket Info */}
//         <div className="mt-6">
//           <p><span className="text-gray-400">Seats:</span> {booking.bookedSeats.join(', ')}</p>
//           <p><span className="text-gray-400">Tickets:</span> {booking.bookedSeats.length}</p>
//           <p><span className="text-gray-400">Amount:</span> {currency}{booking.amount}</p>
//         </div>

//         {/* Confirm Button */}
//         <button
//           onClick={handleConfirmPayment}
//           className="mt-6 w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-2 px-4 rounded-full transition"
//         >
//           Confirm Payment
//         </button>
//       </div>
//     </div>
//   )
// }

// export default Payment
