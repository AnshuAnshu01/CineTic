import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import { MenuIcon, SearchIcon, XIcon, TicketPlus } from 'lucide-react';
import {
  useClerk,
  useUser,
  SignInButton,
  ClerkLoaded,
  UserButton
} from '@clerk/clerk-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { signOut } = useClerk();
  const { user } = useUser();
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-4
                    bg-transparent backdrop-blur-md backdrop-saturate-150 border-b border-white/10 shadow-lg text-white">

      {/* Logo */}
      <Link to="/" className="flex items-center gap-1 text-white font-bold text-xl">
        <img src={assets.logo} alt="Logo" className="h-20" />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 text-white font-semibold">
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        {/* <Link to="/theaters">Theaters</Link> */}
        <Link to="/releases">Releases</Link>
        <Link to="/favorite">Favorite</Link>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Search Bar */}
        {searchOpen && (
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                navigate(`/search?query=${searchQuery}`);
                setSearchQuery('');
                setSearchOpen(false);
              }
            }}
            className="px-3 py-1 text-sm text-white bg-black rounded-md border border-gray-300 focus:outline-none w-44"
            autoFocus
          />
        )}

        {/* Search Icon */}
        <SearchIcon
          className="text-white cursor-pointer"
          onClick={() => setSearchOpen(!searchOpen)}
        />

        {/* User Auth */}
        <ClerkLoaded>
          {user ? (
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Action
                  label="My Bookings"
                  labelIcon={<TicketPlus width={15} strokeWidth={2} />}
                  onClick={() => navigate('/my-bookings')}
                />
              </UserButton.MenuItems>
            </UserButton>
          ) : (
            <SignInButton mode="modal">
              <button className="px-4 py-1 text-sm border border-white rounded-md transition hover:bg-[#f84565] hover:text-white">
                Login
              </button>
            </SignInButton>
          )}
        </ClerkLoaded>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center z-50">
        {menuOpen ? (
          <XIcon onClick={() => setMenuOpen(false)} className="text-white cursor-pointer" />
        ) : (
          <MenuIcon onClick={() => setMenuOpen(true)} className="text-white cursor-pointer" />
        )}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-black bg-opacity-80 backdrop-blur-md text-white flex flex-col items-center gap-6 py-6">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/movies" onClick={() => setMenuOpen(false)}>Movies</Link>
          <Link to="/theaters" onClick={() => setMenuOpen(false)}>Theaters</Link>
          <Link to="/releases" onClick={() => setMenuOpen(false)}>Releases</Link>
          <Link to="/favorite" onClick={() => setMenuOpen(false)}>Favorite</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
