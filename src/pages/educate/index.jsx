import React, { useState } from 'react';
import Animate from '../../components/animation';
import { userInformationJSON } from '../../data/userInformatinJSON';
import { BiSolidSchool } from 'react-icons/bi';
import image2 from '../../assets/me-2.jpg';

export default function Educate() { // Changed the component name to Index
  const [user] = useState(userInformationJSON[0]); // Access the first user directly

  return (
    <div>
      {/* Eğitim Bilgileri */}
      <section className='h-full flex flex-col justify-evenly p-2 bg-primary text-secondary pt-20'>
        <h1 className='text-4xl sm:text-2xl p-2 font-bold flex justify-center'>Eğitim Bilgilerim</h1>
        <div className='w-full grid grid-cols-5 gap-5 p-5'>
          <div className='col-span-1 sm:col-span-2'>
            {/* Resim */}
            <Animate duration={1}>
              <img
                src={image2}
                alt='me'
                className='w-40 sm:w-40 h-40 sm:h-40 rounded-xl object-cover'
              />
            </Animate>
          </div>
          <div className='col-span-4 sm:col-span-3 flex items-center gap-5 '>
            <div className='w-full grid grid-cols-2 sm:grid-cols-1 gap-10 sm:gap-2'>
              {user.educations && user.educations.length > 0 ? (
                user.educations.map((educationItem, index) => (
                  <div key={index} className='flex flex-col gap-3 '>
                    <div className='opacity-50'><BiSolidSchool size={50} /></div>
                    {/* OKUL */}
                    <div className='text-2xl sm:text-lg'>{educationItem.education}</div>
                    {/* BÖLÜM */}
                    <div className='text-xl sm:text-base'>{educationItem.department}</div>
                    {/* YIL */}
                    <div className='text-lg sm:text-xs'>{educationItem.graduate}</div>
                  </div>
                ))
              ) : (
                <div>No education data available</div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
