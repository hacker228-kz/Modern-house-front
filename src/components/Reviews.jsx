

import React from 'react'
import Rectangles from '../assets/Rectangles.svg';
import Ovalc from '../assets/images/Ovalc.png';

function Reviews() {
  return (
    <div className='flex items-center justify-center gap-[31px] mt-[500px] mb-[150px] px-[190px]'>
      {/* Left Card */}
      <div className='w-[340px] h-[145px] px-[40px] py-[45px] flex'>
        <img
          src={Ovalc}
          alt="Client"
          className="h-[60px] w-[60px] rounded-full"
        />
        <div className="ml-5">
          <h4 className="text-sm font-semibold">Lara Madrigal</h4>
          <p className="text-xs text-gray-500 mt-2">Client</p>
        </div>
      </div>

      {/* Center Section */}
      <div className="relative">
        {/* Text Block */}
        <div className="w-[340px] absolute -top-[300px]">
          <img 
            src={Rectangles} 
            alt="decorative line" 
            className="w-[400px] h-[20px] mb-8"
          />
          <p className="font-dmsans text-[24px] font-bold">
            “Certe, inquam, pertinax non existimant oportere exquisitis
            rationibus conquistis de quo enim ipsam. Torquem detraxit hosti et
            quidem faciunt, ut aut.”
          </p>
        </div>

        {/* Black Card */}
        <div className='w-[340px] h-[145px] bg-black px-[40px] py-[45px] flex items-center mt-[10px]'>
          <img
            src={Ovalc}
            alt="Client"
            className="h-[60px] w-[60px] rounded-full"
          />
          <div className="ml-5">
            <h4 className="text-sm font-semibold text-white">Lara Madrigal</h4>
            <p className="text-xs text-gray-400">Client</p>
          </div>
        </div>
      </div>

      {/* Right Card */}
      <div className='w-[340px] h-[145px] px-[40px] py-[45px] flex'>
        <img
          src={Ovalc}
          alt="Client"
          className="h-[60px] w-[60px] rounded-full"
        />
        <div className="ml-5">
          <h4 className="text-sm font-semibold">Lara Madrigal</h4>
          <p className="text-xs text-gray-500 mt-2">Client</p>
        </div>
      </div>
    </div>
  )
}

export default Reviews
