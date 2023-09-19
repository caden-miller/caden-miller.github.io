import Home from './components/Home'
import NavBar from './components/NavBar'
import SocialLinks from './components/SocialLinks';
import About from './components/About'
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import React from 'react';

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Projects />
      <Experience />
      <About />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
