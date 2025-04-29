import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './Navigation/navbar';
import Hero from './Hero/hero'
import About from './Pages/about';
import Project from './Pages/project';
import Contacts from './Pages/contacts';
import Footer from './Footer/footer';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <main className="pt-20"> {/* Add top padding to push content below Navbar */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

