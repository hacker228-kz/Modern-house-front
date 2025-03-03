// import React from 'react'
// import Rectangle from '../assets/Rectangle.svg'
// import Path from '../assets/Path.svg'


// function Goodhandss() {
//   return (
//     <div>
//      <div className=' h-[720px] flex items-center justify-center bg-black py-[150px]'>
//      <div className='w-1/2 pl-20 pr-10 pb-40  '>
//                  <img 
//                    src={Rectangle} 
//                    alt="decorative line" 
//                    className='w-[169px] h-[4px] mb-6'
//                  />
                 
//                  <h1 className='text-5xl font-bold text-white mb-8 '>
//                    You're in good hands
//                  </h1>
//                  <p className='text-lg text-gray-600 mb-10 flex items-center justify-center'>
//                              Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne ferae quidem se repellere, idque instituit docere sic: omne animal, simul atque integre iudicante itaque aiunt hanc quasi involuta aperiri, altera occulta quaedam et voluptatem accusantium doloremque.
//                    </p>
                     
//                  <button className=' flex text-[17px] bg-[#FFAC12] py-[25px] px-[40px] rounded-tr-[18px] rounded-tl-none rounded-bl-none rounded-br-none  text-black font-semibold hover:underline'>
//                     Learn more 
//                    <img src={Path} alt="Path" className='  ml-2 mb-[-2px]' />
//                     </button>
//                  </div>
//      </div>
//     </div>
//   )
// }

// export default Goodhandss;



import React from 'react';
import Rectangle from '../assets/Rectangle.svg';    
import Path from '../assets/Path.svg';         

function Goodhandss() {
  return (
    <div
      className="
        flex 
        items-center 
        justify-center 
        h-screen 
        bg-gradient-to-b 
        from-[#241E13] 
        to-black
      "
    >
      <div className="max-w-2xl px-6 text-center">
        {/* Декоративная полоска */}
        <img
          src={Rectangle}
          alt="decorative line"
          className="mx-auto w-40 h-1 mb-6"
        />

        {/* Заголовок */}
        <h1 className="text-5xl font-bold text-white mb-8">
          You're in good hands
        </h1>

        {/* Параграф */}
        <p className="  text-white text-center font-dm-sans text-xl font-normal leading-7 opacity-60 w-[435px] h-[160px] ml-[20px]">
          Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne ferae quidem se repellere,
          idque instituit docere sic: omne animal, simul atque integre iudicante itaque aiunt hanc quasi
          involuta aperiri, altera occulta quaedam et voluptatem accusantium doloremque.
        </p>

       
        <button
          className="
            flex 
            items-center 
            mx-auto 
            text-[17px] 
            bg-[#FFAC12] 
            py-4 
            px-10 
            rounded-tr-[18px] 
            text-black 
            font-semibold   
            mt-10
          "
        >
          Learn more
          <img src={Path} alt="Path" className="ml-2" />
        </button>
      </div>
    </div>
  );
}

export default Goodhandss;
