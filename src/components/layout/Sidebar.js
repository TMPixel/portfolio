import React, { useState } from 'react';
import { 
  FaUser, 
  FaGraduationCap, 
  FaCode, 
  FaBriefcase, 
  FaEnvelope,
  FaMoon,
  FaSun,
  FaBars,
  FaTimes
} from 'react-icons/fa';
import gatoProgramador from '../../img/portfolio-pfp.jpg'; 

const Sidebar = ({ 
  seccionActiva, 
  setSeccionActiva, 
  modoOscuro, 
  setModoOscuro,
  textos 
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const menuItems = [
    { id: 'sobreMi', label: textos.menu.sobreMi, icon: FaUser },
    { id: 'educacion', label: textos.menu.educacion, icon: FaGraduationCap },
    { id: 'habilidades', label: textos.menu.habilidades, icon: FaCode },
    { id: 'portafolio', label: textos.menu.portafolio, icon: FaBriefcase },
    { id: 'contacto', label: textos.menu.contacto, icon: FaEnvelope }
  ];

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`${isCollapsed ? 'w-20' : 'w-80'} h-screen fixed top-0 left-0 bg-white dark:bg-gray-800 shadow-lg flex flex-col transition-all duration-300`}>
      
      {/* Botón Toggle */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <button
          onClick={toggleSidebar}
          className="w-full flex items-center justify-center p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          {isCollapsed ? <FaBars className="text-xl" /> : <FaTimes className="text-xl" />}
        </button>
      </div>

      {/* Header del Sidebar */}
      {!isCollapsed && (
        <div className="p-8 text-center border-b border-gray-200 dark:border-gray-700">
          {/* Foto de Perfil - Gato Programador */}
          <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-600">
            <img 
              src={gatoProgramador || "/placeholder.svg"} 
              alt="Gato Programador" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
            {textos.nombre}
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            {textos.titulo}
          </p>
        </div>
      )}

      {/* Versión colapsada del perfil */}
      {isCollapsed && (
        <div className="p-4 text-center border-b border-gray-200 dark:border-gray-700">
          <div className="w-12 h-12 mx-auto rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-600">
            <img 
              src={gatoProgramador || "/placeholder.svg"} 
              alt="Gato Programador" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {/* Menú de Navegación */}
      <nav className="flex-1 py-8">
        <ul className="space-y-2 px-4">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => setSeccionActiva(item.id)}
                  className={`w-full flex items-center ${isCollapsed ? 'justify-center px-2' : 'px-4'} py-3 rounded-lg transition-all duration-200 group relative ${
                    seccionActiva === item.id
                      ? 'bg-blue-500 text-white shadow-lg transform scale-105'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                  title={isCollapsed ? item.label : ''}
                >
                  <IconComponent className={`text-lg ${isCollapsed ? '' : 'mr-3'}`} />
                  {!isCollapsed && (
                    <span className="font-medium">{item.label}</span>
                  )}
                  
                  {/* Tooltip para modo colapsado */}
                  {isCollapsed && (
                    <div className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                      {item.label}
                    </div>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Controles Inferiores - Solo Modo Oscuro */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={() => setModoOscuro(!modoOscuro)}
          className={`w-full flex items-center ${isCollapsed ? 'justify-center px-2' : 'px-4'} py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group relative`}
          title={isCollapsed ? (modoOscuro ? 'Modo Claro' : 'Modo Oscuro') : ''}
        >
          {modoOscuro ? <FaSun className={`text-lg ${isCollapsed ? '' : 'mr-2'}`} /> : <FaMoon className={`text-lg ${isCollapsed ? '' : 'mr-2'}`} />}
          {!isCollapsed && (
            <span>{modoOscuro ? 'Modo Claro' : 'Modo Oscuro'}</span>
          )}
          
          {/* Tooltip para modo colapsado */}
          {isCollapsed && (
            <div className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
              {modoOscuro ? 'Modo Claro' : 'Modo Oscuro'}
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;