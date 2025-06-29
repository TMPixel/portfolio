import React from 'react';
import About from '../sections/About';
import Education from '../sections/Education';
import Skills from '../sections/Skills';
import Portfolio from '../sections/Portfolio';
import Contact from '../sections/Contact';

const MainContent = ({ seccionActiva, modoOscuro }) => {
  
  const renderSeccion = () => {
    switch (seccionActiva) {
      case 'sobreMi':
        return <About />;
      case 'educacion':
        return <Education />;
      case 'habilidades':
        return <Skills />;
      case 'portafolio':
        return <Portfolio />;
      case 'contacto':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="min-h-full">
        {renderSeccion()}
      </div>
    </div>
  );
};

export default MainContent;