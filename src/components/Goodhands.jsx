
// import React from 'react'
// import Rectangle from '../assets/Rectangle.svg'
// import Patho from '../assets/Patho.svg'


// function Goodhands() {
//   return (
//     <div className='relative pt-[120px] flex items-center flex-row-reverse'>
         
//           <div className='w-1/2 h-full  mt-[100px] '>
//             <img 
//               src="contents.png" 
//               alt="contents" 
//               className='w-full h-full object-cover rounded-tr-[40px]'
//             />
//           </div>
//           <div className='w-1/2 pl-20 pr-10 pb-40  mt-[412px] pl-[185px]'>
//             <img 
//               src={Rectangle} 
//               alt="decorative line" 
//               className='w-[169px] h-[4px] mb-6'
//             />
            
//             <h1 className='text-5xl font-bold text-gray-800 mb-8'>
//               You're in good hands
//             </h1>
    
//             <p className='text-lg text-gray-600 mb-10 max-w-[500px]'>
//             Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne ferae quidem se repellere, idque instituit docere sic: omne animal, simul atque integre iudicante itaque aiunt hanc quasi involuta aperiri, altera occulta quaedam et voluptatem accusantium doloremque.
//             </p>
    
//             <button className=' flex text-[17px] bg-black py-[25px] px-[40px] rounded-tr-[18px] rounded-tl-none rounded-bl-none rounded-br-none  text-white font-semibold hover:underline'>
//               Learn more 
//               <img src={Patho} alt="Patho" className='ml-2 mb-[-2px]' />
//             </button>
//             </div>
         

//         </div>
//       );
//     };
    
// export default Goodhands;




import React from 'react'
import Rectangle from '../assets/Rectangle.svg'
import Patho from '../assets/Patho.svg'
import contents from '../assets/images/contents.png'

function Goodhands() {
  return (
    <div  className='relative pt-8 sm:pt-[120px] flex flex-col sm:flex-row-reverse items-center px-4 sm:px-0'>
      {/* Image Section */}
      <div className='w-full sm:w-1/2 h-full mt-8 sm:mt-[100px]'>
        <img 
          src={contents}
          alt="contents" 
          className='w-full h-auto object-cover rounded-tr-[20px] sm:rounded-tr-[40px]'
        />
      </div>

      {/* Text Content */}
      <div className='w-full sm:w-1/2 sm:pl-20 sm:pr-10 pb-8 sm:pb-40 mt-8 sm:mt-[412px] sm:pl-[185px]'>
        <img 
          src={Rectangle} 
          alt="decorative line" 
          className='w-32 sm:w-[169px] h-[3px] sm:h-[4px] mb-4 sm:mb-6'
        />
        
        <h1 className='text-3xl sm:text-5xl font-bold text-gray-800 mb-4 sm:mb-8'>
          You're in good hands
        </h1>

        <p className='text-base sm:text-lg text-gray-600 mb-6 sm:mb-10 max-w-full sm:max-w-[500px]'>
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

export default Goodhands;