//! VERSIÓN 1
// import logo from './logo.svg';
// import './App.css';
// import CarCarousel from './components/CarCarousel';

// function App() {
//   return (
//     <div className="App">
//       <CarCarousel />
     
//     </div>
//   );
// }

//& VERSIÓN 2
import React from 'react';
import { ThemeProvider } from "@material-tailwind/react";
import Home from './components/Home';

function App(){
  return(
    <ThemeProvider>
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  );
}


export default App;
