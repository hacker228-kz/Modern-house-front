// import React from 'react'
// import { Link } from 'react-router-dom';
// import logo from '../assets/logo.svg';
// import facebook from '../assets/facebook.svg';
// import twitter from '../assets/twitter.svg';
// import instagram from '../assets/instagram.svg';
// import Path from '../assets/Path.svg'; 

// function CustomFooter() {
//   return (
//      <footer id='contacts' className="bg-black text-white h-[620px] ">
         
//           <div className="max-w-6xl mx-auto px-4 py-8 ">
    
//             <div className="flex flex-col md:flex-row items-center justify-between mb-8">
//               <div className="flex items-center space-x-2 mt-[90px]">
//                 <h1 className="text-5xl font-bold ">
//                   Make your dreams a
//                 </h1>
//                 <span className="text-5xl font-bold text-orange-500 ">
//                   reality
//                 </span>
//                 <div className='flex-grow border-b border-gray-300 ml-4'>
    
//                 </div>
//               </div>
    
//               <button
//                         className="
//                           flex 
//                           text-[17px] 
//                           bg-[#FFAC12] 
//                           py-4 
//                           px-10 
//                           rounded-tr-[18px] 
//                           text-black 
//                           font-semibold   
//                           mt-25
//                         "
//                       >
//                         Work with us 
//                         <img src={Path} alt="Path" className="ml-2" />
//                       </button>
//             </div>
//             <div className='border-b border-gray-600  pt-[50px]'>
    
//             </div>
    
//             {/* Нижний блок с логотипом/соц.сетями и колонками */}
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-[130px]  ">
              
//               {/* Первая колонка с лого и соц.сетями */}
//               <div className='mt-[-40px]'>
//                 <img src={logo} alt="logo" className="h-8" />
//                 <div className="flex space-x-4 pt-[35px] gap-4">
//                   {/* Иконки соцсетей можно взять из любого набора (FontAwesome, Heroicons и т.п.) */}
//                   <a href="#" className="hover:text-orange-500 transition-colors">
//                    <img src={facebook} alt ="facebook" className=''/>
//                   </a>
//                   <a href="#" className="hover:text-orange-500 transition-colors">
//                   <img src={twitter} alt ="twitter" className=''/>
//                   </a>
//                   <a href="#" className="hover:text-orange-500 transition-colors">
//                   <img src={instagram} alt ="instagram"  className=''/>
//                   </a>
//                 </div>
//               </div>
    
//               {/* Остальные колонки (можете дублировать и менять заголовки/ссылки) */}
//               <div className='ml-25 mt-[-40px] '>
//                 <h2 className="text-lg font-semibold mb-2">Column Heading</h2>
//                 <ul className="space-y-1">
//                   <li><a href="#" className="hover:text-orange-500 transition-colors">Link goes here</a></li>
//                   <li><a href="#" className="hover:text-orange-500 transition-colors">Link goes here</a></li>
//                   <li><a href="#" className="hover:text-orange-500 transition-colors">Link goes here</a></li>
//                   <li><a href="#" className="hover:text-orange-500 transition-colors">Link goes here</a></li>
                  
//                 </ul>
//               </div>
    
//               <div className='ml-25  mt-[-40px]'>
//                 <h2 className="text-lg font-semibold mb-2">Column Heading</h2>
//                 <ul className="space-y-1">
//                   <li><a href="#" className="hover:text-orange-500 transition-colors">Link goes here</a></li>
//                   <li><a href="#" className="hover:text-orange-500 transition-colors">Link goes here</a></li>
//                   <li><a href="#" className="hover:text-orange-500 transition-colors">Link goes here</a></li>
//                   <li><a href="#" className="hover:text-orange-500 transition-colors">Link goes here</a></li>
//                 </ul>
//               </div>
    
//               <div className='ml-25   mt-[-40px]'>
//                 <h2 className="text-lg font-semibold mb-2">Column Heading</h2>
//                 <ul className="space-y-1">
//                   <li><a href="#" className="hover:text-orange-500 transition-colors">Link goes here</a></li>
//                   <li><a href="#" className="hover:text-orange-500 transition-colors">Link goes here</a></li>
//                   <li><a href="#" className="hover:text-orange-500 transition-colors">Link goes here</a></li>
//                   <li><a href="#" className="hover:text-orange-500 transition-colors">Link goes here</a></li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </footer>
//       );
// }

// export default CustomFooter



// import React from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../assets/logo.svg';
// import facebook from '../assets/facebook.svg';
// import twitter from '../assets/twitter.svg';
// import instagram from '../assets/instagram.svg';
// import Path from '../assets/Path.svg';

// function CustomFooter() {
//   return (
//     <footer id="contacts" className="bg-black text-white h-[620px]">
//       <div className="max-w-6xl mx-auto px-4 py-8">
//         {/* Верхний блок: заголовок и кнопка */}
//         <div className="flex flex-col md:flex-row items-center justify-between mb-8">
//           <div className="flex items-center space-x-2 mt-[90px]">
//             <h1 className="text-5xl font-bold">Make your dreams a</h1>
//             <span className="text-5xl font-bold text-orange-500">reality</span>
//             <div className="flex-grow border-b border-gray-300 ml-4"></div>
//           </div>

//           <button
//                               className="
//                                 flex 
//                                 text-[17px] 
//                                 bg-[#FFAC12] 
//                                 py-4 
//                                 px-10 
//                                 rounded-tr-[18px] 
//                                 text-black 
//                                 font-semibold   
//                                 mt-25
//                               "
//                             >
//                               Work with us 
//                               <img src={Path} alt="Path" className="ml-2" />
//                             </button>
//         </div>

//         {/* Разделитель */}
//         <div className="border-b border-gray-600 pt-[50px]"></div>

//         {/* Нижний блок: логотип, соцсети и колонки */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-[130px]">
//           {/* Первая колонка: логотип и соцсети */}
//           <div className="mt-[-40px]">
//             <img src={logo} alt="Logo" className="h-8" />
//             <div className="flex space-x-4 pt-[35px] gap-4">
//               <a href="#" aria-label="Facebook">
//                 <img src={facebook} alt="Facebook" className="w-6 h-6" />
//               </a>
//               <a href="#" aria-label="Twitter">
//                 <img src={twitter} alt="Twitter" className="w-6 h-6" />
//               </a>
//               <a href="#" aria-label="Instagram">
//                 <img src={instagram} alt="Instagram" className="w-6 h-6" />
//               </a>
//             </div>
//           </div>

//           {/* Остальные колонки */}
//           {[1, 2, 3].map((col) => (
//             <div key={col} className="ml-[25px] mt-[-40px]">
//               <h2 className="text-lg font-semibold mb-2">Column Heading</h2>
//               <ul className="space-y-1">
//                 {[1, 2, 3, 4].map((link) => (
//                   <li key={link}>
//                     <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors  ">
//                       Link goes here
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default CustomFooter;

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import facebook from '../assets/facebook.svg';
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';
import Path from '../assets/Path.svg';

function CustomFooter() {
  return (
    <footer id="contacts" className="bg-black text-white h-auto md:h-[620px]">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Верхний блок: заголовок и кнопка */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="flex items-center space-x-2 mt-8 sm:mt-12 md:mt-[90px]">
            <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold">
              Make your dreams a
            </h1>
            <span className="text-4xl sm:text-5xl md:text-5xl font-bold text-orange-500">
              reality
            </span>
            <div className="flex-grow border-b border-gray-300 ml-4"></div>
          </div>

          <button
            className="
               flex 
              text-[17px] 
              bg-[#FFAC12] 
              py-4 
              px-10 
              rounded-tr-[18px] 
              text-black 
              font-semibold
              mt-25
            "
          >
            Work with us 
            <img src={Path} alt="Path" className="ml-2" />
          </button>
        </div>

        {/* Разделитель */}
        <div className="border-b border-gray-600 pt-4 sm:pt-[50px]"></div>

        {/* Нижний блок: логотип, соцсети и колонки */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8 sm:mt-12 md:mt-[130px]">
          {/* Первая колонка: логотип и соцсети */}
          <div className="mt-0 sm:mt-0 md:mt-[-40px]">
            <img src={logo} alt="Logo" className="h-8" />
            <div className="flex space-x-4 pt-4 sm:pt-6 md:pt-[35px] gap-4">
              <a href="#" aria-label="Facebook">
                <img src={facebook} alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="#" aria-label="Twitter">
                <img src={twitter} alt="Twitter" className="w-6 h-6" />
              </a>
              <a href="#" aria-label="Instagram">
                <img src={instagram} alt="Instagram" className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Остальные колонки */}
          {[1, 2, 3].map((col) => (
            <div
              key={col}
              className="ml-0 sm:ml-6 md:ml-[25px] mt-4 sm:mt-0 md:mt-[-40px]"
            >
              <h2 className="text-lg font-semibold mb-2">Column Heading</h2>
              <ul className="space-y-1">
                {[1, 2, 3, 4].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-orange-500 transition-colors"
                    >
                      Link goes here
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default CustomFooter;
