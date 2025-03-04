// import React from 'react'
// import Header from './components/Header'
// //import { useState } from 'react'
// import Hero from './components/Hero'
// import Heros from './components/heros'
// import Cards from './components/Cards'
// import { houses } from './assets/houses.js'
// import Goodhands from './components/goodhands.jsx'
// import Goodhandss from './components/Goodhandss.jsx'
// import Reviews from './components/Reviews.jsx'
// import Contact from './components/Contact.jsx'







// function App() {  
//   return (
//  <div>
//     <Header />
//     <Hero/>
//     <Heros/>
//     <Cards houses={houses} />
//     <Goodhands/>
//     <Goodhandss/>
//     <Reviews/>
//     <Contact/>
//  </div>
  
//   )
// }

// export default App


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import Heros from './components/heros';
// import Cards from './components/Cards';
// import { houses } from './assets/houses.js';
// import Goodhands from './components/goodhands.jsx';
// import Goodhandss from './components/Goodhandss.jsx';
// import Reviews from './components/Reviews.jsx';
// import Contact from './components/Contact.jsx';
// import HouseDetails from './components/HouseDetails';

// function App() {
//   return (
//     <Router>
//       <div>
//         <Header />
//         <Routes>
//           <Route path="/" element={
//             <>
//               <Hero />
//               <Heros />
//               <Cards houses={houses} />
//               <Goodhands />
//               <Goodhandss />
//               <Reviews />
//               <Contact />
//             </>
//           } />
//           <Route path="/house/:id" element={<HouseDetails />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;



import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Heros from './components/heros';
import Cards from './components/Cards';
import { houses } from './assets/houses.js';
import Goodhands from './components/goodhands.jsx';
import Goodhandss from './components/Goodhandss.jsx';
import Reviews from './components/Reviews.jsx';
import Contact from './components/Contact.jsx';
import HouseDetails from './components/HouseDetails'; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <Router>
      <div>
       
        <Routes>
          <Route path="/" element={
            <>
             <Header />
              <Hero />
              <Heros />
              <Cards houses={houses} />
              <Goodhands />
              <Goodhandss />
              <Reviews />
              <Contact />
            </>
          } />
          <Route path="/house/:id" element={<HouseDetails />} /> {/* Маршрут для новой страницы */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import Heros from './components/heros';
// import Cards from './components/Cards';
// import { houses } from './assets/houses.js';
// import Goodhands from './components/goodhands.jsx';
// import Goodhandss from './components/Goodhandss.jsx';
// import Reviews from './components/Reviews.jsx';
// import Contact from './components/Contact.jsx';
// import HousePage from './components/HousePage'; // Добавьте этот импорт

// function App() {  
//   return (
//     <Router>
//       <div>
//         <Header />
        
//         <Routes>
//           {/* Главная страница со всем контентом */}
//           <Route path="/" element={
//             <>
//               <Hero/>
//               <Heros/>
//               <Cards houses={houses} />
//               <Goodhands/>
//               <Goodhandss/>
//               <Reviews/>
//               <Contact/>
//             </>
//           }/>

//           {/* Страница с деталями дома */}
//           <Route 
//             path="/house/:id" 
//             element={<HousePage houses={houses} />}
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;