import React from 'react';
import logo from '../assets/logo.svg';
import Path from '../assets/Path.svg';
import Patho from '../assets/Patho.svg';

const Header = () => {
  return (
    <div className="h-screen bg-[url('/lending-p.png')]   bg-cover bg-center flex flex-col justify-between">
      <div className="flex items-center justify-between pt-[47px] pl-[177px] pr-[195px]">
        <img src={logo} alt="logo" className="h-8" />
        <div className="flex items-center space-x-[60px]">
          <nav> 
            <ul className="flex space-x-[60px] list-none p-0 m-0">
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
          <a className="flex items-center font-bold text-black text-[17px] bg-[#FFAC12] py-[14px] px-[40px] w-[215px] h-[50px] rounded-tr-[18px] rounded-tl-none rounded-bl-none rounded-br-none" href="/">
            Work with us
            <img src={Path} alt="Path" className='ml-2'/>  
          </a>
        </div>
      </div>

      <div className="flex flex-col pl-[177px] pb-[80px] ml-[-10px]">
        <h1 className="text-white font-dm-sans text-[80px] font-bold leading-[75px]  w-[519px] h-[240px]">
          Beautiful homes made for you
        </h1>
        <p className="text-white font-dm-sans text-[20px] font-normal leading-[28px]  opacity-60 w-[428px] h-[112px] mt-[10px]">
          In oculis quidem se esse admonere interesse enim maxime placeat, 
          facere possimus, omnis. Et quidem faciunt, ut labore et accurate 
          disserendum et harum quidem exercitus quid.
        </p>
      </div>

      <div className="flex justify-center w-full pb-[0px]">
        <div className="w-[1180px] h-[100px] flex items-center justify-start bg-white">
          <button className=" flex text-black font-bold text-[20px] px-[40px]">
            See all listings
            <img src = {Patho} alt = "Patho" className='ml-2 mb-[-5px]' />  
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;