import toast from "react-hot-toast";
const DEFAULT_SEAT_PRICE = 200; 

export const handleConfirmBooking = (selectedShow, selectedSeats, navigate) => {
  const booking = {
    _id: crypto.randomUUID(),
    user: { name: "GreatStack" }, // Replace with actual user data if available
    show: selectedShow,
    bookedSeats: selectedSeats,
    amount: selectedSeats.length * DEFAULT_SEAT_PRICE,
    ispaid: false,
    
  };

  const existingBookings = JSON.parse(localStorage.getItem("myBookings")) || [];

  // ✅ Duplicate Check Logic
  const isConflict = existingBookings.some(existing => {
    const sameMovie = existing.show.movie.title === booking.show.movie.title;
    const sameTime = existing.show.showDateTime === booking.show.showDateTime;
    const seatConflict = existing.bookedSeats.some(seat => booking.bookedSeats.includes(seat));
    return sameMovie && sameTime && seatConflict;
  });

  if (isConflict) {
    toast.error("Selected seat(s) already booked for this show. Please choose another seat.");
    return; // Stop booking if conflict found
  }

  // ✅ Save booking if no conflict
  existingBookings.push(booking);
  localStorage.setItem("myBookings", JSON.stringify(existingBookings));

  toast.success("Booking confirmed!");
  navigate("/my-bookings");
};
