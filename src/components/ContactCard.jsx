

import React from "react";
import Patho from '../assets/Patho.svg';

export default function ContactCard() {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-[25px] shadow-md p-4">
      {/* Шапка карточки с фоном */}
      <div className="flex items-center mb-4 bg-[#F5F5F5] p-4 rounded-[15px]">
        <img
          src="Avatar.png"
          alt="Avatar"
          className="w-12 h-12 rounded-full mr-3 object-cover"
        />
        <div>
          <h2 className="text-lg font-medium">Kayley Hall</h2>
          <a
            href="#"
            className="text-sm text-orange-500 hover:underline"
          >
            View profile
          </a>
        </div>
      </div>

      {/* Форма */}
      <form>
        <div className="mb-4">
          <input
            type="text"
            id="name"
            placeholder="Name"
            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-blue-100"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            id="phone"
            placeholder="Phone"
            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-blue-100"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-blue-100"
          />
        </div>
        <div className="mb-4">
          <textarea
            id="message"
            placeholder="Hello, I am interested in..."
            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-blue-100"
            rows="6"
          ></textarea>
        </div>
        
        {/* Кнопка */}
        <button
                 className="
                   flex 
                   items-center
                   justify-center 
                   w-full
                   text-[17px] 
                   bg-black 
                   py-4 
                   px-10 
                   rounded-tr-[18px] 
                   text-black 
                   font-semibold   
                   mt-2
                   text-white
                 "
               >
                 Learn more
                <img src = {Patho} alt = "Patho" className='ml-2 ' />
               </button>
      </form>
    </div>
  );
}
