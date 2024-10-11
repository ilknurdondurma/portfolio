import React, { useState } from 'react'
import { userInformationJSON } from '../../data/userInformatinJSON';
import { BiSolidSchool } from 'react-icons/bi';
import Animate from '../../components/animation';
import pc from '../../assets/pc-1.png';

export default function Work() {
    const [user] = useState(userInformationJSON[0]); // Access the first user directly

  return (
    <div>
        {/* Deneyim Bilgileri */} 
        <section className='h-full flex flex-col justify-evenly p-2 bg-secondary text-primary pt-20'>
          <h1 className='text-5xl sm:text-3xl p-2 font-bold flex justify-center'>Deneyim Bilgilerim</h1>
          <div className='w-full grid grid-cols-10 sm:grid-cols-1 gap-10 sm:gap-5 p-5'>
            {/* Sol taraf (Work items solda) */}
            <div className='col-span-4 flex flex-col gap-5'>
              {user.works && user.works.length > 0 ? (
                user.works
                  .slice(0, Math.ceil(user.works.length / 2)) // İlk yarısını sol tarafa yerleştir
                  .map((workItem, index) => (
                    <div key={index} className='flex flex-col gap-3 '>
                      <div className='opacity-50'><BiSolidSchool size={50} /></div>
                      {/* Şirket */}
                      <div className='text-2xl sm:text-lg'>{workItem.company}</div>

                      {/* Pozisyon */}
                      
                        <div className='text-xl sm:text-base'>{workItem.position}</div>
                      

                      {/* Açıklama */}
                      
                        <div className='text-xl sm:text-base'>{workItem.description}</div>
                      

                      {/* Süre */}
                      
                        <div className='text-lg sm:text-xs'>{workItem.duration}</div>
                      
                    </div>
                  ))
              ) : (
                <div>No work data available</div>
              )}
            </div>

            {/* Ortadaki Resim */}
            <div className='col-span-2 sm:row-start-1 flex justify-center items-center'>
              <Animate duration={1}>
                <img
                  src={pc}
                  alt='me'
                  className='w-60 sm:w-40 h-60 sm:h-40 rounded-xl object-cover'
                />
              </Animate>
            </div>

            {/* Sağ taraf (Work items sağda) */}
            <div className='col-span-4 flex flex-col gap-5'>
              {user.works && user.works.length > 0 ? (
                user.works
                  .slice(Math.ceil(user.works.length / 2)) // İkinci yarısını sağ tarafa yerleştir
                  .map((workItem, index) => (
                    <div key={index} className='flex flex-col gap-3 '>
                      <div className='opacity-50'><BiSolidSchool size={50} /></div>
                      {/* Şirket */}
                      <div className='text-2xl sm:text-lg'>{workItem.company}</div>

                      {/* Pozisyon */}
                     
                        <div className='text-xl sm:text-base'>{workItem.position}</div>
                      

                      {/* Açıklama */}
                      
                        <div className='text-xl sm:text-base'>{workItem.description}</div>
                      

                      {/* Süre */}
                      
                        <div className='text-lg sm:text-xs'>{workItem.duration}</div>
                      
                    </div>
                  ))
              ) : (
                <div>No work data available</div>
              )}
            </div>
          </div>
          

        </section>
    </div>
  )
}
