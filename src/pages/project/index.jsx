import React, { useState } from 'react'
import { VscVscode } from 'react-icons/vsc'
import { SwiperSlide,Swiper } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { userInformationJSON } from '../../data/userInformatinJSON';
export default function Project() {
    const [user] = useState(userInformationJSON[0]); // Access the first user directly

  return (
    <div>
        {/*projeler*/}
        <section className='h-full flex flex-col justify-evenly p-6 bg-primary text-secondary pt-20'>
          {/* Section Header */}
          <h1 className='text-5xl sm:text-3xl font-bold text-center mb-10'>
            Projelerim
          </h1>


          {/* Projects Container */}
          <div className='w-full grid grid-cols-1 sm:grid-cols-1 gap-10 p-5'>
            {user.projects && user.projects.length > 0 ? (
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={30}
                slidesPerView={1} // Set to 1 for better readability on smaller screens
                navigation
                swipeHandler={true}
                cardsEffect={true}
                cubeEffect={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                className='w-full'
              >
                {user.projects.map((projectItem, index) => (
                  <SwiperSlide key={index} className='flex justify-center'>
                    <div className='w-[80%] mx-auto max-w-lg bg-secondary text-primary rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-2xl shadow-black'>
                      {/* Project Icon */}
                      <div className='opacity-50 flex justify-center mb-4'>
                        <VscVscode size={50} color='blue' />
                      </div>

                      {/* Project Details */}
                      <div className='text-center'>
                        {/* Project Name */}
                        <h2 className='text-2xl sm:text-lg font-bold mb-2'>
                          {projectItem.name}
                        </h2>

                        {/* Technologies Used */}
                        <p className='text-sm sm:text-base text-gray-700 mb-4'>
                          {projectItem.technologies}
                        </p>

                        {/* Project Description */}
                        <p className='text-lg sm:text-base'>
                          {projectItem.description}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div className='text-center text-xl'>No Project Data Available</div>
            )}
          </div>
        </section>
    </div>
  )
}
