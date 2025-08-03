import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-36 mt-40 w-full text-gray-300">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-14">
        <div className="md:max-w-96">
          <img alt="logo" className="w-36 h-auto" src={assets.logo} />
          <p className="mt-6 text-sm">
            Your go-to app for discovering, booking & enjoying movies like never before.
            Fast, seamless, and at your fingertips.
          </p>
          <div className="flex items-center gap-2 mt-4">
            <img src={assets.googlePlay} alt="google play" className="h-9 w-auto" />
            <img src={assets.appStore} alt="app store" className="h-9 w-auto" />
          </div>
        </div>

        <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
          <div>
            <h2 className="font-semibold mb-5">Company</h2>
            <ul className="text-sm space-y-2">
              <li>
                <Link to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link>
              </li>
              <li>
                <Link to="/about" onClick={() => window.scrollTo(0, 0)}>About us</Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Contact us</Link>
              </li>
              <li>
                <Link to="/privacy" onClick={() => window.scrollTo(0, 0)}>Privacy policy</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-5">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>9040350951</p>
              <p>rockbanty172@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <p className="pt-4 text-center text-sm pb-5">
        Copyright {new Date().getFullYear()} © <a href="https://github.com/AnshuAnshu01">Anshuman</a>. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
