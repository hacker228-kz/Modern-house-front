
// import React from 'react'
// import Rectangle from '../assets/Rectangle.svg'
// import Patho from '../assets/Patho.svg'

// const Hero = () => {
//   return (
//     <div id='about-us' className='relative pt-[120px]  flex items-center'>
     
//       <div className='w-1/2 h-full '>
//         <img 
//           src="content.png" 
//           alt="Content" 
//           className='w-full h-full object-cover rounded-tr-[40px]'
//         />
//       </div>
//       <div className='w-1/2 pl-20 pr-10 pb-40'>
//         <img 
//           src={Rectangle} 
//           alt="decorative line" 
//           className='w-[169px] h-[4px] mb-6'
//         />
        
//         <h1 className='text-5xl font-bold text-gray-800 mb-8'>
//           You're in good hands
//         </h1>

//         <p className='text-lg text-gray-600 mb-10 max-w-[500px]'>
//         Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne ferae quidem se repellere, idque instituit docere sic: omne animal, simul atque integre iudicante itaque aiunt hanc quasi involuta aperiri, altera occulta quaedam et voluptatem accusantium doloremque.
//         </p>

//         <button className=' flex text-[17px] bg-black py-[25px] px-[40px] rounded-tr-[18px] rounded-tl-none rounded-bl-none rounded-br-none  text-white font-semibold hover:underline'>
//           Learn more 
//           <img src={Patho} alt="Patho" className='ml-2 mb-[-2px]' />
//         </button>
//         </div>
//     </div>
//   );
// };

// export default Hero;


import { Link } from 'react-router-dom';
import React from 'react'
import Rectangle from '../assets/Rectangle.svg'
import Patho from '../assets/Patho.svg'
import content from '../assets/images/content.png'

const Hero = () => {
  return (
    <div id="about-us" className='relative pt-16 sm:pt-[120px] flex flex-col sm:flex-row items-center px-4 sm:px-0'>
      {/* Image Section */}
      <div className='w-full sm:w-1/2 h-full order-2 sm:order-1 mt-8 sm:mt-0'>
        <img 
          src={content} 
          alt="Content" 
          className='w-full h-full object-cover rounded-tr-[20px] sm:rounded-tr-[40px]'
        />
      </div>

      {/* Text Content */}
      <div className='w-full sm:w-1/2 sm:pl-20 sm:pr-10 pb-10 sm:pb-40 order-1 sm:order-2'>
        <img 
          src={Rectangle} 
          alt="decorative line" 
          className='w-[100px] sm:w-[169px] h-[3px] sm:h-[4px] mb-4 sm:mb-6'
        />
        
        <h1 className='text-3xl sm:text-5xl font-bold text-gray-800 mb-6 sm:mb-8'>
          You're in good hands
        </h1>

        <p className='text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 max-w-full sm:max-w-[500px]'>
          Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne ferae quidem se repellere, idque instituit docere sic: omne animal, simul atque integre iudicante itaque aiunt hanc quasi involuta aperiri, altera occulta quaedam et voluptatem accusantium doloremque.
        </p>

        <button className='flex text-sm sm:text-[17px] bg-black py-3 sm:py-[25px] px-6 sm:px-[40px] rounded-tr-[12px] sm:rounded-tr-[18px] rounded-tl-none rounded-bl-none rounded-br-none text-white font-semibold hover:underline'>
          Learn more 
          <img src={Patho} alt="Patho" className='ml-2 w-3 sm:w-auto mb-[-1px] sm:mb-[-2px]' />
        </button>
      </div>
    </div>
  );
};

export default Hero;


// import React from 'react'
// import Rectangle from '../assets/Rectangle.svg'
// import Patho from '../assets/Patho.svg'

// const Hero = () => {
//   return (
//     <div id='about-us' className='relative pt-16 md:pt-[120px] flex flex-col md:flex-row items-center'>
//       {/* Изображение (первое на мобильных) */}
//       <div className='w-full md:w-1/2 h-full order-1 md:order-none'>
//         <img 
//           src="content.png" 
//           alt="Content" 
//           className='w-full h-full object-cover rounded-tr-none md:rounded-tr-[40px]'
//         />
//       </div>

//       {/* Текстовый контент */}
//       <div className='w-full md:w-1/2 px-4 md:pl-20 md:pr-10 pb-16 md:pb-40'>
//         <img 
//           src={Rectangle} 
//           alt="decorative line" 
//           className='w-24 md:w-[169px] h-[2px] md:h-[4px] mb-4 md:mb-6'
//         />
        
//         <h1 className='text-3xl md:text-5xl font-bold text-gray-800 mb-6 md:mb-8'>
//           You're in good hands
//         </h1>

//         <p className='text-base md:text-lg text-gray-600 mb-8 md:mb-10 max-w-full md:max-w-[500px]'>
//           Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne ferae quidem se repellere, idque instituit docere sic: omne animal, simul atque integre iudicante itaque aiunt hanc quasi involuta aperiri, altera occulta quaedam et voluptatem accusantium doloremque.
//         </p>

//         <button className='flex items-center text-sm md:text-[17px] bg-black py-4 px-6 md:py-[25px] md:px-[40px] rounded-tr-[12px] md:rounded-tr-[18px] rounded-tl-none rounded-bl-none rounded-br-none text-white font-semibold hover:underline transition-all'>
//           Learn more 
//           <img src={Patho} alt="Patho" className='ml-2 w-4 h-4 md:w-auto md:h-auto md:mb-[-2px]' />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Hero;