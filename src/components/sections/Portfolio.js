import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaFilter } from 'react-icons/fa';

const Portfolio = () => {
  
  const [filtroActivo, setFiltroActivo] = useState('todos');
  
  const textos = {
    titulo: "Mis Proyectos",
    filtros: {
      todos: "Todos",
      react: "React",
      fullstack: "Full Stack",
      frontend: "Frontend"
    },
    botones: {
      github: "Ver Código",
      demo: "Ver Demo"
    }
  };

  const proyectos = [
    {
      id: 1,
      titulo: "E-Commerce React",
      descripcion: "Tienda online completa con carrito de compras, autenticación y pasarela de pagos. Desarrollada con React, Node.js y MongoDB.",
      imagen: "https://via.placeholder.com/400x250/3B82F6/FFFFFF?text=E-Commerce+App",
      tecnologias: ["React", "Node.js", "MongoDB", "Stripe"],
      categoria: "fullstack",
      github: "https://github.com/tuusuario/ecommerce-react",
      demo: "https://ecommerce-demo.vercel.app"
    },
    {
      id: 2,
      titulo: "Dashboard Analítico",
      descripcion: "Panel de control interactivo con gráficos en tiempo real, filtros avanzados y exportación de datos. UI moderna y responsive.",
      imagen: "https://via.placeholder.com/400x250/10B981/FFFFFF?text=Analytics+Dashboard",
      tecnologias: ["React", "Chart.js", "Tailwind", "API"],
      categoria: "react",
      github: "https://github.com/tuusuario/analytics-dashboard",
      demo: "https://dashboard-demo.vercel.app"
    },
    {
      id: 3,
      titulo: "App de Tareas",
      descripcion: "Aplicación de gestión de tareas con drag & drop, categorías, fechas límite y sincronización en la nube.",
      imagen: "https://via.placeholder.com/400x250/8B5CF6/FFFFFF?text=Task+Manager",
      tecnologias: ["React", "Firebase", "DnD Kit"],
      categoria: "react",
      github: "https://github.com/tuusuario/task-manager",
      demo: "https://tasks-demo.vercel.app"
    },
    {
      id: 4,
      titulo: "Landing Page Corporativa",
      descripcion: "Sitio web corporativo moderno con animaciones fluidas, formulario de contacto y optimización SEO completa.",
      imagen: "https://via.placeholder.com/400x250/F59E0B/FFFFFF?text=Corporate+Website",
      tecnologias: ["HTML", "CSS", "JavaScript", "GSAP"],
      categoria: "frontend",
      github: "https://github.com/tuusuario/corporate-website",
      demo: "https://corporate-demo.vercel.app"
    },
    {
      id: 5,
      titulo: "API REST Blog",
      descripcion: "API completa para un sistema de blog con autenticación JWT, CRUD de posts, comentarios y sistema de roles.",
      imagen: "https://via.placeholder.com/400x250/EF4444/FFFFFF?text=Blog+API",
      tecnologias: ["Node.js", "Express", "PostgreSQL", "JWT"],
      categoria: "fullstack",
      github: "https://github.com/tuusuario/blog-api",
      demo: "https://blog-api-docs.vercel.app"
    },
    {
      id: 6,
      titulo: "Calculadora Científica",
      descripcion: "Calculadora avanzada con funciones científicas, historial de operaciones y modo programador.",
      imagen: "https://via.placeholder.com/400x250/06B6D4/FFFFFF?text=Scientific+Calculator",
      tecnologias: ["React", "Math.js", "CSS Grid"],
      categoria: "react",
      github: "https://github.com/tuusuario/scientific-calculator",
      demo: "https://calculator-demo.vercel.app"
    }
  ];

  const categorias = ['todos', 'react', 'fullstack', 'frontend'];
  
  const proyectosFiltrados = filtroActivo === 'todos' 
    ? proyectos 
    : proyectos.filter(proyecto => proyecto.categoria === filtroActivo);

  const ProyectoCard = ({ proyecto }) => (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
      {/* Imagen del Proyecto */}
      <div className="relative overflow-hidden">
        <img 
          src={proyecto.imagen} 
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
            <a 
              href={proyecto.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors inline-flex items-center"
            >
              <FaExternalLinkAlt className="mr-2" />
              {textos.botones.demo}
            </a>
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
              className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
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
                  ? 'bg-blue-500 text-white shadow-lg transform scale-105'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {textos.filtros[categoria]}
            </button>
          ))}
        </div>

        {/* Grid de Proyectos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>
    </div>
  );
};

export default Portfolio;