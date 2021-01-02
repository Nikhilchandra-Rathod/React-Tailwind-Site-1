import React from 'react';

//https://images.unsplash.com/photo-1579008577893-3d57258d698b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80
//https://images.unsplash.com/photo-1600326145359-3a44909d1a39?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80

const Content = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen font-mono bg-white'>
        <img
          className='w-48 mb-20 rounded shadow-md object-fit md:w-96'
          src='https://images.unsplash.com/photo-1579008577893-3d57258d698b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
          alt='egg'
        />
        <div className='flex flex-col items-center justify-center'>
          <h2 className='mb-2 text-2xl'>Egg Muffins</h2>
          <p className='mb-2'>Csipsy, delicious and mutritious.</p>
          <span>$16</span>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center h-screen font-mono bg-white'>
        <img
          className='w-48 mb-20 rounded shadow-md object-fit md:w-96'
          src='https://images.unsplash.com/photo-1600326145359-3a44909d1a39?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
          alt='egg'
        />
        <div className='flex flex-col items-center justify-center'>
          <h2 className='mb-2 text-2xl'>Egg Nudals</h2>
          <p className='mb-2'>Csipsy, delicious and mutritious.</p>
          <span>$18</span>
        </div>
      </div>
    </>
  );
};

export default Content;
