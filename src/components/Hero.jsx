
import React from 'react'
import Rectangle from '../assets/Rectangle.svg'
import Patho from '../assets/Patho.svg'

const Hero = () => {
  return (
    <div id='about-us' className='relative pt-[120px]  flex items-center'>
     
      <div className='w-1/2 h-full '>
        <img 
          src="/content.png" 
          alt="Content" 
          className='w-full h-full object-cover rounded-tr-[40px]'
        />
      </div>
      <div className='w-1/2 pl-20 pr-10 pb-40'>
        <img 
          src={Rectangle} 
          alt="decorative line" 
          className='w-[169px] h-[4px] mb-6'
        />
        
        <h1 className='text-5xl font-bold text-gray-800 mb-8'>
          You're in good hands
        </h1>

        <p className='text-lg text-gray-600 mb-10 max-w-[500px]'>
        Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne ferae quidem se repellere, idque instituit docere sic: omne animal, simul atque integre iudicante itaque aiunt hanc quasi involuta aperiri, altera occulta quaedam et voluptatem accusantium doloremque.
        </p>

        <button className=' flex text-[17px] bg-black py-[25px] px-[40px] rounded-tr-[18px] rounded-tl-none rounded-bl-none rounded-br-none  text-white font-semibold hover:underline'>
          Learn more 
          <img src={Patho} alt="Patho" className='ml-2 mb-[-2px]' />
        </button>
        </div>
    </div>
  );
};

export default Hero;

