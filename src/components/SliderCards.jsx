

import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

function SliderCards({ houses = [] }) {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={20} // Отступы между карточками
        slidesPerView={3} // Показывает 3 карточки сразу
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination-custom",
        }}
        modules={[Navigation, Pagination]}
        breakpoints={{
          1024: { slidesPerView: 3 }, // 3 карточки на больших экранах
          768: { slidesPerView: 2 }, // 2 карточки на планшетах
          480: { slidesPerView: 1 }, // 1 карточка на мобильных
        }}
        className="mt-10 px-4"
      >
        {houses.map((house) => (
          <SwiperSlide key={house.id} className="flex justify-center">
            <Link to={`/house/${house.id}`} className="block">
              <div className="bg-white rounded-[20px] shadow-lg overflow-hidden flex flex-col border border-gray-200 max-w-[320px]">
                {/* Изображение */}
                <img
                  src={house.image || house.imageUrl}
                  alt={house.title}
                  className="w-full h-64 object-cover"
                />

                {/* Заголовок */}
                <div className="p-4 border-b border-gray-200 py-6">
                  <h2 className="text-lg font-bold text-gray-900 text-left">
                    {house.title}
                  </h2>
                </div>

                {/* Статистика */}
                <div className="grid grid-cols-3 text-center border-t border-gray-200 divide-x divide-gray-200">
                  {house.stats?.map((stat, index) => (
                    <div key={index} className="flex items-center justify-center gap-2 py-3">
                      <img src={stat.icon} alt={stat.label} className="w-6 h-6" />
                      <span className="text-sm font-medium text-gray-900">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Кастомные кнопки (сдвигаем стрелки влево и вправо) */}
      <button className="swiper-button-prev-custom absolute left-[-50px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center shadow-md">
        ❮
      </button>
      <button className="swiper-button-next-custom absolute right-[-50px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center shadow-md">
        ❯
      </button>

      {/* Сдвигаем пагинацию вниз */}
      <div className="swiper-pagination-custom relative mt-6"></div>
    </div>
  );
}

export default SliderCards;
