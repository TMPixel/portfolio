import React from 'react';
import { FaHeart, FaGamepad, FaMusic, FaCamera, FaBook, FaPlane } from 'react-icons/fa';

const About = () => {
  
  const textos = {
    titulo: "Un poco sobre mí",
    descripcion: "¡Hola! Soy un desarrollador web apasionado por crear experiencias digitales increíbles. Me encanta transformar ideas en código y siempre estoy buscando nuevos desafíos que me permitan crecer profesionalmente.",
    parrafo1: "Con experiencia en desarrollo frontend y backend, disfruto trabajando con tecnologías modernas y manteniéndome actualizado con las últimas tendencias del desarrollo web.",
    parrafo2: "Cuando no estoy programando, me gusta explorar nuevas tecnologías, contribuir a proyectos de código abierto y compartir conocimientos con la comunidad de desarrolladores.",
    interesesTitulo: "Intereses Personales",
    intereses: [
      { icon: FaGamepad, titulo: "Gaming", descripcion: "Disfruto de videojuegos, especialmente aquellos con buena narrativa y mecánicas innovadoras." },
      { icon: FaMusic, titulo: "Música", descripcion: "La música me inspira mientras programo. Desde rock hasta electrónica." },
      { icon: FaCamera, titulo: "Fotografía", descripcion: "Capturar momentos únicos y jugar con la composición visual." },
      { icon: FaBook, titulo: "Lectura", descripcion: "Libros técnicos, ciencia ficción y desarrollo personal." },
      { icon: FaPlane, titulo: "Viajes", descripcion: "Conocer nuevas culturas y encontrar inspiración en diferentes lugares." },
      { icon: FaHeart, titulo: "Voluntariado", descripcion: "Contribuir con la comunidad y enseñar programación a otros." }
    ]
  };

  return (
    <div className="p-8 lg:p-12">
      {/* Sección Principal */}
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            {textos.titulo}
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              {textos.descripcion}
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              {textos.parrafo1}
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {textos.parrafo2}
            </p>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-gray-200 dark:border-gray-700 my-12"></div>

        {/* Sección Intereses */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-8">
            {textos.interesesTitulo}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {textos.intereses.map((interes, index) => {
              const IconComponent = interes.icon;
              return (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="text-white text-xl" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                      {interes.titulo}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {interes.descripcion}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;