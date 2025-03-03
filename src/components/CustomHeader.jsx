import React from 'react';
import logo from '../assets/logo.svg';
import Path from '../assets/Path.svg';
import { Link } from 'react-router-dom';

function CustomHeader() {
  return (
    <header className="bg-black shadow-sm py-4 px-6">
      <div className="flex items-center justify-between pt-[47px] pl-[177px] pr-[195px] mb-[20px]">
              <img src={logo} alt="logo" className="h-8" />
              <div className="flex items-center  space-x-[60px] mb-[20px]">
                <nav>
                  <ul className="flex space-x-[60px] list-none p-0 m-0 ml-35">
                  <li>
                     <a className="font-bold text-white text-[15px]" href="/">Home</a>
                   </li>
                   <li> 
                     <a className="font-bold text-white text-[15px]" href="#about-us">About Us</a>
                   </li>
                   <li>
                     <a className="font-bold text-white text-[15px]" href="#modern-house">Modern house </a>
                   </li>
                   <li>
                     <a className="font-bold text-white text-[15px]" href="#contacts">Contacts</a>
                   </li>
               </ul>
                </nav>
               
              </div>
        {/* Кнопка справа */}
         <button className="flex items-center font-bold text-black text-[17px] bg-[#FFAC12] py-[14px] px-[40px] w-[215px] h-[50px] rounded-tr-[18px] rounded-tl-none rounded-bl-none rounded-br-none mb-[20px]" href="/">
                    Work with us
                    <img src={Path} alt="Path" className='ml-2'/>  
                  </button>
      </div>
    </header>
  );
}

export default CustomHeader;