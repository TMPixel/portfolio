import React, { useState, useEffect } from 'react';
import Sidebar from './components/layout/Sidebar';
import MainContent from './components/layout/MainContent';
import LoadingScreen from './components/ui/LoadingScreen';
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
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  // Simular carga de recursos
  useEffect(() => {
    const preloadResources = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
    };
    preloadResources();
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => {
      setShowContent(true);
    }, 300);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div 
      className={`min-h-screen transition-opacity duration-500 ${
        showContent ? 'opacity-100' : 'opacity-0'
      } ${modoOscuro ? 'dark' : ''}`}
    >
      <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        {/* Sidebar */}
        <Sidebar 
          seccionActiva={seccionActiva}
          setSeccionActiva={setSeccionActiva}
          modoOscuro={modoOscuro}
          setModoOscuro={setModoOscuro}
          textos={textos.sidebar}
        />
        
        {/* Contenido Principal */}
        <div className="ml-80 flex-1">
          <MainContent 
            seccionActiva={seccionActiva}
            modoOscuro={modoOscuro}
          />
        </div>
      </div>
    </div>
  );
}

export default App;