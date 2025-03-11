

// import React from "react";
// import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Navigation, Pagination } from "swiper/modules";

// function SliderCards({ houses = [] }) {
//   return (
//     <div className="relative">
//       <Swiper
//         spaceBetween={20} // Отступы между карточками
//         slidesPerView={3} // Показывает 3 карточки сразу
//         navigation={{
//           nextEl: ".swiper-button-next-custom",
//           prevEl: ".swiper-button-prev-custom",
//         }}
//         pagination={{
//           clickable: true,
//           el: ".swiper-pagination-custom",
//         }}
//         modules={[Navigation, Pagination]}
//         breakpoints={{
//           1024: { slidesPerView: 3 }, // 3 карточки на больших экранах
//           768: { slidesPerView: 2 }, // 2 карточки на планшетах
//           480: { slidesPerView: 1 }, // 1 карточка на мобильных
//         }}
//         className="mt-10 px-4"
//       >
//         {houses.map((house) => (
//           <SwiperSlide key={house.id} className="flex justify-center">
//             <Link to={`/house/${house.id}`} className="block">
//               <div className="bg-white rounded-[20px] shadow-lg overflow-hidden flex flex-col border border-gray-200 max-w-[320px]">
//                 {/* Изображение */}
//                 <img
//                   src={house.image || house.imageUrl}
//                   alt={house.title}
//                   className="w-full h-64 object-cover"
//                 />

//                 {/* Заголовок */}
//                 <div className="p-4 border-b border-gray-200 py-6">
//                   <h2 className="text-lg font-bold text-gray-900 text-left">
//                     {house.title}
//                   </h2>
//                 </div>

//                 {/* Статистика */}
//                 <div className="grid grid-cols-3 text-center border-t border-gray-200 divide-x divide-gray-200">
//                   {house.stats?.map((stat, index) => (
//                     <div key={index} className="flex items-center justify-center gap-2 py-3">
//                       <img src={stat.icon} alt={stat.label} className="w-6 h-6" />
//                       <span className="text-sm font-medium text-gray-900">{stat.label}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </Link>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Кастомные кнопки (сдвигаем стрелки влево и вправо) */}
//       <button className="swiper-button-prev-custom absolute left-[-50px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center shadow-md">
//         ❮
//       </button>
//       <button className="swiper-button-next-custom absolute right-[-50px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center shadow-md">
//         ❯
//       </button>

//       {/* Сдвигаем пагинацию вниз */}
//       <div className="swiper-pagination-custom relative mt-6"></div>
//     </div>
//   );
// }

// export default SliderCards;




// import React from "react";
// import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Navigation, Pagination } from "swiper/modules";

// function SliderCards({ houses = [] }) {
//   return (
//     <div className="relative">
//       <Swiper
//         spaceBetween={20} // Отступы между карточками
//         slidesPerView={3} // Показывает 3 карточки сразу
//         navigation={{
//           nextEl: ".swiper-button-next-custom",
//           prevEl: ".swiper-button-prev-custom",
//         }}
//         pagination={{
//           clickable: true,
//           el: ".swiper-pagination-custom",
//         }}
//         modules={[Navigation, Pagination]}
//         breakpoints={{
//           1024: { slidesPerView: 3 }, // 3 карточки на больших экранах
//           768: { slidesPerView: 2 }, // 2 карточки на планшетах
//           480: { slidesPerView: 1 }, // 1 карточка на мобильных
//         }}
//         className="mt-10 px-2 sm:px-4"
//       >
//         {houses.map((house) => (
//           <SwiperSlide key={house.id} className="flex justify-center">
//             <Link to={`/house/${house.id}`} className="block">
//               <div className="bg-white rounded-[20px] shadow-lg overflow-hidden flex flex-col border border-gray-200 max-w-[320px]">
//                 {/* Изображение */}
//                 <img
//                   src={house.image || house.imageUrl}
//                   alt={house.title}
//                   className="w-full h-64 object-cover"
//                 />

//                 {/* Заголовок */}
//                 <div className="p-4 border-b border-gray-200 py-6">
//                   <h2 className="text-lg font-bold text-gray-900 text-left">
//                     {house.title}
//                   </h2>
//                 </div>

//                 {/* Статистика */}
//                 <div className="grid grid-cols-3 text-center border-t border-gray-200 divide-x divide-gray-200">
//                   {house.stats?.map((stat, index) => (
//                     <div key={index} className="flex items-center justify-center gap-2 py-3">
//                       <img src={stat.icon} alt={stat.label} className="w-6 h-6" />
//                       <span className="text-sm font-medium text-gray-900">{stat.label}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </Link>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Кастомные кнопки (сдвигаем стрелки влево и вправо) */}
//       <button className="swiper-button-prev-custom absolute left-[-20px] sm:left-[-50px] top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full flex items-center justify-center shadow-md">
//         ❮
//       </button>
//       <button className="swiper-button-next-custom absolute right-[-20px] sm:right-[-50px] top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full flex items-center justify-center shadow-md">
//         ❯
//       </button>

//       {/* Сдвигаем пагинацию вниз */}
//       <div className="swiper-pagination-custom relative mt-4 sm:mt-6"></div>
//     </div>
//   );
// }

// export default SliderCards;




import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

function SliderCards({ houses = [] }) {
  return (
    <div className="relative px-2 sm:px-0">
      <Swiper
        spaceBetween={16}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
          disabledClass: "opacity-30 cursor-auto"
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination-custom",
          bulletClass: "swiper-pagination-bullet bg-gray-400",
          bulletActiveClass: "swiper-pagination-bullet-active bg-gray-800"
        }}
        modules={[Navigation, Pagination]}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 24 }
        }}
        className="mt-6 sm:mt-10"
      >
        {houses.map((house) => (
          <SwiperSlide key={house.id} className="pb-8">
            <Link to={`/house/${house.id}`} className="block">
              <div className="bg-white rounded-xl sm:rounded-[20px] shadow-md sm:shadow-lg overflow-hidden flex flex-col border border-gray-100 sm:border-gray-200 mx-2 sm:mx-0">
                {/* Изображение */}
                <img
                  src={house.image || house.imageUrl}
                  alt={house.title}
                  className="w-full h-48 sm:h-64 object-cover"
                />

                {/* Заголовок */}
                <div className="p-3 sm:p-4 border-b border-gray-100 sm:border-gray-200 py-4 sm:py-6">
                  <h2 className="text-base sm:text-lg font-semibold sm:font-bold text-gray-800 sm:text-gray-900 text-left">
                    {house.title}
                  </h2>
                </div>

                {/* Статистика */}
                <div className="grid grid-cols-3 text-center border-t border-gray-100 sm:border-gray-200 divide-x divide-gray-100 sm:divide-gray-200">
                  {house.stats?.map((stat, index) => (
                    <div key={index} className="flex items-center justify-center gap-1 sm:gap-2 py-2 sm:py-3">
                      <img 
                        src={stat.icon} 
                        alt={stat.label} 
                        className="w-4 h-4 sm:w-6 sm:h-6"
                      />
                      <span className="text-xs sm:text-sm font-medium text-gray-700 sm:text-gray-900">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Кастомные кнопки */}
      <button className="swiper-button-prev-custom hidden sm:flex absolute left-[-40px] sm:left-[-50px] top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-white sm:bg-gray-200 rounded-full items-center justify-center shadow-md sm:shadow-lg hover:bg-gray-100 transition-colors">
        <span className="text-gray-600 text-lg">❮</span>
      </button>
      <button className="swiper-button-next-custom hidden sm:flex absolute right-[-40px] sm:right-[-50px] top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-white sm:bg-gray-200 rounded-full items-center justify-center shadow-md sm:shadow-lg hover:bg-gray-100 transition-colors">
        <span className="text-gray-600 text-lg">❯</span>
      </button>

      {/* Пагинация */}
      <div className="swiper-pagination-custom relative mt-4 sm:mt-6 !bottom-0" />
    </div>
  );
}

export default SliderCards;