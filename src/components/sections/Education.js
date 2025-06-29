import React from 'react';
import { FaUniversity, FaCertificate, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';

const Education = () => {
  
  const textos = {
    titulo: "Formación Académica",
    certificacionesTitulo: "Cursos y Certificaciones",
    educacion: [
      {
        titulo: "Ingeniería en Sistemas",
        institucion: "Universidad Tecnológica",
        periodo: "2019 - 2023",
        ubicacion: "Ciudad, País",
        descripcion: "Especialización en desarrollo de software y sistemas de información. Proyectos destacados en desarrollo web y bases de datos."
      },
      {
        titulo: "Técnico en Programación",
        institucion: "Instituto Técnico Superior",
        periodo: "2017 - 2019",
        ubicacion: "Ciudad, País",
        descripcion: "Fundamentos de programación, algoritmos y estructuras de datos. Introducción al desarrollo web."
      }
    ],
    certificaciones: [
      {
        titulo: "React Developer Certification",
        emisor: "Meta",
        fecha: "2023",
        credencial: "ABC123XYZ"
      },
      {
        titulo: "JavaScript Algorithms and Data Structures",
        emisor: "freeCodeCamp",
        fecha: "2023",
        credencial: "DEF456ABC"
      },
      {
        titulo: "Full Stack Web Development",
        emisor: "The Odin Project",
        fecha: "2022",
        credencial: "GHI789DEF"
      },
      {
        titulo: "Git and GitHub Essential Training",
        emisor: "LinkedIn Learning",
        fecha: "2022",
        credencial: "JKL012GHI"
      }
    ]
  };

  return (
    <div className="p-8 lg:p-12">
      <div className="max-w-4xl mx-auto">
        
        {/* Educación Formal */}
        <div className="mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-8">
            {textos.titulo}
          </h1>
          
          <div className="space-y-8">
            {textos.educacion.map((item, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex items-center mb-4 lg:mb-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <FaUniversity className="text-white text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                        {item.titulo}
                      </h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                        {item.institucion}
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                      <FaCalendar className="mr-2" />
                      {item.periodo}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <FaMapMarkerAlt className="mr-2" />
                      {item.ubicacion}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-gray-200 dark:border-gray-700 my-12"></div>

        {/* Certificaciones */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-8">
            {textos.certificacionesTitulo}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {textos.certificaciones.map((cert, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <FaCertificate className="text-white text-xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                      {cert.titulo}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">
                      {cert.emisor}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                      {cert.fecha}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-xs">
                      ID: {cert.credencial}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;