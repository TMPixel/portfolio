import React, { useState } from 'react';
import Sidebar from './components/layout/Sidebar';
import MainContent from './components/layout/MainContent';
import './App.css';

const textos = {
  sidebar: {
    nombre: "Mimi",
    titulo: "Desarrolladora Web",
    menu: {
      sobreMi: "Sobre Mí",
      educacion: "Educación", 
      habilidades: "Habilidades",
      portafolio: "Proyectos",
      contacto: "Contacto"
    }
  }
};

function App() {
  const [seccionActiva, setSeccionActiva] = useState('sobreMi');
  const [modoOscuro, setModoOscuro] = useState(false);
  const [cursorMagico, setCursorMagico] = useState(true);

  return (
    <div className={`min-h-screen ${modoOscuro ? 'dark' : ''}`}>
      <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        {/* Sidebar */}
        <Sidebar 
          seccionActiva={seccionActiva}
          setSeccionActiva={setSeccionActiva}
          modoOscuro={modoOscuro}
          setModoOscuro={setModoOscuro}
          cursorMagico={cursorMagico}
          setCursorMagico={setCursorMagico}
          textos={textos.sidebar}
        />
        
        {/* Contenido Principal */}
        <MainContent 
          seccionActiva={seccionActiva}
          modoOscuro={modoOscuro}
        />
      </div>
    </div>
  );
}

export default App;