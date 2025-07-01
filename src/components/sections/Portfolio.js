import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaFilter } from 'react-icons/fa';

const Portfolio = () => {
  const [filtroActivo, setFiltroActivo] = useState('todos');
  
  const textos = {
    titulo: "Mis Proyectos",
    filtros: {
      todos: "Todos",
      fullstack: "Full Stack",
      frontend: "Frontend",
      backend: "Backend"
    },
    botones: {
      github: "Ver Código",
      demo: "Ver Demo"
    }
  };

  const proyectos = [
    {
      id: 1,
      titulo: "KikinSecurity",
      descripcion: "Sistema de seguridad en desarrollo que implementa tecnologías modernas para protección y monitoreo. Proyecto en construcción con enfoque en seguridad digital.",
      imagen: "/placeholder.svg?height=250&width=400",
      tecnologias: ["JavaScript", "CSS", "HTML"],
      categoria: "frontend",
      github: "https://github.com/TMPixel/kikinsecurity",
      demo: null // En construcción
    },
    {
      id: 2,
      titulo: "Mercury",
      descripcion: "Sistema de seguimiento de activos basado en códigos QR para propiedades institucionales (PCs, monitores, periféricos, etc.). Potenciado por una base de datos de alto rendimiento para gestión fluida y eficiente.",
      imagen: "/placeholder.svg?height=250&width=400",
      tecnologias: ["TypeScript", "JavaScript", "CSS", "Base de Datos"],
      categoria: "fullstack",
      github: "https://github.com/SebasTix02/Mercury",
      demo: null
    },
    {
      id: 3,
      titulo: "AhorroFuturo",
      descripcion: "Herramienta avanzada de simulación de créditos e inversiones con alta personalización. Permite ajustar tasas, plazos y divisiones de inversión para modelar resultados. Combina una interfaz elegante y fácil de usar con cálculos financieros robustos para planificación precisa.",
      imagen: "https://github.com/ChrisitanLP/AhorroFuturo/blob/main/static/assets/img/Banners/first_banner.png?raw=true",
      tecnologias: ["HTML5", "JavaScript", "Python", "CSS"],
      categoria: "fullstack",
      github: "https://github.com/ChrisitanLP/AhorroFuturo",
      demo: null
    },
    {
      id: 4,
      titulo: "Facturaqua",
      descripcion: "Sistema de facturación para emitir facturas de pago a los contribuyentes de la junta de agua potable en Santa Rosa. Solución completa para gestión de servicios públicos con interfaz intuitiva y funcionalidades administrativas.",
      imagen: "https://github.com/Dionisio202/Junta_Agua/blob/main/public/img/Logo3@3x.png?raw=true",
      tecnologias: ["PHP", "JavaScript", "HTML5", "CSS", "MySQL"],
      categoria: "fullstack",
      github: "https://github.com/Dionisio202/Junta_Agua",
      demo: null
    }
  ];

  const categorias = ['todos', 'fullstack', 'frontend', 'backend'];
  
  const proyectosFiltrados = filtroActivo === 'todos' 
    ? proyectos 
    : proyectos.filter(proyecto => proyecto.categoria === filtroActivo);

  const ProyectoCard = ({ proyecto }) => (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
      {/* Imagen del Proyecto */}
      <div className="relative overflow-hidden">
        <img 
          src={proyecto.imagen || "/placeholder.svg"} 
          alt={proyecto.titulo}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
          <div className="space-x-3">
            <a 
              href={proyecto.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <FaGithub className="mr-2" />
              {textos.botones.github}
            </a>
            {proyecto.demo && (
              <a 
                href={proyecto.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-600 transition-colors inline-flex items-center"
              >
                <FaExternalLinkAlt className="mr-2" />
                {textos.botones.demo}
              </a>
            )}
          </div>
        </div>
      </div>
      
      {/* Contenido */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
          {proyecto.titulo}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {proyecto.descripcion}
        </p>
        
        {/* Tecnologías */}
        <div className="flex flex-wrap gap-2">
          {proyecto.tecnologias.map((tech, index) => (
            <span 
              key={index}
              className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-3 py-1 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Estado del proyecto */}
        {!proyecto.demo && (
          <div className="mt-3">
            <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-xs font-medium">
              En desarrollo
            </span>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="p-8 lg:p-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-8 text-center">
          {textos.titulo}
        </h1>
        
        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <FaFilter className="text-gray-600 dark:text-gray-400 mt-2" />
          {categorias.map((categoria) => (
            <button
              key={categoria}
              onClick={() => setFiltroActivo(categoria)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${
                filtroActivo === categoria
                  ? 'bg-primary-500 text-white shadow-lg transform scale-105'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {textos.filtros[categoria]}
            </button>
          ))}
        </div>

        {/* Grid de Proyectos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {proyectosFiltrados.map((proyecto) => (
            <ProyectoCard key={proyecto.id} proyecto={proyecto} />
          ))}
        </div>

        {/* Mensaje si no hay proyectos */}
        {proyectosFiltrados.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No hay proyectos en esta categoría aún.
            </p>
          </div>
        )}

        {/* Nota sobre proyectos en desarrollo */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            💡 Próximamente más proyectos...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;