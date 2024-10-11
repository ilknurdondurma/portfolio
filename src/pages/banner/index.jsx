import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa';
import * as Fa6Icons from 'react-icons/fa6';
import * as SiIcons from 'react-icons/si';
import * as IoIcons from 'react-icons/io';
import { userInformationJSON } from '../../data/userInformatinJSON';
import background1 from '../../assets/background.png';
import Animate from '../../components/animation';
import image1 from '../../assets/me-1.jpg';
import { CiIceCream } from 'react-icons/ci';
import { TypeAnimation } from 'react-type-animation';


export default function Banner() {
    const [user] = useState(userInformationJSON[0]); // Access the first user directly
  const getIconComponent = (iconName) => {
    return FaIcons[iconName] || Fa6Icons[iconName] || SiIcons[iconName] || IoIcons[iconName] || null;
  };
  return (
    <div>
        <section className='h-full flex flex-col justify-evenly p-2 bg-primary text-secondary relative pt-20'>
        {/* Arka plan resmi */}
        <div
          style={{
            backgroundImage: `url(${background1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100%',
          }}
          className='absolute inset-0'
        />
        {/* Yarı saydam katman */}
        <div className='absolute inset-0 bg-black opacity-90' />

        <div className='grid grid-cols-10 sm:grid-cols-1 py-5'>
          
          <div className='col-span-9 flex flex-col items-center place-items-center justify-center h-full gap-10 relative z-10 p-10'>
            {/* Resim */}
            <Animate>
              <img
                src={image1}
                alt='me'
                className='w-60 sm:w-40 h-60 sm:h-40 rounded-full object-cover '
              />
            </Animate>

            {/* İsim */}
            <div className='text-3xl sm:text-xl flex gap-2'>{user.name} <CiIceCream /></div>

            {/* Meslek */}
            <Animate>
              <div className='flowing-text text-6xl md:text-5xl sm:text-2xl'>{user.occupation}</div>
            </Animate>

            {/* Hakkında */}
            <Animate>
              <div className='text-xl sm:text-base w-2/3 sm:w-full mx-auto text-center'>{user.about}</div>
            </Animate>

            {/* Kullanılan Teknolojiler */}
            <TypeAnimation
              sequence={[
                ...user.skills.map((skill) => `Kullanılan Teknolojiler : ${skill.name}`),
                500, // Delay between each skill
              ]}
              speed={30}
              style={{ fontSize: '1em' }}
              repeat={Infinity}
            />
          </div>
          {/* sosyal medya */}
          <div className='col-span-1 sm:row-start-1 z-10 flex flex-col sm:flex-row justify-center gap-2 p-5'>
            {user.socialMedia.map((sm, index) => {
              const IconComponent = getIconComponent(sm.icon);
              return (
                <a key={index} href={`${sm.link}`} target='_blank' rel='noopener noreferrer' className='text-xs hover:text-pink-400 flex items-center gap-2'>
                  {IconComponent && <IconComponent size={50} />}
                  {/* Show label on medium and larger screens */}
                  <span className='sm:hidden md:hidden lg:hidden'>{sm.label}</span>
                </a>
              );
            })}
          </div>

        </div>

        {/*teknolojiler */ }
        <div className='flex justify-center sm:grid sm:grid-cols-3 gap-10 p-10 '>
          {user.skills.map((tech, index) => {
            const IconComponent = getIconComponent(tech.icon);
            return (
              <div key={index} className='flex flex-col items-center z-10'>
                {IconComponent && <IconComponent size={50} color={tech.color} />}
                <span className='mt-2 text-xl font-semibold text-white'>{tech.name}</span>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  )
}
