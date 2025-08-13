import React from 'react'
import Navbar from './components/Navbar';

import Home from './Home';
import About from './About';
import Projects from './Project'; // Assuming you have a Projects component
import Contact from './contact'; // Assuming you have a Contact component
import Footer from './components/Footer';


const App = () => {
  return (
    <>

      <Navbar />

      <Home />
      <About />
      <Projects />
      <Contact />

      <Footer />

  
    </>
  )
}

export default App