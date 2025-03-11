

// import React from 'react'
// import Rectangles from '../assets/Rectangles.svg';
// import Ovalc from '../assets/images/Ovalc.png';

// function Reviews() {
//   return (
//     <div className='flex items-center justify-center gap-[31px] mt-[500px] mb-[150px] px-[190px]'>
//       {/* Left Card */}
//       <div className='w-[340px] h-[145px] px-[40px] py-[45px] flex'>
//         <img
//           src={Ovalc}
//           alt="Client"
//           className="h-[60px] w-[60px] rounded-full"
//         />
//         <div className="ml-5">
//           <h4 className="text-sm font-semibold">Lara Madrigal</h4>
//           <p className="text-xs text-gray-500 mt-2">Client</p>
//         </div>
//       </div>

//       {/* Center Section */}
//       <div className="relative">
//         {/* Text Block */}
//         <div className="w-[340px] absolute -top-[300px]">
//           <img 
//             src={Rectangles} 
//             alt="decorative line" 
//             className="w-[400px] h-[20px] mb-8"
//           />
//           <p className="font-dmsans text-[24px] font-bold">
//             “Certe, inquam, pertinax non existimant oportere exquisitis
//             rationibus conquistis de quo enim ipsam. Torquem detraxit hosti et
//             quidem faciunt, ut aut.”
//           </p>
//         </div>

//         {/* Black Card */}
//         <div className='w-[340px] h-[145px] bg-black px-[40px] py-[45px] flex items-center mt-[10px]'>
//           <img
//             src={Ovalc}
//             alt="Client"
//             className="h-[60px] w-[60px] rounded-full"
//           />
//           <div className="ml-5">
//             <h4 className="text-sm font-semibold text-white">Lara Madrigal</h4>
//             <p className="text-xs text-gray-400">Client</p>
//           </div>
//         </div>
//       </div>

//       {/* Right Card */}
//       <div className='w-[340px] h-[145px] px-[40px] py-[45px] flex'>
//         <img
//           src={Ovalc}
//           alt="Client"
//           className="h-[60px] w-[60px] rounded-full"
//         />
//         <div className="ml-5">
//           <h4 className="text-sm font-semibold">Lara Madrigal</h4>
//           <p className="text-xs text-gray-500 mt-2">Client</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Reviews



// import React from 'react'
// import Rectangles from '../assets/Rectangles.svg';
// import Ovalc from '../assets/images/Ovalc.png';

// function Reviews() {
//   return (
//     <div className='flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-[31px] mt-20 sm:mt-[500px] mb-12 sm:mb-[150px] px-4 sm:px-[190px]'>
//       {/* Left Card */}
//       <div className='w-full sm:w-[340px] h-auto sm:h-[145px] px-6 sm:px-[40px] py-6 sm:py-[45px] flex items-center bg-white shadow-lg sm:shadow-none rounded-lg sm:rounded-none'>
//         <img
//           src={Ovalc}
//           alt="Client"
//           className="h-12 sm:h-[60px] w-12 sm:w-[60px] rounded-full"
//         />
//         <div className="ml-4 sm:ml-5">
//           <h4 className="text-sm font-semibold">Lara Madrigal</h4>
//           <p className="text-xs text-gray-500 mt-1 sm:mt-2">Client</p>
//         </div>
//       </div>

//       {/* Center Section */}
//       <div className="relative w-full sm:w-auto">
//         {/* Text Block */}
//         <div className="w-full sm:w-[340px] absolute sm:-top-[300px] -top-[180px] left-1/2 transform -translate-x-1/2 sm:translate-x-0 sm:left-0 px-4 sm:px-0">
//           <img 
//             src={Rectangles} 
//             alt="decorative line" 
//             className="w-full sm:w-[400px] h-[12px] sm:h-[20px] mb-4 sm:mb-8 mx-auto"
//           />
//           <p className="font-dmsans text-lg sm:text-[24px] font-bold text-center sm:text-left">
//             “Certe, inquam, pertinax non existimant oportere exquisitis
//             rationibus conquistis de quo enim ipsam. Torquem detraxit hosti et
//             quidem faciunt, ut aut.”
//           </p>
//         </div>

//         {/* Black Card */}
//         <div className='w-full sm:w-[340px] h-auto sm:h-[145px] bg-black px-6 sm:px-[40px] py-6 sm:py-[45px] flex items-center mt-6 sm:mt-[10px] rounded-lg sm:rounded-none'>
//           <img
//             src={Ovalc}
//             alt="Client"
//             className="h-12 sm:h-[60px] w-12 sm:w-[60px] rounded-full"
//           />
//           <div className="ml-4 sm:ml-5">
//             <h4 className="text-sm font-semibold text-white">Lara Madrigal</h4>
//             <p className="text-xs text-gray-400">Client</p>
//           </div>
//         </div>
//       </div>

//       {/* Right Card */}
//       <div className='w-full sm:w-[340px] h-auto sm:h-[145px] px-6 sm:px-[40px] py-6 sm:py-[45px] flex items-center bg-white shadow-lg sm:shadow-none rounded-lg sm:rounded-none'>
//         <img
//           src={Ovalc}
//           alt="Client"
//           className="h-12 sm:h-[60px] w-12 sm:w-[60px] rounded-full"
//         />
//         <div className="ml-4 sm:ml-5">
//           <h4 className="text-sm font-semibold">Lara Madrigal</h4>
//           <p className="text-xs text-gray-500 mt-1 sm:mt-2">Client</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Reviews


import React from 'react'
import Rectangles from '../assets/Rectangles.svg';
import Ovalc from '../assets/images/Ovalc.png';

function Reviews() {
  return (
    <div className='flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-[31px] mt-20 sm:mt-[500px] mb-12 sm:mb-[150px] px-4 sm:px-[190px]'>
      {/* Left Card */}
      <div className='w-full sm:w-[340px] h-auto sm:h-[145px] px-6 sm:px-[40px] py-6 sm:py-[45px] flex items-center bg-white shadow-lg sm:shadow-none rounded-lg sm:rounded-none'>
        <img
          src={Ovalc}
          alt="Client"
          className="h-12 sm:h-[60px] w-12 sm:w-[60px] rounded-full"
        />
        <div className="ml-4 sm:ml-5">
          <h4 className="text-sm font-semibold">Lara Madrigal</h4>
          <p className="text-xs text-gray-500 mt-1 sm:mt-2">Client</p>
        </div>
      </div>

      {/* Center Section */}
      <div className="relative w-full sm:w-auto">
        {/* Black Card */}
        <div className='w-full sm:w-[340px] h-auto sm:h-[145px] bg-black px-6 sm:px-[40px] py-6 sm:py-[45px] flex items-center rounded-lg sm:rounded-none'>
          <img
            src={Ovalc}
            alt="Client"
            className="h-12 sm:h-[60px] w-12 sm:w-[60px] rounded-full"
          />
          <div className="ml-4 sm:ml-5">
            <h4 className="text-sm font-semibold text-white">Lara Madrigal</h4>
            <p className="text-xs text-gray-400">Client</p>
          </div>
        </div>

        {/* Text Block (ниже центральной карточки на мобильных) */}
        <div className="w-full sm:w-[340px] mt-6 sm:absolute sm:-top-[300px] sm:left-0 px-4 sm:px-0">
          <img 
            src={Rectangles} 
            alt="decorative line" 
            className="w-full sm:w-[400px] h-[12px] sm:h-[20px] mb-4 sm:mb-8 mx-auto"
          />
          <p className="font-dmsans text-lg sm:text-[24px] font-bold text-center sm:text-left">
            “Certe, inquam, pertinax non existimant oportere exquisitis
            rationibus conquistis de quo enim ipsam. Torquem detraxit hosti et
            quidem faciunt, ut aut.”
          </p>
        </div>
      </div>

      {/* Right Card */}
      <div className='w-full sm:w-[340px] h-auto sm:h-[145px] px-6 sm:px-[40px] py-6 sm:py-[45px] flex items-center bg-white shadow-lg sm:shadow-none rounded-lg sm:rounded-none'>
        <img
          src={Ovalc}
          alt="Client"
          className="h-12 sm:h-[60px] w-12 sm:w-[60px] rounded-full"
        />
        <div className="ml-4 sm:ml-5">
          <h4 className="text-sm font-semibold">Lara Madrigal</h4>
          <p className="text-xs text-gray-500 mt-1 sm:mt-2">Client</p>
        </div>
      </div>
    </div>
  )
}

export default Reviews