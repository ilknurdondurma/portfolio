import React, { useState } from 'react'
import { userInformationJSON } from '../../data/userInformatinJSON';
import { motion } from 'framer-motion';

export default function Hobbies() {
    const [user] = useState(userInformationJSON[0]); // Access the first user directly

  return (
    <div>
        {/* hobiler */}
        <section className='h-full flex flex-col justify-evenly p-6 bg-secondary text-primary pt-20'>
          <h1 className='text-5xl sm:text-3xl font-bold  mb-10'>Hobiler</h1>

            <div className="w-full flex flex-col items-center">
              <div className="w-full grid grid-cols-1 gap-4">
                {user.hobbies.length > 0 ? (
                  user.hobbies.map((hobby, index) => (
                    <div key={index} className="flex items-center justify-between border-b-2 border-primary">
                      <span className='text-7xl'>🏁</span>
                      <motion.div
                        className="text-6xl"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                      >
                        {hobby.icon}
                        <span className="mt-2 text-lg">{hobby.label}</span>
                      </motion.div>
                      
                    </div>
                  ))
                ) : (
                  <p>No hobbies available.</p>
                )}
              </div>
            </div>
        </section>
    </div>
  )
}
