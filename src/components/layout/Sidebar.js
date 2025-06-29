import React from 'react';
import { 
  FaUser, 
  FaGraduationCap, 
  FaCode, 
  FaBriefcase, 
  FaEnvelope,
  FaMoon,
  FaSun,
  FaMagic,
  FaGlobe
} from 'react-icons/fa';

const Sidebar = ({ 
  seccionActiva, 
  setSeccionActiva, 
  modoOscuro, 
  setModoOscuro, 
  cursorMagico, 
  setCursorMagico,
  textos 
}) => {
  
  const menuItems = [
    { id: 'sobreMi', label: textos.menu.sobreMi, icon: FaUser },
    { id: 'educacion', label: textos.menu.educacion, icon: FaGraduationCap },
    { id: 'habilidades', label: textos.menu.habilidades, icon: FaCode },
    { id: 'portafolio', label: textos.menu.portafolio, icon: FaBriefcase },
    { id: 'contacto', label: textos.menu.contacto, icon: FaEnvelope }
  ];

  return (
    <div className="w-80 bg-white dark:bg-gray-800 shadow-lg flex flex-col transition-colors duration-300">
      {/* Header del Sidebar */}
      <div className="p-8 text-center border-b border-gray-200 dark:border-gray-700">
        {/* Foto de Perfil - Placeholder por ahora */}
        <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
          <FaUser className="text-4xl text-white" />
        </div>
        
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          {textos.nombre}
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          {textos.titulo}
        </p>
      </div>

      {/* Menú de Navegación */}
      <nav className="flex-1 py-8">
        <ul className="space-y-2 px-4">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => setSeccionActiva(item.id)}
                  className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                    seccionActiva === item.id
                      ? 'bg-blue-500 text-white shadow-lg transform scale-105'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <IconComponent className="mr-3 text-lg" />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Controles Inferiores */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700 space-y-3">
        {/* Toggle Modo Oscuro */}
        <button
          onClick={() => setModoOscuro(!modoOscuro)}
          className="w-full flex items-center justify-between px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <span className="flex items-center">
            {modoOscuro ? <FaSun className="mr-2" /> : <FaMoon className="mr-2" />}
            {modoOscuro ? 'Modo Claro' : 'Modo Oscuro'}
          </span>
        </button>

        {/* Toggle Cursor Mágico */}
        <button
          onClick={() => setCursorMagico(!cursorMagico)}
          className="w-full flex items-center justify-between px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <span className="flex items-center">
            <FaMagic className="mr-2" />
            Cursor Mágico
          </span>
          <div className={`w-10 h-5 rounded-full transition-colors ${cursorMagico ? 'bg-blue-500' : 'bg-gray-300'}`}>
            <div className={`w-4 h-4 rounded-full bg-white mt-0.5 transition-transform ${cursorMagico ? 'ml-5' : 'ml-0.5'}`}></div>
          </div>
        </button>

        {/* Selector de Idioma (Placeholder) */}
        <button className="w-full flex items-center justify-between px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
          <span className="flex items-center">
            <FaGlobe className="mr-2" />
            Español
          </span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;