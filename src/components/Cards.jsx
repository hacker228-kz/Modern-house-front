// // src/components/Cards.jsx
// import React from "react";
// import Card from "./Card";

// function Cards({ houses = [] }) {
//   return (
//     <div className="container mx-auto px-4 py-6">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {houses.map((house) => (
//           <Card
//             key={house.id}
//             title={house.title}
//             imageUrl={house.imageUrl}
//             stats={house.stats}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Cards;


// src/components/Cards.jsx
// import React from "react";


// function Cards({ houses = [] }) {
//   return (
//     <div className="container mx-auto px-4 py-6">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {houses.map((house) => (
          
//             key={house.id}
//             title={house.title}
//             imageUrl={house.imageUrl}
//             stats={house.stats}
         
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Cards;



// import React from "react";

// function Cards({ houses = [] }) {
//   return (
//     <div className="container mx-auto px-4 py-6">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {houses.map((house) => (
//           <div key={house.id} className="bg-white rounded shadow p-4">
//             <img
//               src={house.imageUrl}
//               alt={house.title}
//               className="w-full h-48 object-cover rounded"
//             />
//             <h2 className="mt-4 text-xl font-bold">{house.title}</h2>
//             <div className="flex space-x-4 mt-2">
//               {house.stats.map((stat, index) => (
//                 <div key={index} className="flex items-center">
//                   <span>{stat.icon}</span>
//                   <span className="ml-1">{stat.label}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Cards;


// import React from "react";

// function Cards({ houses = [] }) {
//   return (
//     <div className="  container mx-auto px-4 py-6">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {houses.map((house) => (
//           <div key={house.id} className=" rounded p-6">
//             <img
//               src={house.imageUrl || house.image} 
//               alt={house.title}
//               className="w-full h-48 object-cover rounded"
//             />
//             <h2 className="mt-4 text-xl font-bold">{house.title}</h2>
//             <div className="flex space-x-4 mt-2  ">
//               {house.stats.map((stat, index) => (
//                 <div key={index} className="flex items-center ">
//                   <span className="flex space-around ">{stat.icon}</span>
//                   <span className="ml-1 " >{stat.label}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Cards;


// function Cards({ houses = [] }) {
//     return (  
//       <div className="bg-[#F5F5F5]  -mt-110 pt-110     -mb-110 pb-110">
//       <div className="container mx-auto px-4 py-6   w-full h-full ">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3   ">
//           {houses.map((house) => (
//             <div key={house.id} className="  rounded p-12">
//               <img
//                 src={house.imageUrl || house.image}
//                 alt={house.title}
//                 className="w-100 h-70 object-cover rounded-tr-[30px] rounded-tl-[30px] rounded-bl-[0px] rounded-br-[0px] bg-white"
//               />
//               <h2 className="  text-xl font-bold text-center pr-30 py-5  border-2 border-gray-300 p-2  divide-gray-300 ">{house.title}</h2>
              
//               <div className="flex justify-center space-x-4 mt-[-2px] w-full border-2 border-gray-300 p-2 rounded-bl-[30px] rounded-br-[30px]">
//                 {house.stats.map((stat, index) => (
//                   <div key={index} className="flex items-center ml-5   ">
//                     <span>{stat.icon}</span>
//                     <span className="ml-1 ">{stat.label}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       </div>
//     );
//   }

//     export default Cards;



// function Cards({ houses = [] }) {
//   return (
//     <div className="bg-[#F5F5F5] -mt-110 pt-110 -mb-110 pb-110">
//       <div className="container mx-auto px-4 py-6 w-full h-full">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//           {houses.map((house) => (
//             <div key={house.id} className="rounded p-12">
//               <img
//                 src={house.imageUrl || house.image}
//                 alt={house.title}
//                 className="w-100 h-70 object-cover rounded-tr-[30px] rounded-tl-[30px] rounded-bl-[0px] rounded-br-[0px] bg-white"
//               />
//               <h2 className="text-xl font-bold text-center pr-30 py-5 border-2 border-gray-300 p-2 divide-gray-300">
//                 {house.title}
//               </h2>
              
//               <div className="flex justify-center mt-[-2px] w-full border-2 border-gray-300 p-2 rounded-bl-[30px] rounded-br-[30px]">
//                 {house.stats.map((stat, index) => (
//                   <div
//                     key={index}
//                     className={`flex items-center ${
//                       index !== house.stats.length - 1
//                         ? 'mr- pr-12 border-r border-gray-300'
//                         : ''
//                     }`}
//                   >
//                     <span>{stat.icon}</span>
//                     <span className="ml-1">{stat.label}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cards;





// function Cards({ houses = [] }) {
//   return (
//     <div className="bg-[#F5F5F5] -mt-110 pt-110 -mb-110 pb-110">
//       <div className="container mx-auto px-4 py-6 w-full h-full">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {houses.map((house) => (
//             <div key={house.id} className="rounded overflow-hidden">
//               <img
//                 src={house.imageUrl || house.image}
//                 alt={house.title}
//                 className="w-full h-70 object-cover rounded-tr-[30px] rounded-tl-[30px] bg-white"
//               />
//               {/* Заголовок с pr-12 и увеличенной высотой, без нижней границы */}
//               <h2 className="text-xl font-bold text-center pr-12 py-6 border border-gray-300 border-b-0">
//                 {house.title}
//               </h2>
//               {/* Нижний блок статистики с общей границей, без верхней границы */}
//               <div className="flex justify-center w-full border border-gray-300 border-t-0 p-2 rounded-bl-[30px] rounded-br-[30px]">
//                 {house.stats.map((stat, index) => (
//                   <div
//                     key={index}
//                     className={`flex items-center ${
//                       index !== house.stats.length - 1
//                         ? "mr-4 pr-4 border-r border-gray-300"
//                         : ""
//                     }`}
//                   >
//                     <span>{stat.icon}</span>
//                     <span className="ml-1">{stat.label}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cards;



// function Cards({ houses = [] }) {
//   return (
//     <div className="bg-[#F5F5F5] -mt-140 pt-140 -mb-90 pb-90">
//       <div className="container mx-auto px-4  ">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//           {houses.map((house) => (
//             <div key={house.id} className="rounded p-12 ">
//               <img
//                 src={house.imageUrl || house.image}
//                 alt={house.title}
//                 className="w-100 h-70 object-cover rounded-tr-[30px] rounded-tl-[30px] "
//               />
//               <h2 className="text-xl font-bold text-center pr-30 py-5 border-2 border-gray-300 p-2 divide-gray-300">
//                 {house.title}
//               </h2>

//               {/* Блок статов: только верхняя граница и скруглённые нижние углы */}
//               <div className="flex justify-center w-full border-t border-gray-300 p-2 rounded-bl-[30px] rounded-br-[30px]">
//                 {house.stats.map((stat, index) => (
//                   <div
//                     key={index}
//                     className={`flex items-center  ${
//                       index !== house.stats.length - 1
//                         ? 'mr-4 pr-4 border-r border-gray-300'
//                         : ''
//                     }`}
//                   >
//                     <span>{stat.icon}</span>
//                     <span className="ml-1">{stat.label}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cards;


// import { Link } from 'react-router-dom';
// function Cards({ houses = [] }) {
//   return (
//     <div id='modern-house' className="bg-[#F5F5F5] py-10  -mt-140 pt-140 -mb-90 pb-100 ">
//       <div className="container mx-auto px-4">
//         {/* Сетка карточек: 1 колонка на мобильном, 2 на среднем экране, 3 на большом */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
//           {houses.map((house) => (
//             <div 
//               key={house.id} 
//               className="bg-white rounded-[30px] shadow-md overflow-hidden"
//             >
//               {/* Верхняя часть – картинка */}
//               <img
//                 src={house.imageUrl || house.image}
//                 alt={house.title}
//                 className="w-full h-80 object-cover"
//               />

//               {/* Содержимое карточки */}
//               <div className="p-4">
//                 {/* Заголовок */}
//                 <h2 className="text-xl font-bold text-left mb-4 ml-5">
//                   {house.title}
//                 </h2>

//                 {/* Нижняя часть – статусы/иконки */}
//                 <div className="flex justify-center items-center border-t border-gray-300 pt-4">
//                   {house.stats.map((stat, index) => (
//                     <div
//                       key={index}
//                       className={`flex items-center ${
//                         index !== house.stats.length - 1
//                           ? 'mr-6 pr-6 border-r border-gray-300 '
//                           : ''
//                       }`}
//                     >
//                       {/* Если stat.icon – это компонент (например, иконка), выводим его */}
//                       <span className="mr-2">{stat.icon}</span>
//                       <span>{stat.label}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cards;



// import { Link } from 'react-router-dom';

// function Cards({ houses = [] }) {
//   const handleCardClick = (id) => {
//     window.open(`/house/${id}`, '_blank'); // Открыть в новом окне
//   };
//   return (
//     <div id='modern-house' className="bg-[#F5F5F5] py-10  -mt-140 pt-140 -mb-90 pb-100 ">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
//           {houses.map((house) => (
//             <Link to={`/house/${house.id}`} key={house.id}>
//               <div className="bg-white rounded-[30px] shadow-md overflow-hidden">
//                 <img
//                   src={house.imageUrl || house.image}
//                   alt={house.title}
//                   className="w-full h-80 object-cover"
//                 />
//                 <div className="p-4">
//                   <h2 className="text-xl font-bold text-left mb-4 ml-5">
//                     {house.title}
//                   </h2>
//                   <div className="flex justify-center items-center border-t border-gray-200  pt-8">
//                     {house.stats.map((stat, index) => (
//                       <div
//                         key={index}
//                         className={`flex items-center ${
//                           index !== house.stats.length - 1
//                             ? 'mr-6 pr-6 border-r border-gray-300  '
//                             : ''
//                         }`}
//                       >
//                         <span className="mr-2">{stat.icon}</span>
//                         <span>{stat.label}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cards;




// function Cards({ houses = [] }) {
//   return (
//     <div id='modern-house' className="bg-[#F5F5F5] py-10 -mt-140 pt-140 -mb-90 pb-100">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
//           {houses.map((house) => (
//             <Link to={`/house/${house.id}`} key={house.id} className="block">
//               <div className="bg-white rounded-[30px] shadow-md overflow-hidden">
//                 <img
//                   src={house.imageUrl || house.image}
//                   alt={house.title}
//                   className="w-full h-80 object-cover"
//                 />
                
//                 {/* Заголовок */}
//                 <div className="p-4">
//                   <h2 className="text-xl font-bold text-left mb-4 ml-5">
//                     {house.title}
//                   </h2>
//                 </div>

//                 {/* Разделительная линия */}
//                 <div className="border-t border-gray-200" />

//                 {/* Статистика */}
//                 <div className="p-4">
//                   <div className="flex justify-center items-center pt-8">
//                     {house.stats.map((stat, index) => (
//                       <div
//                         key={index}
//                         className={`flex items-center ${
//                           index !== house.stats.length - 1
//                             ? 'mr-6 pr-6 border-r border-gray-300'
//                             : ''
//                         }`}
//                       >
//                         <span className="mr-2">{stat.icon}</span>
//                         <span>{stat.label}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

//  export default Cards;


// import { Link } from 'react-router-dom'; // Добавляем недостающий импорт

// function Cards({ houses = [] }) {
//   return (
//     <div id='modern-house' className="bg-[#F5F5F5] py-10 -mt-140 pt-140 -mb-90 pb-100">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
//           {houses.map((house) => (
//             <Link 
//               to={`/house/${house.id}`} 
//               key={house.id} 
//               className="block" // Добавляем класс для правильного отображения
//             >
//               <div className="bg-white rounded-[30px] shadow-md overflow-hidden">
//                 <img
//                   src={house.imageUrl || house.image}
//                   alt={house.title}
//                   className="w-full h-80 object-cover"
//                 />
                
//                 <div className="p-4">
//                   <h2 className="text-xl font-bold text-left mb-4 ml-5">
//                     {house.title}
//                   </h2>
//                 </div>

//                 <div className="border-t border-gray-200" />

//                 <div className="p-4">
//                   <div className="flex justify-center items-center pt-8">
//                     {house.stats.map((stat, index) => (
//                       <div
//                         key={index}
//                         className={`flex items-center h-full ${
//                           index !== house.stats.length - 1
//                             ? 'mr-6 pr-6 border-r border-gray-300'
//                             : ''
//                         }`}
//                       >
//                         <span className="mr-2">{stat.icon}</span>
//                         <span>{stat.label}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cards;





// import { Link } from 'react-router-dom';

// function Cards({ houses = [] }) {
//   return (
//     <div id='modern-house' className="bg-[#F5F5F5] py-10 -mt-140 pt-140 -mb-90 pb-100">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
//           {houses.map((house) => (
//             <Link to={`/house/${house.id}`} key={house.id} className="block">
//               <div className="bg-white rounded-[30px] shadow-md overflow-hidden flex flex-col h-full">
//                 <img
//                   src={house.imageUrl || house.image}
//                   alt={house.title}
//                   className="w-full h-80 object-cover"
//                 />
                
//                 {/* Заголовок */}
//                 <div className="p-4 flex-1">
//                   <h2 className="text-xl font-bold text-left mb-4 ml-5">
//                     {house.title}
//                   </h2>
//                 </div>

//                 {/* Разделительная линия */}
//                 <div className="border-t border-gray-200" />

//                 {/* Блок статистики - можно перемещать эту секцию */}
//                 <div className="p-4">
//                   <div className="flex justify-center items-stretch h-20"> {/* Изменено здесь */}
//                     {house.stats.map((stat, index) => (
//                       <div
//                         key={index}
//                         className={`flex items-center h-full ${
//                           index !== house.stats.length - 1
//                             ? 'pr-6 border-r border-gray-300'
//                             : ''
//                         }`}
//                       >
//                         <span className="mx-3">{stat.icon}</span> {/* Добавлен горизонтальный отступ */}
//                         <span className="text-sm">{stat.label}</span>
                        
//                         {/* Добавляем отступ между элементами */}
//                         {index !== house.stats.length - 1 && (
//                           <div className="ml-6"></div>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cards;




// import { Link } from 'react-router-dom';

// function Cards({ houses = [] }) {
//   return (
//     <div id='modern-house' className="bg-[#F5F5F5] py-10 -mt-140 pt-140 -mb-90 pb-100">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
//           {houses.map((house) => (
//             <Link to={`/house/${house.id}`} key={house.id} className="block">
//               <div className="bg-white rounded-[30px] shadow-md overflow-hidden flex flex-col">
//                 {/* Изображение */}
//                 <img
//                   src={house.imageUrl || house.image}
//                   alt={house.title}
//                   className="w-full h-80 object-cover"
//                 />

//                 {/* Заголовок */}
//                 <div className="p-4">
//                   <h2 className="text-xl font-bold text-left mb-4 ml-5">
//                     {house.title}
//                   </h2>
//                 </div>

//                 {/* Разделительная линия */}
//                 <div className="border-t border-gray-200 mx-4" />

//                 {/* Статистика с исправленными границами */}
//                 <div className="p-4">
//                   <div className="flex justify-evenly items-center">
//                     {house.stats.map((stat, index) => (
//                       <div
//                         key={index}
//                         className="relative flex items-center px-4 h-12"
//                       >
//                         <span className="mr-2">{stat.icon}</span>
//                         <span>{stat.label}</span>
                        
//                         {/* Вертикальная линия между элементами */}
//                         {index !== house.stats.length - 1 && (
//                           <div className="absolute right-0 top-1/2 -translate-y-1/2 h-3/4 w-px bg-gray-300" />
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// // export default Cards;


// import { Link } from 'react-router-dom';

// function Cards({ houses = [] }) {
//   return (
//     <div id='modern-house' className="bg-[#F5F5F5] py-10 -mt-140 pt-140 -mb-90 pb-100">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
//           {houses.map((house) => (
//             <Link to={`/house/${house.id}`} key={house.id} className="block">
//               <div className="bg-white rounded-[30px] shadow-md overflow-hidden flex flex-col">
//                 {/* Изображение */}
//                 <img
//                   src={house.imageUrl || house.image}
//                   alt={house.title}
//                   className="w-full h-80 object-cover"
//                 />

//                 {/* Заголовок */}
//                 <div className="p-4">
//                   <h2 className="text-xl font-bold text-left mb-4 ml-5">
//                     {house.title}
//                   </h2>
//                 </div>

//                 {/* Разделительная линия */}
//                 <div className="border-t border-gray-200 mx-4" />

//                 {/* Статистика с идеально центрированными линиями */}
//                 <div className="p-4">
//                   <div className="flex justify-evenly items-center relative">
//                     {house.stats.map((stat, index) => (
//                       <div
//                         key={index}
//                         className="flex items-center px-4 h-12"
//                       >
//                         <img className="mr-2">{stat.icon}</img>
//                         <img>{stat.label}</img>
//                       </div>
//                     ))}
                    
//                     {/* Вертикальные линии между элементами */}
//                     {house.stats.slice(0, -1).map((_, index) => (
//                       <div 
//                         key={`line-${index}`}
//                         className="absolute h-3/4 w-px bg-gray-300 top-1/2 -translate-y-1/2"
//                         style={{
//                           left: `${(100 / house.stats.length) * (index + 1)}%`
//                         }}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cards;


// import { Link } from 'react-router-dom';

// function Cards({ houses = [] }) {
//   return (
//     <div id="modern-house" className="bg-[#F5F5F5] py-10  -mt-140 pt-140 -mb-90 pb-100">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
//           {houses.map((house) => (
//             <Link to={`/house/${house.id}`} key={house.id} className="block">
//               <div className="bg-white rounded-[30px] shadow-md overflow-hidden flex flex-col">
//                 {/* Изображение */}
//                 <img
//                   src={house.image || house.imageUrl}
//                   alt={house.title}
//                   className="w-full h-80 object-cover"
//                 />

//                 {/* Заголовок */}
//                 <div className="p-4">
//                   <h2 className="text-xl font-bold text-left mb-4 ml-5">
//                     {house.title}
//                   </h2>
//                 </div>

//                 {/* Разделительная линия */}
//                 <div className="border-t border-gray-200 mx-4" />

//                 {/* Статистика (иконки и цифры) */}
//                 <div className="p-4">
//                   <div className="flex justify-evenly items-center relative">
//                     {house.stats?.map((stat, index) => (
//                       <div key={index} className="flex items-center px-4 h-12">
//                         <img
//                           src={stat.icon}
//                           alt={stat.label}
//                           className="mr-2 w-5 h-5"
//                         />
//                         <span>{stat.label}</span>
//                       </div>
//                     ))}

//                     {/* Вертикальные линии между элементами (если больше одного) */}
//                     {house.stats && house.stats.length > 1 && 
//                       house.stats.slice(0, -1).map((_, index) => (
//                         <div
//                           key={`line-${index}`}
//                           className="absolute h-3/4 w-px bg-gray-300 top-1/2 -translate-y-1/2"
//                           style={{
//                             left: `${(100 / house.stats.length) * (index + 1)}%`,
//                           }}
//                         />
//                       ))
//                     }
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cards;



// import { Link } from 'react-router-dom';

// function Cards({ houses = [] }) {
//   return (
//     <div id="modern-house" className="bg-[#F5F5F5] py-10    -mt-140 pt-140 -mb-90 pb-100">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
//           {houses.map((house) => (
//             <Link to={`/house/${house.id}`} key={house.id} className="block">
//               <div className="bg-white rounded-[20px] shadow-lg overflow-hidden flex flex-col border border-gray-200">
//                 {/* Изображение */}
//                 <img
//                   src={house.image || house.imageUrl}
//                   alt={house.title}
//                   className="w-full h-64 object-cover"
//                 />

//                 {/* Заголовок */}
//                 <div className="p-4 border-b border-gray-200 py-8">
//                   <h2 className="text-lg font-bold text-gray-900 text-left">
//                     {house.title}
//                   </h2>
//                 </div>

//                 {/* Статистика (иконки и цифры) */}
//                 <div className="flex grid grid-cols-3 text-center border-t border-gray-200 divide-x divide-gray-200">
//                   {house.stats?.map((stat, index) => (
//                     <div key={index} className="flex flex-col items-center py-3">
//                       <img src={stat.icon} alt={stat.label} className="w-6 h-6 mb-1" />
//                       <span className=" text-sm font-medium text-gray-900">{stat.label}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cards;




import { Link } from 'react-router-dom';

function Cards({ houses = [] }) {
  return (
    <div id="modern-house" className="bg-[#F5F5F5] py-10  -mt-140 pt-140 -mb-90 pb-100">
      <div className="container mx-auto px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 ">
          {houses.map((house) => (
            <Link to={`/house/${house.id}`} key={house.id} className="block">
              <div className="bg-white rounded-[20px] shadow-lg overflow-hidden flex flex-col border border-gray-200 ">
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

                {/* Статистика (иконки и цифры) */}
                <div className="flex grid grid-cols-3 text-center border-t border-gray-200 divide-x divide-gray-200">
                  {house.stats?.map((stat, index) => (
                    <div key={index} className="flex items-center justify-center gap-2 py-6">
                      <img src={stat.icon} alt={stat.label} className="w-6 h-6" />
                      <span className="text-sm font-medium text-gray-900">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards;
