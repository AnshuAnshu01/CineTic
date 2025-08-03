import React, { useEffect, useState } from 'react';
import { dummyBookingData } from '../../assets/assets';
import Title from '../../components/admin/Title';

const ListBookings = () => {
  const currency = import.meta.env.VITE_CURRENCY || '₹';

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllBookings = async () => {
    setBookings(dummyBookingData);
    setLoading(false);
  };

  useEffect(() => {
    getAllBookings();
  }, []);

  const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);
    const formattedDate = date.toLocaleDateString();
    const formattedTime = date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    return `${formattedDate} - ${formattedTime}`;
  };

  return !loading ? (
    <>
      <Title text1="List" text2="Bookings" />
      <div className="max-w-4xl mt-6 overflow-x-auto">
        <table className="w-full border-collapse rounded-md overflow-hidden text-nowrap">
          <thead>
            <tr className="bg-red-500/20 text-left text-white">
              <th className="p-2 font-medium pl-5">User Name</th>
              <th className="p-2 font-medium">Movie Name</th>
              <th className="p-2 font-medium">Show Time</th>
              <th className="p-2 font-medium">Seats</th>
              <th className="p-2 font-medium">Amount</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index} className="border-b border-white/10">
                <td className="p-2 pl-5">{booking.user?.name || '-'}</td>
                <td className="p-2">{booking.show?.movie?.title || 'N/A'}</td>
                <td className="p-2">{formatDateTime(booking.show?.showDateTime)}</td>
                <td className="p-2">{booking.bookedSeats?.join(', ') || '-'}</td>
                <td className="p-2">
                  {currency}
                  {booking.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  ) : (
    <div className="flex justify-center items-center min-h-screen text-white bg-black">
      Loading...
    </div>
  );
};

export default ListBookings;
