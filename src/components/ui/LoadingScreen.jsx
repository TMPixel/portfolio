import React, { useEffect, useState } from 'react';
import gatoProgramador from '../../img/gatoProgramador.jpg'; // Importar la imagen

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Cargando...');

  const loadingTexts = [
    'Inicializando portafolio...',
    'Cargando proyectos...',
    'Preparando experiencia...',
    '¡Casi listo!'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setLoadingText(loadingTexts[Math.floor(Math.random() * loadingTexts.length)]);
    }, 1000);

    return () => clearInterval(textInterval);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center z-50">
      {/* Partículas de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>

      {/* Contenido principal */}
      <div className="text-center z-10">
        {/* Imagen del gato programador */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/30 shadow-2xl animate-bounce">
            <img 
              src={gatoProgramador || "/placeholder.svg"} 
              alt="Gato Programador" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Texto de carga */}
        <h2 className="text-white text-2xl font-light mb-8 animate-pulse">
          {loadingText}
        </h2>

        {/* Barra de progreso */}
        <div className="w-80 mx-auto">
          <div className="bg-white/20 rounded-full h-2 mb-4 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-pink-500 to-violet-500 h-full rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-white/80 text-sm">{progress}%</p>
        </div>

        {/* Spinner adicional */}
        <div className="mt-8">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-white/30 border-t-white mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;