// import React from 'react';
// import logo from '../assets/logo.svg';
// import Path from '../assets/Path.svg';
// import { Link } from 'react-router-dom';

// function CustomHeader() {
//   return (
//     <header className="bg-black shadow-sm py-4 px-6">
//       <div className="flex items-center justify-between pt-[47px] pl-[177px] pr-[195px] mb-[20px]">
//               <img src={logo} alt="logo" className="h-8" />
//               <div className="flex items-center  space-x-[60px] mb-[20px]">
//                 <nav>
//                   <ul className="flex space-x-[60px] list-none p-0 m-0 ml-35">
//                   <li>
//                      <a className="font-bold text-white text-[15px]" href="/">Home</a>
//                    </li>
//                    <li> 
//                      <a className="font-bold text-white text-[15px]" href="#about-us">About Us</a>
//                    </li>
//                    <li>
//                      <a className="font-bold text-white text-[15px]" href="#modern-house">Modern house </a>
//                    </li>
//                    <li>
//                      <a className="font-bold text-white text-[15px]" href="#contacts">Contacts</a>
//                    </li>
//                </ul>
//                 </nav>
               
//               </div>
//         {/* Кнопка справа */}
//          <button className="flex items-center font-bold text-black text-[17px] bg-[#FFAC12] py-[14px] px-[40px] w-[215px] h-[50px] rounded-tr-[18px] rounded-tl-none rounded-bl-none rounded-br-none mb-[20px]" href="/">
//                     Work with us
//                     <img src={Path} alt="Path" className='ml-2'/>  
//                   </button>
//       </div>
//     </header>
//   );
// }

// export default CustomHeader;



// import React from 'react';
// import logo from '../assets/logo.svg';
// import Path from '../assets/Path.svg';
// import { Link } from 'react-router-dom';

// function CustomHeader() {
//   return (
//     <header className="bg-black shadow-sm py-4 px-4 sm:px-6">
//       <div className="flex flex-col md:flex-row items-center justify-between 
//                       pt-4 pl-4 pr-4 mb-4 md:pt-[47px] md:pl-[177px] md:pr-[195px] md:mb-[20px]">
//         {/* Логотип */}
//         <img src={logo} alt="logo" className="h-8" />

//         {/* Меню навигации */}
//         <nav className="mt-4 md:mt-0">
//           <ul className="flex flex-col md:flex-row items-center 
//                          space-y-2 md:space-y-0 md:space-x-6 lg:space-x-[60px] 
//                          list-none p-0 m-0 md:ml-[35px]">
//             <li>
//               <a className="font-bold text-white text-[15px]" href="/">Home</a>
//             </li>
//             <li>
//               <a className="font-bold text-white text-[15px]" href="#about-us">About Us</a>
//             </li>
//             <li>
//               <a className="font-bold text-white text-[15px]" href="#modern-house">Modern house</a>
//             </li>
//             <li>
//               <a className="font-bold text-white text-[15px]" href="#contacts">Contacts</a>
//             </li>
//           </ul>
//         </nav>

//         {/* Кнопка */}
//         <button
//           className="flex items-center font-bold text-black text-[17px] bg-[#FFAC12]
//                      py-3 px-4 sm:py-[14px] sm:px-[40px] 
//                      w-auto sm:w-[215px] h-auto sm:h-[50px] 
//                      rounded-tr-[18px] mb-4 md:mb-[20px]"
//         >
//           Work with us
//           <img src={Path} alt="Path" className="ml-2" />
//         </button>
//       </div>
//     </header>
//   );
// }

// export default CustomHeader;

import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import Path from '../assets/Path.svg';
import { Link } from 'react-router-dom';

function CustomHeader() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="bg-black shadow-sm py-4 px-4 sm:px-6 relative">
      <div className="flex flex-col md:flex-row items-center justify-between 
                      pt-4 pl-4 pr-4 mb-4 md:pt-[47px] md:pl-[177px] md:pr-[195px] md:mb-[20px]">
        
        {/* Логотип и бургер-кнопка */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <img src={logo} alt="logo" className="h-8" />
          {/* Бургер-кнопка для мобилок */}
          <button
            onClick={toggleSidebar}
            className="md:hidden text-white focus:outline-none"
            aria-label="Open menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Десктопное меню (оригинальная навигация) */}
        <nav className="hidden md:block mt-4 md:mt-0">
          <ul className="flex flex-col md:flex-row items-center 
                         space-y-2 md:space-y-0 md:space-x-6 lg:space-x-[60px] 
                         list-none p-0 m-0 md:ml-[35px]">
            <li>
              <Link to="/" className="font-bold text-white text-[15px] hover:text-[#FFAC12]">Home</Link>
            </li>
            <li>
              <Link to="#about-us" className="font-bold text-white text-[15px] hover:text-[#FFAC12]">About Us</Link>
            </li>
            <li>
              <Link to="#modern-house" className="font-bold text-white text-[15px] hover:text-[#FFAC12]">Modern house</Link>
            </li>
            <li>
              <Link to="#contacts" className="font-bold text-white text-[15px] hover:text-[#FFAC12]">Contacts</Link>
            </li>
          </ul>
        </nav>

        {/* Кнопка (оригинальный стиль) */}
        <button
          className="hidden md:flex items-center font-bold text-black text-[17px] bg-[#FFAC12]
                     py-3 px-4 sm:py-[14px] sm:px-[40px] 
                     w-auto sm:w-[215px] h-auto sm:h-[50px] 
                     rounded-tr-[18px] hover:bg-[#FFBA36] transition-colors"
        >
          Work with us
          <img src={Path} alt="Arrow" className="ml-2" />
        </button>
      </div>

      {/* Мобильный сайдбар с навигацией */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-black transform transition-transform duration-300
                       ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden z-50`}>
        
        {/* Заголовок и кнопка закрытия */}
        <div className="flex justify-between items-center p-6 border-b border-gray-800">
          <img src={logo} alt="logo" className="h-8" />
          <button
            onClick={toggleSidebar}
            className="text-white focus:outline-none"
            aria-label="Close menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Мобильная навигация (адаптированная версия оригинальной) */}
        <nav className="p-6">
          <ul className="space-y-6">
            <li>
              <Link
                to="/"
                onClick={toggleSidebar}
                className="font-bold text-white text-[15px] block hover:text-[#FFAC12]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="#about-us"
                onClick={toggleSidebar}
                className="font-bold text-white text-[15px] block hover:text-[#FFAC12]"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="#modern-house"
                onClick={toggleSidebar}
                className="font-bold text-white text-[15px] block hover:text-[#FFAC12]"
              >
                Modern house
              </Link>
            </li>
            <li>
              <Link
                to="#contacts"
                onClick={toggleSidebar}
                className="font-bold text-white text-[15px] block hover:text-[#FFAC12]"
              >
                Contacts
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Оверлей для фона */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}
    </header>
  );
}

export default CustomHeader;


// import React from 'react';
// import logo from '../assets/logo.svg';
// import Path from '../assets/Path.svg';
// import { Link } from 'react-router-dom'; // Убедитесь, что этот импорт есть

// function CustomHeader() {
//   return (
//     <header className="bg-black shadow-sm py-4 px-4 sm:px-6">
//       <div className="flex flex-col md:flex-row items-center justify-between 
//                       pt-4 pl-4 pr-4 mb-4 md:pt-[47px] md:pl-[177px] md:pr-[195px] md:mb-[20px]">
//         {/* Логотип */}
//         <Link to="/"> {/* Оберните логотип в Link если нужно */}
//           <img src={logo} alt="logo" className="h-8" />
//         </Link>

//         {/* Меню навигации */}
//         <nav className="mt-4 md:mt-0">
//           <ul className="flex flex-col md:flex-row items-center 
//                          space-y-2 md:space-y-0 md:space-x-6 lg:space-x-[60px] 
//                          list-none p-0 m-0 md:ml-[35px]">
//             <li>
//               <Link className="font-bold text-white text-[15px]" to="/">Home</Link>
//             </li>
//             <li>
//               <Link className="font-bold text-white text-[15px]" to="/about-us">About Us</Link>
//             </li>
//             <li>
//               <Link className="font-bold text-white text-[15px]" to="/modern-house">Modern house</Link>
//             </li>
//             <li>
//               <Link className="font-bold text-white text-[15px]" to="/contacts">Contacts</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* Кнопка-ссылка */}
//         <Link
//           to="/work-with-us"
//           className="flex items-center font-bold text-black text-[17px] bg-[#FFAC12]
//                      py-3 px-4 sm:py-[14px] sm:px-[40px] 
//                      w-auto sm:w-[215px] h-auto sm:h-[50px] 
//                      rounded-tr-[18px] mb-4 md:mb-[20px]"
//         >
//           Work with us
//           <img src={Path} alt="Path" className="ml-2" />
//         </Link>
//       </div>
//     </header>
//   );
// }

// export default CustomHeader;