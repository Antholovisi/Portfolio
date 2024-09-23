import React from 'react';
import './App.scss';

// Import des composants
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Skills from './pages/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      
      {/* Section Home */}
      <section id="home">
        <Home />
      </section>

      {/* Section Portfolio */}
      <section id="portfolio">
        <Portfolio />
      </section>

      {/* Section Competences */}
      <section id="compétences">
        <Skills />
      </section>

      {/* Section About */}
      <section id="about">
        <About />
      </section>
      {/* Section Contact */}
      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;
