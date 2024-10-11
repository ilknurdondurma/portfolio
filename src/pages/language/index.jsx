import React, { useState } from 'react'
import language from '../../assets/image.png';
import { userInformationJSON } from '../../data/userInformatinJSON';
import ProgressBar from '../../components/progresbar';

export default function Language() {
    const [user] = useState(userInformationJSON[0]); // Access the first user directly

  return (
    <div>
        {/* diller */}
        <section className='h-full flex flex-col justify-evenly p-6 bg-secondary text-primary pt-20'>
          {/* Section Header */}
          <h1 className='text-5xl sm:text-3xl font-bold text-center mb-10'>Yabancı Dil Bilgilerim</h1>
          <div className='w-full grid grid-cols-5 mx-auto'>
                <div className='col-span-2'>
                  <img
                    src={language}
                    alt='me'
                    className='w-40 sm:w-40 h-40 sm:h-40 rounded-xl object-cover '
                  />
                </div>
                <div className='col-span-3 '>
                    {user.languages.map((langu,index)=>(
                    <div key={index} className='p-5 text-xl'>
                      {langu.language}
                      <ProgressBar thickness={4} progress={`${langu.level}`}/>
                    </div>
                    ))}
                </div>
               
            </div>
          
        </section>
    </div>
  )
}
