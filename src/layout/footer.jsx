import React from 'react';
import Animate from '../components/animation';
import image from '../assets/me-3.jpg';
import image2 from '../assets/me-4.jpg';
import image3 from '../assets/me-5.jpg';

export default function Footer() {
  return (
    <div className='bg-primary text-secondary p-6 h-[400px] flex flex-col items-center justify-center'>
      <div className='w-full flex sm:flex-col p-2 gap-5'>
            <div className='w-1/2 sm:w-full flex flex-col items-start sm:items-center justify-center'>
                <div className='text-xl sm:text-lg font-bold'>İletişim:</div>
                <div className='text-sm sm:text-xs'>
                Email: <a href="mailto:dondurmailknur001@gmail.com" className='text-secondary hover:underline'>dondurmailknur001@gmail.com</a>
                </div>
                <div className='text-sm sm:text-xs'>
                Phone: <a href="https://api.whatsapp.com/send?phone=05314314458" className='text-secondary hover:underline'>05314314458</a>
                </div>
            </div>

            <div className='w-1/2 sm:w-full flex justify-end sm:justify-center gap-2'>
                <img
                    src={image}
                    alt='Me'
                    className='h-40 w-auto  border-2 border-secondary' // Add border and rounded style
                />
                <img
                    src={image3}
                    alt='Me'
                    className='h-40 w-auto  border-2 border-secondary' // Add border and rounded style
                />
                <img
                    src={image2}
                    alt='Me'
                    className='h-40 w-auto  border-2 border-secondary' // Add border and rounded style
                />
        
            </div>
      </div>

      {/* Copyright Information */}
      <p className='text-center text-2xl sm:text-base mb-2'>
        &copy; {new Date().getFullYear()} İlknur Dondurma. All Rights Reserved.
      </p>

      {/* Social Media Links */}
      <div className='flex space-x-4 text-sm sm:text-xs'>
        <a href="#" className='hover:underline'>Facebook</a>
        <a href="#" className='hover:underline'>Twitter</a>
        <a href="#" className='hover:underline'>Instagram</a>
        <a href="#" className='hover:underline'>LinkedIn</a>
      </div>
    </div>
  );
}
