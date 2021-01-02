import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ toggle }) => {
  return (
    <nav
      className='relative flex items-center justify-between h-16 font-mono text-black bg-white shadow-md'
      role='navigation'
    >
      <Link to='/' className='pl-8'>
        EGG
      </Link>
      <button className='px-4 cursor-pointer md:hidden' onClick={toggle}>
        <svg
          className='w-6 h-6'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </button>
      <div className='hidden pr-8 md:block'>
        <Link className='p-4' to='/'>
          Home
        </Link>
        <Link className='p-4' to='/menu'>
          Menu
        </Link>
        <Link className='p-4' to='/about'>
          About
        </Link>
        <Link className='p-4' to='/contact'>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
