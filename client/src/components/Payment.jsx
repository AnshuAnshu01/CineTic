import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const paymentMethods = [
  { label: 'QuikPay', value: 'quikpay' },
  { label: 'Debit/Credit Card', value: 'card' },
  { label: 'Net Banking', value: 'netbanking' },
  { label: 'Mobile Wallets', value: 'wallet' },
  { label: 'Gift Voucher', value: 'voucher' },
  { label: 'UPI', value: 'upi' },
  { label: 'Redeem Points', value: 'points' },
];

const quickPayOptions = [
  { type: 'card', label: 'VISA **** 3456', img: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg' },
  { type: 'upi', label: 'UPI', img: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Unified_Payments_Interface_logo.svg' }
];

const bankDetailsMap = {
  hdfc: { name: "HDFC Bank", login: "User ID", pass: "Password" },
  sbi: { name: "State Bank of India", login: "User Name", pass: "Password" },
  icici: { name: "ICICI Bank", login: "Customer ID", pass: "Password" },
  axis: { name: "Axis Bank", login: "Login ID", pass: "Password" },
  kotak: { name: "Kotak Bank", login: "Username", pass: "Password" },
};

const walletDetails = {
  paytm: { name: "Paytm Wallet", mobile: "9876543210", balance: "₹530.00" },
  phonepe: { name: "PhonePe", mobile: "8765432198", balance: "₹1000.50" },
  amazon: { name: "Amazon Pay", mobile: "9988776655", balance: "₹220.75" },
  gpay: { name: "Google Pay", mobile: "9234567810", balance: "₹302.10" },
};

const Payment = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const booking = state?.booking;
  const [selectedMethod, setSelectedMethod] = useState('quikpay');
  const [isProcessing, setIsProcessing] = useState(false);
  const [timer, setTimer] = useState(0);

  // QuikPay
  const [selectedQuick, setSelectedQuick] = useState('card');

  // Card payment
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardErrors, setCardErrors] = useState({});

  // UPI & Voucher and Wallet
  const [upiId, setUpiId] = useState('');
  const [upiError, setUpiError] = useState('');
  const [wallet, setWallet] = useState('');
  const [voucher, setVoucher] = useState('');
  const [qrRevealed, setQrRevealed] = useState(false);

  // Net Banking
  const [selectedBank, setSelectedBank] = useState('');
  const [bankLogin, setBankLogin] = useState('');
  const [bankPass, setBankPass] = useState('');

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer(t => t - 1);
      }, 1000);
    }
    return () => interval && clearInterval(interval);
  }, [timer]);

  if (!booking) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white bg-black">
        <p>No booking found.</p>
      </div>
    );
  }

  const currency = import.meta.env.VITE_CURRENCY || '₹';
  const baseAmount = booking.amount || 0;
  const fee = Math.round(baseAmount * 0.1);
  const total = baseAmount + fee;

  // Validation
  const validateCardDetails = () => {
    const errors = {};
    if (!cardNumber || cardNumber.replace(/\s+/g, '').length !== 16) {
      errors.cardNumber = 'Enter a valid 16-digit card number';
    }
    if (!expiry || !/^\d{2}\/\d{2}$/.test(expiry)) {
      errors.expiry = 'Enter expiry in MM/YY format';
    }
    if (!cvv || cvv.length !== 3) {
      errors.cvv = 'Enter a 3-digit CVV';
    }
    setCardErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateUpi = () => {
    if (!upiId || !/^[\w.\-]+@[\w]{3,}$/.test(upiId)) {
      setUpiError('Enter valid UPI ID');
      return false;
    }
    setUpiError('');
    return true;
  };

  // Confirm Payment
  const handleConfirmPayment = () => {
    if (timer > 0) return;
    if (selectedMethod === 'card' && !validateCardDetails()) return;
    if (selectedMethod === 'upi' && !validateUpi()) return;

    setIsProcessing(true);
    setTimer(120);

    setTimeout(() => {
      setIsProcessing(false);
      setTimer(0);
      const updatedBooking = { ...booking, isPaid: true };
      const existing = JSON.parse(localStorage.getItem('myBookings')) || [];
      const updated = existing.map(b => (b.id === booking.id ? updatedBooking : b));
      localStorage.setItem('myBookings', JSON.stringify(updated));
      alert('Payment successful! 🎉');
      navigate('/my-bookings');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black">
      <div
        className="flex flex-col md:flex-row items-center justify-center px-3 py-10 gap-6"
        style={{ minHeight: 'calc(100vh - 60px)', paddingTop: '60px' }}
      >
        {/* Sidebar */}
        <div className="bg-[#181818] rounded-xl shadow-lg shadow-red-500/60 p-6 w-full md:w-56 mb-6 md:mb-0">
          <h3 className="font-bold mb-4 text-white tracking-wide">Payment options</h3>
          <ul>
            {paymentMethods.map(method => (
              <li key={method.value}>
                <button
                  onClick={() => setSelectedMethod(method.value)}
                  className={`block w-full text-left px-3 py-2 rounded-lg mb-2 font-medium ${
                    selectedMethod === method.value
                      ? 'bg-red-700 text-white shadow shadow-red-500'
                      : 'text-gray-300 hover:bg-red-900'
                  }`}
                >
                  {method.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Payment Area */}
        <div className="flex-1 bg-[#181818] rounded-xl shadow-lg shadow-red-500/70 p-8 mb-6 md:mb-0">
          <h2 className="text-xl font-semibold mb-4 text-white border-b border-red-600 pb-3">
            Pay using {paymentMethods.find(m => m.value === selectedMethod)?.label}
          </h2>

          {/* Timer */}
          {timer > 0 && (
            <div className="mb-2 text-red-400 font-semibold">
              Please wait {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')} before trying again.
            </div>
          )}

          {/* QuikPay */}
          {selectedMethod === 'quikpay' && (
            <div>
              <div className="space-y-3 mb-6">
                {quickPayOptions.map(option => (
                  <label key={option.type} className="flex items-center gap-3 text-white cursor-pointer">
                    <input
                      type="radio"
                      name="quickpay"
                      checked={selectedQuick === option.type}
                      onChange={() => setSelectedQuick(option.type)}
                      className="accent-red-600"
                    />
                    <span className="flex gap-2 items-center font-bold">
                      <img src={option.img} alt={option.label} className="w-7 h-5" />
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
              <button
                onClick={() => setSelectedMethod(selectedQuick)}
                className="mt-2 w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg shadow shadow-red-500 transition"
                disabled={isProcessing || timer > 0}
              >
                {isProcessing ? 'Redirecting...' : 'MAKE PAYMENT'}
              </button>
            </div>
          )}

          {/* Debit/Credit Card */}
          {selectedMethod === 'card' && (
            <form
              onSubmit={e => {
                e.preventDefault();
                handleConfirmPayment();
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-white mb-1 font-semibold">Card Number</label>
                <input
                  type="text"
                  maxLength={19}
                  inputMode="numeric"
                  placeholder="1234 5678 9012 3456"
                  value={cardNumber}
                  onChange={e => setCardNumber(e.target.value.replace(/[^\d\s]/g, ''))}
                  className={`w-full p-2 rounded bg-[#282828] text-white ${
                    cardErrors.cardNumber ? 'border border-red-500' : 'border border-gray-700'
                  }`}
                  disabled={isProcessing || timer > 0}
                />
                {cardErrors.cardNumber && <p className="text-red-500 text-sm mt-1">{cardErrors.cardNumber}</p>}
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-white mb-1 font-semibold">Expiry (MM/YY)</label>
                  <input
                    type="text"
                    maxLength={5}
                    placeholder="MM/YY"
                    value={expiry}
                    onChange={e => setExpiry(e.target.value)}
                    className={`w-full p-2 rounded bg-[#282828] text-white ${
                      cardErrors.expiry ? 'border border-red-500' : 'border border-gray-700'
                    }`}
                    disabled={isProcessing || timer > 0}
                  />
                  {cardErrors.expiry && <p className="text-red-500 text-sm mt-1">{cardErrors.expiry}</p>}
                </div>
                <div className="flex-1">
                  <label className="block text-white mb-1 font-semibold">CVV</label>
                  <input
                    type="password"
                    maxLength={3}
                    placeholder="123"
                    value={cvv}
                    onChange={e => setCvv(e.target.value.replace(/\D/g, ''))}
                    className={`w-full p-2 rounded bg-[#282828] text-white ${
                      cardErrors.cvv ? 'border border-red-500' : 'border border-gray-700'
                    }`}
                    disabled={isProcessing || timer > 0}
                  />
                  {cardErrors.cvv && <p className="text-red-500 text-sm mt-1">{cardErrors.cvv}</p>}
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg shadow shadow-red-500 transition"
                disabled={isProcessing || timer > 0}
              >
                {isProcessing ? 'Processing...' : 'MAKE PAYMENT'}
              </button>
            </form>
          )}

          {/* Net Banking */}
          {selectedMethod === 'netbanking' && (
            <div className="space-y-4">
              <label className="block text-white mb-1 font-semibold">Select your bank</label>
              <select
                className="w-full p-2 text-white bg-[#282828] rounded"
                value={selectedBank}
                onChange={e => setSelectedBank(e.target.value)}
                disabled={isProcessing || timer > 0}
              >
                <option value="">Select</option>
                {Object.keys(bankDetailsMap).map(key => (
                  <option value={key} key={key}>
                    {bankDetailsMap[key].name}
                  </option>
                ))}
              </select>
              {selectedBank && (
                <div className="mt-3 bg-[#262626] p-4 rounded">
                  <div className="font-bold text-red-300 mb-2">{bankDetailsMap[selectedBank].name} NetBanking</div>
                  <input
                    className="w-full p-2 mb-2 rounded bg-[#282828] text-white border border-gray-700"
                    type="text"
                    placeholder={bankDetailsMap[selectedBank].login}
                    value={bankLogin}
                    onChange={e => setBankLogin(e.target.value)}
                    disabled={isProcessing || timer > 0}
                    required
                  />
                  <input
                    className="w-full p-2 mb-2 rounded bg-[#282828] text-white border border-gray-700"
                    type="password"
                    placeholder={bankDetailsMap[selectedBank].pass}
                    value={bankPass}
                    onChange={e => setBankPass(e.target.value)}
                    disabled={isProcessing || timer > 0}
                    required
                  />
                  <div className="text-white text-sm mb-3">
                    Transaction ID: <span className="text-gray-400">#NB{Math.floor(Math.random() * 999999)}</span>
                  </div>
                </div>
              )}
              <button
                onClick={handleConfirmPayment}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg shadow shadow-red-500"
                disabled={isProcessing || timer > 0 || !selectedBank}
              >
                {isProcessing ? 'Processing...' : 'MAKE PAYMENT'}
              </button>
            </div>
          )}

          {/* Mobile Wallets */}
          {selectedMethod === 'wallet' && (
            <div className="space-y-4">
              <label className="block text-white mb-1 font-semibold">Choose Wallet</label>
              <select
                className="w-full p-2 text-white bg-[#282828] rounded"
                value={wallet}
                onChange={e => {
                  setWallet(e.target.value);
                  setQrRevealed(false);
                }}
                disabled={isProcessing || timer > 0}
              >
                <option value="">Select</option>
                <option value="paytm">Paytm</option>
                <option value="phonepe">PhonePe</option>
                <option value="amazon">Amazon Pay</option>
                <option value="gpay">Google Pay Wallet</option>
              </select>
              {wallet && (
                <div className="bg-[#262626] rounded-lg p-4 space-y-3 shadow-inner">
                  <div className="font-bold text-red-300 mb-2">{walletDetails[wallet].name}</div>
                  <div className="text-white mb-1">
                    Mobile: <span className="text-gray-400">{walletDetails[wallet].mobile}</span>
                  </div>
                  <div className="text-white">
                    Wallet Balance: <span className="text-green-400">{walletDetails[wallet].balance}</span>
                  </div>

                  {/* QR code box */}
                  <div className="mt-4 flex justify-center items-center flex-col gap-2">
                    {!qrRevealed ? (
                      <div
                        className="relative w-56 h-56 bg-black rounded-lg flex justify-center items-center cursor-pointer overflow-hidden"
                        style={{ filter: 'blur(9px)' }}
                        onClick={() => setQrRevealed(true)}
                      >
                        <img
                          src="https://user-gen-media-assets.s3.amazonaws.com/seedream_images/b5684abb-089e-4023-b449-67b5b4aab728.png"
                          alt="Wallet QR Blurred"
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white text-red-600 font-bold py-1 px-4 rounded shadow-lg z-10">
                          Click Me
                        </span>
                      </div>
                    ) : (
                      <div className="w-56 h-56 bg-black rounded-lg flex justify-center items-center overflow-hidden">
                        <img
                          src="https://user-gen-media-assets.s3.amazonaws.com/seedream_images/a9964f01-b750-464b-a9e0-7746e8dceab9.png"
                          alt="Wallet QR Revealed"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}
              <button
                onClick={handleConfirmPayment}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg shadow shadow-red-500"
                disabled={!wallet || isProcessing || timer > 0}
              >
                {isProcessing ? 'Processing...' : 'MAKE PAYMENT'}
              </button>
              {timer > 0 && (
                <div className="mb-2 text-red-400 font-semibold mt-2">
                  Please wait {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')} before trying again.
                </div>
              )}
            </div>
          )}

          {/* Gift Voucher */}
          {selectedMethod === 'voucher' && (
            <div className="space-y-4">
              <label className="block text-white mb-1 font-semibold">Enter Voucher Code</label>
              <input
                type="text"
                className="w-full p-2 rounded bg-[#282828] text-white border border-gray-700"
                value={voucher}
                onChange={e => setVoucher(e.target.value)}
                disabled={isProcessing || timer > 0}
              />
              <button
                onClick={handleConfirmPayment}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg shadow shadow-red-500"
                disabled={!voucher || isProcessing || timer > 0}
              >
                {isProcessing ? 'Processing...' : 'REDEEM & PAY'}
              </button>
            </div>
          )}

          {/* UPI */}
          {selectedMethod === 'upi' && (
            <div className="space-y-4">
              <label className="block text-white mb-1 font-semibold">Enter your UPI ID</label>
              <input
                type="text"
                className={`w-full p-2 rounded bg-[#282828] text-white border ${
                  upiError ? 'border-red-500' : 'border-gray-700'
                }`}
                value={upiId}
                onChange={e => setUpiId(e.target.value)}
                disabled={isProcessing || timer > 0}
              />
              {upiError && <p className="text-red-500 text-sm">{upiError}</p>}
              <div className="mt-4 text-white font-bold">Or Scan QR Code:</div>
              <div className="mt-2 flex justify-center">
                <img
                  src="https://user-gen-media-assets.s3.amazonaws.com/seedream_images/a9964f01-b750-464b-a9e0-7746e8dceab9.png"
                  alt="UPI QR Code"
                  className="w-40 h-40 mx-auto rounded-lg border-2 border-red-300"
                />
              </div>
              <button
                onClick={handleConfirmPayment}
                className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg shadow shadow-red-500"
                disabled={isProcessing || timer > 0}
              >
                {isProcessing ? 'Processing...' : 'MAKE PAYMENT'}
              </button>
            </div>
          )}

          {/* Redeem Points */}
          {selectedMethod === 'points' && (
            <div className="space-y-4">
              <div className="text-white mb-2">You have 1500 points available.</div>
              <button
                onClick={handleConfirmPayment}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg shadow shadow-red-500"
                disabled={isProcessing || timer > 0}
              >
                {isProcessing ? 'Processing...' : 'REDEEM & PAY'}
              </button>
            </div>
          )}
        </div>

        {/* Order Summary */}
        <div className="w-full md:w-72 bg-[#181818] rounded-xl shadow-lg shadow-red-500/80 p-8 sticky top-8 text-white">
          <h4 className="font-bold mb-2 text-red-400">ORDER SUMMARY</h4>
          <div className="mb-3">
            <div className="font-semibold text-lg">{booking.show.movie.title}</div>
            <div className="text-sm text-gray-400">
              {booking.show.movie.language}, {booking.show.movie.format}
            </div>
            <div className="text-sm">
              {booking.selectedTheater?.name || booking.selectedTheater}
              <br />
              {new Date(booking.show.showDateTime).toLocaleString('en-IN', {
                dateStyle: 'medium',
                timeStyle: 'short',
              })}
            </div>
            <div className="text-sm text-gray-300 mt-1">
              Seats: {booking.bookedSeats.join(', ')}
            </div>
          </div>
          <div className="border-y border-red-600 py-2 mb-3 text-sm">
            <div className="flex justify-between">
              <span>Sub Total:</span>
              <span>
                {currency}
                {baseAmount.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span>+ Convenience fees:</span>
              <span>
                {currency}
                {fee.toFixed(2)}
              </span>
            </div>
          </div>
          <div className="font-bold flex justify-between mb-1 text-red-300">
            <span>Amount Payable:</span>
            <span>
              {currency}
              {total.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
