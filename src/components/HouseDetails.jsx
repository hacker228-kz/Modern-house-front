
  // import React from 'react';
  // import CustomHeader from './CustomHeader'; 
  // import CustomFooter from './CustomFooter'; 
  // import Slider from './Slider';
  // import ContactCard from './ContactCard';
  // import Bed from '../assets/Bed.svg';
  // import Sun from '../assets/Sun.svg';
  // import Date from '../assets/Date.svg';
  // import Garage from '../assets/Garage.svg';
  // import Bathroom from '../assets/Bathroom.svg';
  // import { houses } from '../assets/houses';
  // import Rectangle from '../assets/Rectangle.svg'
  // import SliderCards from './SliderCards';

  // const HouseDetails = () => {
  //   const sliderSettings = {
  //     dots: true,          // Показать индикаторы (точки)
  //     infinite: true,      // Зациклить прокрутку
  //     speed: 500,          // Скорость анимации (мс)
  //     slidesToShow: 4,     // Сколько карточек видно за раз
  //     slidesToScroll: 1,   // Сколько карточек прокручивается за одно действие
  //     // arrows: false,    // Если хотите отключить стрелки
  //     // autoplay: true,   // Если нужен автоплей
  //     // autoplaySpeed: 2000
  //   };
  //   return (
  //     <div className="bg-[#F5F5F5]  W-full h-full">
  //       <CustomHeader />
  //       <div className="bg-black h-[130px] w-full flex items-center justify-between px-6 text-white   border-t border-gray-600">
  //       <div>
  //         <h1 className="text-2xl font-bold pl-[170px]">Modern House</h1>
  //         <p className='pl-[170px] text-gray-500'>30002 Ceder Av, Brooklyn, NY 11201, USA</p>
  //       </div>
  //       <div className="text-right">
  //         <p className="text-3xl font-bold pr-[200px]">$450,000</p>
  //         <p className='pr-[200px] text-gray-500'>$2500/sq ft</p>
  //       </div>
  //     </div>
  //       {/* Блок со слайдером и контактной карточкой */}
  //       <div className="max-w-6xl mx-auto px-4  flex items-start gap-2">
  //         {/* Слайдер занимает всё оставшееся место */}
  //         <div className="flex-1">
  //           <Slider />
  //         </div>
  //         {/* Фиксированная ширина для карточки */}
  //         <div className="w-[300px] mt-[150px]">
  //           <ContactCard />
  //         </div>
  //       </div>

  //       <div className="max-w-6xl mx-auto px-4 py-8">
  //         {/* Карточка «Details» с бордерами */}
  //         <div className="bg-white rounded-[25px] shadow w-[800px] mb-8">
  //           {/* Заголовок внутри карточки */}
  //           <div className="px-5 py-8 border-b border-gray-200">
  //             <h2 className="text-2xl font-semibold">Details</h2>
  //           </div>

  //           <div className="grid grid-cols-5 text-center">
            
  //             <div className="flex items-center justify-center gap-2 py-4 border-r border-gray-200">
  //               <div className="mb-1 text-gray-700"><img src={Bed} alt="Bed" /></div>
  //               <div className="text-sm font-medium text-gray-900 mb-[]">4</div>
  //             </div>
              
  //             <div className="flex items-center justify-center gap-2 py-4 border-r border-gray-200">
  //               <div className="mb-1 text-gray-700"><img src={Bathroom} alt="Bathroom"/></div>
  //               <div className="text-sm font-medium text-gray-900 mb-[5px]">2</div>
  //             </div>
             
  //             <div className=" flex items-center justify-center gap-2 py-4 border-r border-gray-200">
  //               <div className="mb-1 text-gray-700"><img src={Sun} alt="Sun"/></div>
  //               <div className="text-sm font-medium text-gray-900 mb-[5px]">2</div>
  //             </div>
           
  //             <div className=" flex items-center justify-center gap-2 py-4 border-r border-gray-200">
  //               <div className="mb-1 text-gray-700"><img src={Garage} alt="Garage"/></div>
  //               <div className="text-sm font-medium text-gray-900 mb-[5px]">1</div>
  //             </div>
             
  //             <div className="py-4 flex items-center justify-center gap-2">
  //               <div className="mb-1 text-gray-700"><img src={Date} alt="Date"/></div>
  //               <div className="text-sm font-medium text-gray-900 mb-[5px]">2007</div>
  //             </div>
  //           </div>
  //         </div>

  //         {/* Секция с описанием */}
  //         <section className="mb-12 w-[800px]">
  //           <div className="bg-white rounded-[25px] shadow">
  //             <div className="px-5 py-8">
  //               <h2 className="text-2xl font-semibold mb-2">Description</h2>
  //             </div>
  //             <div className="border-t border-gray-200 p-6">
  //               <p className="text-gray-500 text-red mt-5 py-6">
  //               At vero eos et iusto odio dignissimos ducimus, qui haec putat, ut ipsi auctori huius disciplinae placet: constituam, quid sit numeranda nec me ab illo inventore veritatis et expedita distinctio nam libero tempore, cum memoriter, tum etiam ac ratione.
  //               </p>
  //               <p className="text-gray-500 py-4">
  //               Si sine metu degendae praesidia firmissima filium morte multavit si sine causa? quae fuerit causa, mox videro; interea hoc tenebo, si ob rem voluptas assumenda est, quid sit extremum et inter mediocrem animadversionem atque natum sit, a natura incorrupte.
  //               </p>
  //               <p className="text-gray-500 py-4">
  //               Omne animal, simul atque in sanguinem suum tam inportuno tamque crudeli; sin, ut earum motus et accusamus et argumentandum et dolore suo sanciret militaris imperii disciplinam exercitumque in liberos atque haec ratio late patet in quo pertineant non possim.
  //               </p>
  //             </div>
  //           </div>
  //         </section>

  //         {/* Секция с особенностями */}
  //         <section className="mb-20 w-[800px]">
  //           <div className="bg-white rounded-[25px] shadow">
  //             <div className="px-5 py-8">
  //               <h2 className="text-2xl font-semibold">Features</h2>
  //             </div>
  //             <div className="border-t border-gray-200 p-6">
  //               <div className="grid grid-cols-1 md:grid-cols-3 gap-x-2 gap-y-10">
  //                 {[...Array(15)].map((_, i) => (
  //                   <div key={i} className="flex items-center space-x-2">
  //                     <div className="bg-orange-400 rounded-full p-1">
  //                       <svg
  //                         className="h-4 w-4 text-white"
  //                         fill="none"
  //                         stroke="currentColor"
  //                         strokeWidth="2"
  //                         viewBox="0 0 24 24"
  //                         xmlns="http://www.w3.org/2000/svg"
  //                       >
  //                         <path
  //                           strokeLinecap="round"
  //                           strokeLinejoin="round"
  //                           d="M5 13l4 4L19 7"
  //                         />
  //                       </svg>
  //                     </div>
  //                     <span className='text-gray-500'>Air Conditioning</span>
  //                   </div>
  //                 ))}
  //               </div>
  //             </div>
  //           </div>
  //         </section>

  //         {/* Разделитель */}
  //         <div className='flex item-start'>
  //           <img
  //                     src={Rectangle}
  //                     alt="decorative line"
  //                     className= "w-40 h-1 mb-6  "
  //                   />
  //         </div>

  //         {/* Похожие предложения */}
  //         <section>
  //       <h2 className="text-5xl font-semibold mb-6">Similar listings</h2>
  //       <SliderCards houses={houses} />
  //     </section>
  //       </div>

  //       <CustomFooter />
  //     </div>
  //   );
  // };

  // export default HouseDetails;
  






  import React from 'react';
import CustomHeader from './CustomHeader'; 
import CustomFooter from './CustomFooter'; 
import Slider from './Slider';
import ContactCard from './ContactCard';
import Bed from '../assets/Bed.svg';
import Sun from '../assets/Sun.svg';
import Date from '../assets/Date.svg';
import Garage from '../assets/Garage.svg';
import Bathroom from '../assets/Bathroom.svg';
import { houses } from '../assets/houses';
import Rectangle from '../assets/Rectangle.svg';
import SliderCards from './SliderCards';

const HouseDetails = () => {
  const sliderSettings = {
    dots: true,          // Показать индикаторы (точки)
    infinite: true,      // Зациклить прокрутку
    speed: 500,          // Скорость анимации (мс)
    slidesToShow: 4,     // Сколько карточек видно за раз
    slidesToScroll: 1,   // Сколько карточек прокручивается за одно действие
    // arrows: false,    // Если хотите отключить стрелки
    // autoplay: true,   // Если нужен автоплей
    // autoplaySpeed: 2000
  };

  return (
    <div className="bg-[#F5F5F5] w-full h-full">
      <CustomHeader />
      
      {/* Информация о доме */}
      <div className="bg-black h-[130px] w-full flex items-center justify-between px-6 text-white border-t border-gray-600">
        <div>
          <h1 className="text-2xl font-bold pl-4 sm:pl-[170px]">Modern House</h1>
          <p className="pl-4 sm:pl-[170px] text-gray-500">
            30002 Ceder Av, Brooklyn, NY 11201, USA
          </p>
        </div>
        <div className="text-right">
          <p className="text-3xl font-bold pr-4 sm:pr-[200px]">$450,000</p>
          <p className="pr-4 sm:pr-[200px] text-gray-500">$2500/sq ft</p>
        </div>
      </div>
      
      {/* Блок со слайдером и контактной карточкой */}
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-start gap-2">
        {/* Слайдер занимает всё оставшееся место */}
        <div className="flex-1">
          <Slider />
        </div>
        {/* Фиксированная ширина для карточки на sm экранах */}
        <div className="w-full sm:w-[300px] mt-8 sm:mt-[150px]">
          <ContactCard />
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Карточка «Details» с бордерами */}
        <div className="bg-white rounded-[25px] shadow w-full sm:w-[800px] mb-8">
          {/* Заголовок внутри карточки */}
          <div className="px-5 py-8 border-b border-gray-200">
            <h2 className="text-2xl font-semibold">Details</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 text-center">
            <div className="flex items-center justify-center gap-2 py-4 border-r border-gray-200">
              <div className="mb-1 text-gray-700">
                <img src={Bed} alt="Bed" />
              </div>
              <div className="text-sm font-medium text-gray-900">4</div>
            </div>
            <div className="flex items-center justify-center gap-2 py-4 border-r border-gray-200">
              <div className="mb-1 text-gray-700">
                <img src={Bathroom} alt="Bathroom"/>
              </div>
              <div className="text-sm font-medium text-gray-900">2</div>
            </div>
            <div className="flex items-center justify-center gap-2 py-4 border-r border-gray-200">
              <div className="mb-1 text-gray-700">
                <img src={Sun} alt="Sun"/>
              </div>
              <div className="text-sm font-medium text-gray-900">2</div>
            </div>
            <div className="flex items-center justify-center gap-2 py-4 border-r border-gray-200">
              <div className="mb-1 text-gray-700">
                <img src={Garage} alt="Garage"/>
              </div>
              <div className="text-sm font-medium text-gray-900">1</div>
            </div>
            <div className="py-4 flex items-center justify-center gap-2">
              <div className="mb-1 text-gray-700">
                <img src={Date} alt="Date"/>
              </div>
              <div className="text-sm font-medium text-gray-900">2007</div>
            </div>
          </div>
        </div>
        
        {/* Секция с описанием */}
        <section className="mb-12 w-full sm:w-[800px]">
          <div className="bg-white rounded-[25px] shadow">
            <div className="px-5 py-8">
              <h2 className="text-2xl font-semibold mb-2">Description</h2>
            </div>
            <div className="border-t border-gray-200 p-6">
              <p className="text-gray-500 mt-5 py-6">
                At vero eos et iusto odio dignissimos ducimus, qui haec putat, ut ipsi auctori huius disciplinae placet: constituam, quid sit numeranda nec me ab illo inventore veritatis et expedita distinctio nam libero tempore, cum memoriter, tum etiam ac ratione.
              </p>
              <p className="text-gray-500 py-4">
                Si sine metu degendae praesidia firmissima filium morte multavit si sine causa? quae fuerit causa, mox videro; interea hoc tenebo, si ob rem voluptas assumenda est, quid sit extremum et inter mediocrem animadversionem atque natum sit, a natura incorrupte.
              </p>
              <p className="text-gray-500 py-4">
                Omne animal, simul atque in sanguinem suum tam inportuno tamque crudeli; sin, ut earum motus et accusamus et argumentandum et dolore suo sanciret militaris imperii disciplinam exercitumque in liberos atque haec ratio late patet in quo pertineant non possim.
              </p>
            </div>
          </div>
        </section>
        
        {/* Секция с особенностями */}
        <section className="mb-20 w-full sm:w-[800px]">
          <div className="bg-white rounded-[25px] shadow">
            <div className="px-5 py-8">
              <h2 className="text-2xl font-semibold">Features</h2>
            </div>
            <div className="border-t border-gray-200 p-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-2 gap-y-10">
                {[...Array(15)].map((_, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <div className="bg-orange-400 rounded-full p-1">
                      <svg
                        className="h-4 w-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-500">Air Conditioning</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Разделитель */}
        <div className="flex items-start">
          <img
            src={Rectangle}
            alt="decorative line"
            className="w-40 h-1 mb-6"
          />
        </div>
        
        {/* Похожие предложения */}
        <section className="w-full">
          <h2 className="text-5xl font-semibold mb-6">Similar listings</h2>
          <SliderCards houses={houses} />
        </section>
      </div>
      
      <CustomFooter />
    </div>
  );
};

export default HouseDetails;
