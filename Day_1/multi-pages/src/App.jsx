import React from 'react'
// Import routing tools from react-router-dom
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//Import page Components
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {

  return (
  // BrowserRouter enables routing in the React app
  <BrowserRouter>
   <div>
      <nav>
        <link to="/">Home</link>
        <link to="/about">About</link>
        <link to="/contact">Contact</link>
      </nav>
     {/* Routes container holds all route definitions */}
      <Routes>

        {/* Route for Home page */}
        {/* When URL is "/" Home component will render */}
        <Route path="/" element={<Home/>} />
         
        <Route path="/about" element={<About/>}/>

        <Route path="/contact" element={<Contact/>}/>
        
      </Routes>
    </div>
  </BrowserRouter>

   
  )
}
