// import React from 'react';
// import logo from '../assets/logo.svg';
// import Path from '../assets/Path.svg';
// import Patho from '../assets/Patho.svg';

// const Header = () => {
//   return (
//     <div className="h-screen bg-[url('/lending-p.png')]   bg-cover bg-center flex flex-col justify-between">
//       <div className="flex items-center justify-between pt-[47px] pl-[177px] pr-[195px]">
//         <img src={logo} alt="logo" className="h-8" />
//         <div className="flex items-center space-x-[60px]">
//           <nav> 
//             <ul className="flex space-x-[60px] list-none p-0 m-0">
//             <li>
//                <a className="font-bold text-white text-[15px]" href="/">Home</a>
//              </li>
//              <li> 
//                <a className="font-bold text-white text-[15px]" href="#about-us">About Us</a>
//              </li>
//              <li>
//                <a className="font-bold text-white text-[15px]" href="#modern-house">Modern house </a>
//              </li>
//              <li>
//                <a className="font-bold text-white text-[15px]" href="#contacts">Contacts</a>
//              </li>
//          </ul>
//           </nav>
//           <a className="flex items-center font-bold text-black text-[17px] bg-[#FFAC12] py-[14px] px-[40px] w-[215px] h-[50px] rounded-tr-[18px] rounded-tl-none rounded-bl-none rounded-br-none" href="/">
//             Work with us
//             <img src={Path} alt="Path" className='ml-2'/>  
//           </a>
//         </div>
//       </div>

//       <div className="flex flex-col pl-[177px] pb-[80px] ml-[-10px]">
//         <h1 className="text-white font-dm-sans text-[80px] font-bold leading-[75px]  w-[519px] h-[240px]">
//           Beautiful homes made for you
//         </h1>
//         <p className="text-white font-dm-sans text-[20px] font-normal leading-[28px]  opacity-60 w-[428px] h-[112px] mt-[10px]">
//           In oculis quidem se esse admonere interesse enim maxime placeat, 
//           facere possimus, omnis. Et quidem faciunt, ut labore et accurate 
//           disserendum et harum quidem exercitus quid.
//         </p>
//       </div>

//       <div className="flex justify-center w-full pb-[0px]">
//         <div className="w-[1180px] h-[100px] flex items-center justify-start bg-white">
//           <button className=" flex text-black font-bold text-[20px] px-[40px]">
//             See all listings
//             <img src = {Patho} alt = "Patho" className='ml-2 mb-[-5px]' />  
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;


// import React from 'react';
// import logo from '../assets/logo.svg';
// import Path from '../assets/Path.svg';
// import Patho from '../assets/Patho.svg';

// const Header = () => {
//   return (
//     <div className="h-screen bg-[url('/lending-p.png')]   bg-cover bg-center flex flex-col justify-between">
//       <div className="flex items-center justify-between pt-[47px] pl-[177px] pr-[195px]">
//         <img src={logo} alt="logo" className="h-8" />
//         <div className="flex items-center space-x-[60px]">
//           <nav> 
//             <ul className="flex space-x-[60px] list-none p-0 m-0">
//             <li>
//                <a className="font-bold text-white text-[15px]" href="/">Home</a>
//              </li>
//              <li> 
//                <a className="font-bold text-white text-[15px]" href="#about-us">About Us</a>
//              </li>
//              <li>
//                <a className="font-bold text-white text-[15px]" href="#modern-house">Modern house </a>
//              </li>
//              <li>
//                <a className="font-bold text-white text-[15px]" href="#contacts">Contacts</a>
//              </li>
//          </ul>
//           </nav>
//           <a className="flex items-center font-bold text-black text-[17px] bg-[#FFAC12] py-[14px] px-[40px] w-[215px] h-[50px] rounded-tr-[18px] rounded-tl-none rounded-bl-none rounded-br-none" href="/">
//             Work with us
//             <img src={Path} alt="Path" className='ml-2'/>  
//           </a>
//         </div>
//       </div>

//       <div className="flex flex-col pl-[177px] pb-[80px] ml-[-10px]">
//         <h1 className="text-white font-dm-sans text-[80px] font-bold leading-[75px]  w-[519px] h-[240px]">
//           Beautiful homes made for you
//         </h1>
//         <p className="text-white font-dm-sans text-[20px] font-normal leading-[28px]  opacity-60 w-[428px] h-[112px] mt-[10px]">
//           In oculis quidem se esse admonere interesse enim maxime placeat, 
//           facere possimus, omnis. Et quidem faciunt, ut labore et accurate 
//           disserendum et harum quidem exercitus quid.
//         </p>
//       </div>

//       <div className="flex justify-center w-full pb-[0px]">
//         <div className="w-[1180px] h-[100px] flex items-center justify-start bg-white">
//           <button className=" flex text-black font-bold text-[20px] px-[40px]">
//             See all listings
//             <img src = {Patho} alt = "Patho" className='ml-2 mb-[-5px]' />  
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;





// import React, { useState } from 'react';
// import logo from '../assets/logo.svg';
// import Path from '../assets/Path.svg';
// import Patho from '../assets/Patho.svg';

// const Header = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="h-screen bg-[url('/lending-p.png')] bg-cover bg-center flex flex-col justify-between">
//       <div className="flex items-center justify-between pt-[47px] pl-[177px] pr-[195px]">
//         <img src={logo} alt="logo" className="h-8" />
//         <div className="flex items-center space-x-[60px]">
//           {/* Кнопка бургерного меню */}
//           <button className="lg:hidden text-white" onClick={toggleSidebar}>
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//             </svg>
//           </button>
//           {/* Боковое меню */}
//           <div className={`fixed top-0 left-0 h-full w-64  bg-opacity-90 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden z-50`}>
//             <button className="text-white p-4" onClick={toggleSidebar}>
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//               </svg>
//             </button>
//             <nav className="mt-10">
//               <ul className="flex flex-col space-y-4 list-none p-0 m-0">
//                 <li>
//                   <a className="font-bold text-white text-[15px] block p-4" href="/" onClick={toggleSidebar}>Home</a>
//                 </li>
//                 <li>
//                   <a className="font-bold text-white text-[15px] block p-4" href="#about-us" onClick={toggleSidebar}>About Us</a>
//                 </li>
//                 <li>
//                   <a className="font-bold text-white text-[15px] block p-4" href="#modern-house" onClick={toggleSidebar}>Modern house</a>
//                 </li>
//                 <li>
//                   <a className="font-bold text-white text-[15px] block p-4" href="#contacts" onClick={toggleSidebar}>Contacts</a>
//                 </li>
                
//               </ul>
//             </nav>
//           </div>
//           {/* Основное меню для больших экранов */}
//           <nav className="hidden lg:flex"> 
//             <ul className="flex space-x-[60px] list-none p-0 m-0">
//               <li>
//                 <a className="font-bold text-white text-[15px]" href="/">Home</a>
//               </li>
//               <li> 
//                 <a className="font-bold text-white text-[15px]" href="#about-us">About Us</a>
//               </li>
//               <li>
//                 <a className="font-bold text-white text-[15px]" href="#modern-house">Modern house </a>
//               </li>
//               <li>
//                 <a className="font-bold text-white text-[15px]" href="#contacts">Contacts</a>
//               </li>
//             </ul>
//           </nav>
//           <a className="hidden lg:flex items-center font-bold text-black text-[17px] bg-[#FFAC12] py-[14px] px-[40px] w-[215px] h-[50px] rounded-tr-[18px] rounded-tl-none rounded-bl-none rounded-br-none" href="/">
//             Work with us
//             <img src={Path} alt="Path" className='ml-2'/>  
//           </a>
//         </div>
//       </div>

//       <div className="flex flex-col pl-[177px] pb-[80px] ml-[-10px]">
//         <h1 className="text-white font-dm-sans text-[80px] font-bold leading-[75px] w-[519px] h-[240px]">
//           Beautiful homes made for you
//         </h1>
//         <p className="text-white font-dm-sans text-[20px] font-normal leading-[28px] opacity-60 w-[428px] h-[112px] mt-[10px]">
//           In oculis quidem se esse admonere interesse enim maxime placeat, 
//           facere possimus, omnis. Et quidem faciunt, ut labore et accurate 
//           disserendum et harum quidem exercitus quid.
//         </p>
//       </div>

//       <div className="flex justify-center w-full pb-[0px]">
//         <div className="w-[1180px] h-[100px] flex items-center justify-start bg-white">
//           <button className="flex text-black font-bold text-[20px] px-[40px]">
//             See all listings
//             <img src={Patho} alt="Patho" className='ml-2 mb-[-5px]' />  
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;





// import React, { useState } from 'react';
// import logo from '../assets/logo.svg';
// import Path from '../assets/Path.svg';
// import Patho from '../assets/Patho.svg';

// const Header = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="h-screen bg-[url('/lending-p.png')] bg-cover bg-center flex flex-col justify-between">
//       {/* Header Section */}
//       <div className="flex items-center justify-between pt-6 sm:pt-[47px] px-4 sm:pl-[177px] sm:pr-[195px]">
//         <img src={logo} alt="logo" className="h-6 sm:h-8" />
//         <div className="flex items-center space-x-4 sm:space-x-[60px]">
//           {/* Burger Button */}
//           <button className="lg:hidden text-white" onClick={toggleSidebar}>
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//             </svg>
//           </button>
          
//           {/* Mobile Sidebar */}
//           <div className={`fixed top-0 rigth-0 h-full w-64 bg-black bg-opacity-90 transform ${
//             isSidebarOpen ? '-translate-x-0' : 'translate-x-full'
//           } transition-transform duration-300 ease-in-out lg:hidden z-50`}>
//             {/* Close Button */}
//             <button className="text-white p-4" onClick={toggleSidebar}>
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//               </svg>
//             </button>
            
//             {/* Mobile Menu */}
//             <nav className="mt-8">
//               <ul className="flex flex-col space-y-2 list-none p-0 m-0">
//                 {['Home', 'About Us', 'Modern house', 'Contacts'].map((item) => (
//                   <li key={item}>
//                     <a className="font-bold text-white text-sm sm:text-[15px] block p-3 sm:p-4" 
//                        href={`#${item.toLowerCase().replace(' ', '-')}`} 
//                        onClick={toggleSidebar}>
//                       {item}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </nav>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex"> 
//             <ul className="flex space-x-4 sm:space-x-[60px] list-none p-0 m-0">
//               {['Home', 'About Us', 'Modern house', 'Contacts'].map((item) => (
//                 <li key={item}>
//                   <a className="font-bold text-white text-sm sm:text-[15px]" 
//                      href={`#${item.toLowerCase().replace(' ', '-')}`}>
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </nav>

//           {/* Work Button */}
//           <a className="hidden lg:flex items-center font-bold text-black text-sm sm:text-[17px] 
//                         bg-[#FFAC12] py-2 sm:py-[14px] px-4 sm:px-[40px] 
//                         w-[160px] sm:w-[215px] h-10 sm:h-[50px] 
//                         rounded-tr-[12px] sm:rounded-tr-[18px] rounded-tl-none rounded-bl-none rounded-br-none" 
//              href="/">
//             Work with us
//             <img src={Path} alt="Path" className='ml-2 w-3 sm:w-auto'/>  
//           </a>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex flex-col px-4 sm:pl-[177px] pb-8 sm:pb-[80px] ml-0 sm:ml-[-10px]">
//         <h1 className="text-white font-dm-sans text-4xl sm:text-[80px] font-bold 
//                        leading-[1.1] sm:leading-[75px] max-w-[90%] sm:w-[519px]">
//           Beautiful homes made for you
//         </h1>
//         <p className="text-white font-dm-sans text-base sm:text-[20px] mt-4 sm:mt-[10px] 
//                       opacity-60 max-w-[90%] sm:w-[428px] leading-6 sm:leading-[28px]">
//           In oculis quidem se esse admonere interesse enim maxime placeat, 
//           facere possimus, omnis. Et quidem faciunt, ut labore et accurate 
//           disserendum et harum quidem exercitus quid.
//         </p>
//       </div>

//       {/* Bottom Panel */}
//       <div className="flex justify-center w-full pb-0">
//         <div className="w-full sm:w-[1180px] h-16 sm:h-[100px] flex items-center justify-start bg-white mx-4 sm:mx-0">
//           <button className="flex text-black font-bold text-base sm:text-[20px] px-4 sm:px-[40px]">
//             See all listings
//             <img src={Patho} alt="Patho" className='ml-2 w-3 sm:w-auto mb-[-2px] sm:mb-[-5px]' />  
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;




import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import Path from '../assets/Path.svg';
import Patho from '../assets/Patho.svg';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="h-screen bg-[url('/lending-p.png')] bg-cover bg-center flex flex-col justify-between">
      {/* Header Section */}
      <div className="flex items-center justify-between pt-6 sm:pt-[47px] px-4 sm:pl-[177px] sm:pr-[195px]">
        <img src={logo} alt="logo" className="h-6 sm:h-8" />
        <div className="flex items-center space-x-4 sm:space-x-[60px]">
          {/* Burger Button */}
          <button className="lg:hidden text-white" onClick={toggleSidebar}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
          
          {/* Mobile Sidebar */}
          <div className={`fixed top-0 right-0 h-full w-40 bg-black bg-opacity-90 transform ${
            isSidebarOpen ? 'translate-x-0' : 'translate-x-[110%] '
          } transition-transform duration-300 ease-in-out lg:hidden z-50`}>
            {/* Close Button */}
            <button className="text-white p-4" onClick={toggleSidebar}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            
            {/* Mobile Menu */}
            <nav className="mt-8">
              <ul className="flex flex-col space-y-2 list-none p-0 m-0">
                <li><a className="font-bold text-white text-sm sm:text-[15px] block p-3 sm:p-4" href="#home" onClick={toggleSidebar}>Home</a></li>
                <li><a className="font-bold text-white text-sm sm:text-[15px] block p-3 sm:p-4" href="#about-us" onClick={toggleSidebar}>About Us</a></li>
                <li><a className="font-bold text-white text-sm sm:text-[15px] block p-3 sm:p-4" href="#modern-house" onClick={toggleSidebar}>Modern House</a></li>
                <li><a className="font-bold text-white text-sm sm:text-[15px] block p-3 sm:p-4" href="#contacts" onClick={toggleSidebar}>Contacts</a></li>
              </ul>
            </nav>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex"> 
            <ul className="flex space-x-4 sm:space-x-[60px] list-none p-0 m-0">
              <li><a className="font-bold text-white text-sm sm:text-[15px]" href="/">Home</a></li>
              <li><a className="font-bold text-white text-sm sm:text-[15px]" href="#about-us">About Us</a></li>
              <li><a className="font-bold text-white text-sm sm:text-[15px]" href="#modern-house">Modern House</a></li>
              <li><a className="font-bold text-white text-sm sm:text-[15px]" href="#contacts">Contacts</a></li>
            </ul>
          </nav>

          {/* Work Button */}
          <a className="hidden lg:flex items-center font-bold text-black text-sm sm:text-[17px] 
                        bg-[#FFAC12] py-2 sm:py-[14px] px-4 sm:px-[40px] 
                        w-[160px] sm:w-[215px] h-10 sm:h-[50px] 
                        rounded-tr-[12px] sm:rounded-tr-[18px] rounded-tl-none rounded-bl-none rounded-br-none" 
             href="/">
            Work with us
            <img src={Path} alt="Path" className='ml-2 w-3 sm:w-auto'/>  
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col px-4 sm:pl-[177px] pb-8 sm:pb-[80px] ml-0 sm:ml-[-10px]">
        <h1 className="text-white font-dm-sans text-4xl sm:text-[80px] font-bold 
                       leading-[1.1] sm:leading-[75px] max-w-[90%] sm:w-[519px]">
          Beautiful homes made for you
        </h1>
        <p className="text-white font-dm-sans text-base sm:text-[20px] mt-4 sm:mt-[10px] 
                      opacity-60 max-w-[90%] sm:w-[428px] leading-6 sm:leading-[28px]">
          In oculis quidem se esse admonere interesse enim maxime placeat, 
          facere possimus, omnis. Et quidem faciunt, ut labore et accurate 
          disserendum et harum quidem exercitus quid.
        </p>
      </div>

      {/* Bottom Panel */}
      <div className="flex justify-center w-full pb-0">
        <div className="w-full sm:w-[1180px] h-16 sm:h-[100px] flex items-center justify-start bg-white mx-4 sm:mx-0">
          <button className="flex text-black font-bold text-base sm:text-[20px] px-4 sm:px-[40px]">
            See all listings
            <img src={Patho} alt="Patho" className='ml-2 w-3 sm:w-auto mb-[-2px] sm:mb-[-5px]' />  
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;




// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../assets/logo.svg';
// import Path from '../assets/Path.svg';
// import Patho from '../assets/Patho.svg';

// const Header = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="h-screen bg-[url('/lending-p.png')] bg-cover bg-center flex flex-col justify-between">
//       {/* Header Section */}
//       <div className="flex items-center justify-between pt-6 sm:pt-[47px] px-4 sm:pl-[177px] sm:pr-[195px]">
//         <Link to="/">
//           <img src={logo} alt="logo" className="h-6 sm:h-8" />
//         </Link>
//         <div className="flex items-center space-x-4 sm:space-x-[60px]">
//           {/* Burger Button */}
//           <button className="lg:hidden text-white" onClick={toggleSidebar}>
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//             </svg>
//           </button>
          
//           {/* Mobile Sidebar */}
//           <div className={`fixed top-0 right-0 h-full w-64 bg-black bg-opacity-90 transform ${
//             isSidebarOpen ? '-translate-x-0' : 'translate-x-full'
//           } transition-transform duration-300 ease-in-out lg:hidden z-50`}>
//             {/* Close Button */}
//             <button className="text-white p-4" onClick={toggleSidebar}>
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//               </svg>
//             </button>
            
//             {/* Mobile Menu */}
//             <nav className="mt-8">
//               <ul className="flex flex-col space-y-2 list-none p-0 m-0">
//                 <li>
//                   <Link 
//                     to="/" 
//                     className="font-bold text-white text-sm sm:text-[15px] block p-3 sm:p-4" 
//                     onClick={toggleSidebar}
//                   >
//                     Home
//                   </Link>
//                 </li>
//                 <li>
//                   <Link 
//                     to="/about-us" 
//                     className="font-bold text-white text-sm sm:text-[15px] block p-3 sm:p-4" 
//                     onClick={toggleSidebar}
//                   >
//                     About Us
//                   </Link>
//                 </li>
//                 <li>
//                   <Link 
//                     to="/modern-house" 
//                     className="font-bold text-white text-sm sm:text-[15px] block p-3 sm:p-4" 
//                     onClick={toggleSidebar}
//                   >
//                     Modern House
//                   </Link>
//                 </li>
//                 <li>
//                   <Link 
//                     to="/contacts" 
//                     className="font-bold text-white text-sm sm:text-[15px] block p-3 sm:p-4" 
//                     onClick={toggleSidebar}
//                   >
//                     Contacts
//                   </Link>
//                 </li>
//               </ul>
//             </nav>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex"> 
//             <ul className="flex space-x-4 sm:space-x-[60px] list-none p-0 m-0">
//               <li>
//                 <Link to="/" className="font-bold text-white text-sm sm:text-[15px]">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/about-us" className="font-bold text-white text-sm sm:text-[15px]">
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/modern-house" className="font-bold text-white text-sm sm:text-[15px]">
//                   Modern House
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/contacts" className="font-bold text-white text-sm sm:text-[15px]">
//                   Contacts
//                 </Link>
//               </li>
//             </ul>
//           </nav>

//           {/* Work Button */}
//           <Link 
//             to="/work-with-us" 
//             className="hidden lg:flex items-center font-bold text-black text-sm sm:text-[17px] 
//                        bg-[#FFAC12] py-2 sm:py-[14px] px-4 sm:px-[40px] 
//                        w-[160px] sm:w-[215px] h-10 sm:h-[50px] 
//                        rounded-tr-[12px] sm:rounded-tr-[18px] rounded-tl-none rounded-bl-none rounded-br-none"
//           >
//             Work with us
//             <img src={Path} alt="Path" className="ml-2 w-3 sm:w-auto" />  
//           </Link>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex flex-col px-4 sm:pl-[177px] pb-8 sm:pb-[80px] ml-0 sm:ml-[-10px]">
//         <h1 className="text-white font-dm-sans text-4xl sm:text-[80px] font-bold 
//                        leading-[1.1] sm:leading-[75px] max-w-[90%] sm:w-[519px]">
//           Beautiful homes made for you
//         </h1>
//         <p className="text-white font-dm-sans text-base sm:text-[20px] mt-4 sm:mt-[10px] 
//                       opacity-60 max-w-[90%] sm:w-[428px] leading-6 sm:leading-[28px]">
//           In oculis quidem se esse admonere interesse enim maxime placeat, 
//           facere possimus, omnis. Et quidem faciunt, ut labore et accurate 
//           disserendum et harum quidem exercitus quid.
//         </p>
//       </div>

//       {/* Bottom Panel */}
//       <div className="flex justify-center w-full pb-0">
//         <div className="w-full sm:w-[1180px] h-16 sm:h-[100px] flex items-center justify-start bg-white mx-4 sm:mx-0">
//           <Link to="/listings" className="flex text-black font-bold text-base sm:text-[20px] px-4 sm:px-[40px]">
//             See all listings
//             <img src={Patho} alt="Patho" className="ml-2 w-3 sm:w-auto mb-[-2px] sm:mb-[-5px]" />  
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
