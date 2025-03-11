

// import React, { useState } from 'react'
// import { houses } from '../assets/houses' // убедитесь, что путь и экспорт верны

// export default function Slider() {
//   // Используем массив фотографий из первого дома
//   const images = houses[0].photos;
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isFading, setIsFading] = useState(false);

//   const handleClick = (index) => {
//     // Эффект затухания перед сменой фото
//     setIsFading(true);
//     setTimeout(() => {
//       setCurrentIndex(index);
//       // Небольшая задержка для эффекта появления (fade-in)
//       setTimeout(() => {
//         setIsFading(false);
//       }, 50);
//     }, 300); // время совпадает с transition-duration для fade-out
//   };

//   return (



//     <div className="flex flex-col items-center mx-auto max-w-4xl py-8 px-4 ">
//       {/* Большое фото */}
//       <div className="w-full mb-4 h-[700px]">
//         <div className="relative w-full  overflow-hidden mt-30">
//           <img
//             key={currentIndex}
//             src={images[currentIndex]}
//             alt={`Фото ${currentIndex}`}
//             className={`
//                 rounded-tr-[50px]
//               object-cover w-[1400px] h-[550px] rounded-lg
//               transition-opacity duration-300
//               ${isFading ? 'opacity-0' : 'opacity-100'}
//             `}
//           />
//         </div>
//       </div>

//       {/* Превью фотографий */}
//       <div className="flex space-around gap-9">
//         {images.map((img, index) => (
//           <div
//             key={index}
//             className="flex-shrink-0 cursor-pointer "
//             onClick={() => handleClick(index)}
//           >
//             <img
//               src={img}
//               alt={`Превью ${index}`}
//               className={`
//                 rounded-tr-[15px]   
//                 w-20 h-20 object-cover rounded-md box-border
//                 transition-transform duration-300 
//                 hover:scale-105
//                 ${index === currentIndex ? 'border-4 border-blue-500' : ''}
//               `}
//             />
//           </div>
//         ))}
//       </div>

//     </div>

//   );
// }



// import React, { useState } from 'react';
// import { houses } from '../assets/houses'; // убедитесь, что путь и экспорт верны

// export default function Slider() {
//   // Используем массив фотографий из первого дома
//   const images = houses[0].photos;
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isFading, setIsFading] = useState(false);

//   const handleClick = (index) => {
//     // Эффект затухания перед сменой фото
//     setIsFading(true);
//     setTimeout(() => {
//       setCurrentIndex(index);
//       // Задержка для эффекта появления (fade-in)
//       setTimeout(() => {
//         setIsFading(false);
//       }, 50);
//     }, 300); // время соответствует transition-duration для fade-out
//   };

//   return (
//     <div className="flex flex-col items-center mx-auto max-w-4xl py-8 px-4">
//       {/* Большое фото */}
//       <div className="w-full mb-4 h-64 sm:h-[700px]">
//         <div className="relative w-full overflow-hidden mt-4 sm:mt-30">
//           <img
//             key={currentIndex}
//             src={images[currentIndex]}
//             alt={`Фото ${currentIndex}`}
//             className={`
//               rounded-tr-[20px] sm:rounded-tr-[50px]
//               object-cover w-full h-full rounded-lg
//               transition-opacity duration-300
//               ${isFading ? 'opacity-0' : 'opacity-100'}
//             `}
//           />
//         </div>
//       </div>

//       {/* Превью фотографий */}
//       <div className="flex space-x-4 sm:space-x-9">
//         {images.map((img, index) => (
//           <div
//             key={index}
//             className="flex-shrink-0 cursor-pointer"
//             onClick={() => handleClick(index)}
//           >
//             <img
//               src={img}
//               alt={`Превью ${index}`}
//               className={`
//                 rounded-tr-[10px] sm:rounded-tr-[15px]
//                 w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md box-border
//                 transition-transform duration-300 hover:scale-105
//                 ${index === currentIndex ? 'border-2 sm:border-4 border-blue-500' : ''}
//               `}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

 
import React, { useState } from 'react';
import { houses } from '../assets/houses'; // убедитесь, что путь и экспорт верны

export default function Slider() {
  const images = houses[0].photos;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const handleClick = (index) => {
    // Эффект затухания перед сменой фото
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(index);
      // Задержка для эффекта появления (fade-in)
      setTimeout(() => {
        setIsFading(false);
      }, 50);
    }, 300); // время соответствует transition-duration для fade-out
  };


  return (
    <div className="flex flex-col items-center mx-auto max-w-4xl py-8 px-2 sm:px-4">
      {/* Большое фото */}
      <div className="w-full mb-4 h-[300px] sm:h-[700px]">
        <div className="relative w-full overflow-hidden mt-4 sm:mt-30">
          <img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Фото ${currentIndex}`}
            className={`
              rounded-tr-[20px] sm:rounded-tr-[50px]
              object-cover w-full h-[250px] sm:h-[550px] rounded-lg
              transition-opacity duration-300
              ${isFading ? 'opacity-0' : 'opacity-100'}
            `}
          />
        </div>
      </div>

      {/* Превью фотографий */}
      <div className="flex overflow-x-auto pb-2 gap-4 sm:gap-9 w-full px-2">
        {images.map((img, index) => (
          <div
            key={index}
            className="flex-shrink-0 cursor-pointer"
            onClick={() => handleClick(index)}
          >
            <img
              src={img}
              alt={`Превью ${index}`}
              className={`
                rounded-tr-[10px] sm:rounded-tr-[15px]
                w-12 h-12 sm:w-20 sm:h-20 object-cover rounded-md box-border
                transition-transform duration-300 
                hover:scale-105
                ${index === currentIndex ? 'border-4 border-blue-500' : ''}
              `}
            />
          </div>
        ))}
      </div>
    </div>
  );
}


// import React, { useState } from 'react';
// import { houses } from '../assets/houses'; // Убедитесь, что путь корректный

// export default function Slider() {
//   // Используем массив фотографий из первого дома
//   const images = houses[0].photos;
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isFading, setIsFading] = useState(false);

//   const handlePrev = () => {
//     setIsFading(true);
//     setTimeout(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === 0 ? images.length - 1 : prevIndex - 1
//       );
//       setTimeout(() => {
//         setIsFading(false);
//       }, 50);
//     }, 300);
//   };

//   const handleNext = () => {
//     setIsFading(true);
//     setTimeout(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//       setTimeout(() => {
//         setIsFading(false);
//       }, 50);
//     }, 300);
//   };

//   return (
//     <div className="flex flex-col items-center mx-auto max-w-4xl py-8 px-4">
//       {/* Большое изображение с кнопками навигации */}
//       <div className="w-full mb-4 relative">
//         <div className="relative w-full h-64 sm:h-96 overflow-hidden">
//           <img
//             key={currentIndex}
//             src={images[currentIndex]}
//             alt={`Фото ${currentIndex}`}
//             className={`
//               object-cover w-full h-full rounded-lg
//               transition-opacity duration-300
//               ${isFading ? 'opacity-0' : 'opacity-100'}
//             `}
//           />
//         </div>
//         {/* Кнопка Prev */}
//         <button
//           onClick={handlePrev}
//           className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-3 py-2 rounded hover:bg-opacity-75"
//         >
//           Prev
//         </button>
//         {/* Кнопка Next */}
//         <button
//           onClick={handleNext}
//           className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-3 py-2 rounded hover:bg-opacity-75"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }
