import React from 'react';
import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaNode, 
  FaPython, 
  FaGitAlt, 
  FaDatabase,
  FaServer,
  FaMobile
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiMongodb, 
  SiPostgresql, 
  SiExpress,
  SiNextdotjs,
  SiFirebase,
  SiVercel
} from 'react-icons/si';

const Skills = () => {
  
  const textos = {
    titulo: "Habilidades Técnicas",
    categorias: {
      frontend: "Frontend",
      backend: "Backend", 
      database: "Bases de Datos",
      tools: "Herramientas"
    }
  };

  const habilidades = {
    frontend: [
      { nombre: "React", icon: FaReact, nivel: 90, color: "from-blue-400 to-cyan-400" },
      { nombre: "JavaScript", icon: FaJs, nivel: 95, color: "from-yellow-400 to-yellow-600" },
      { nombre: "TypeScript", icon: SiTypescript, nivel: 85, color: "from-blue-600 to-blue-800" },
      { nombre: "HTML5", icon: FaHtml5, nivel: 95, color: "from-orange-500 to-red-500" },
      { nombre: "CSS3", icon: FaCss3Alt, nivel: 90, color: "from-blue-500 to-blue-700" },
      { nombre: "Tailwind CSS", icon: SiTailwindcss, nivel: 88, color: "from-teal-400 to-teal-600" },
      { nombre: "Next.js", icon: SiNextdotjs, nivel: 80, color: "from-gray-800 to-black" }
    ],
    backend: [
      { nombre: "Node.js", icon: FaNode, nivel: 85, color: "from-green-500 to-green-700" },
      { nombre: "Express", icon: SiExpress, nivel: 80, color: "from-gray-600 to-gray-800" },
      { nombre: "Python", icon: FaPython, nivel: 75, color: "from-blue-500 to-yellow-500" },
      { nombre: "API REST", icon: FaServer, nivel: 85, color: "from-purple-500 to-purple-700" }
    ],
    database: [
      { nombre: "MongoDB", icon: SiMongodb, nivel: 82, color: "from-green-600 to-green-800" },
      { nombre: "PostgreSQL", icon: SiPostgresql, nivel: 78, color: "from-blue-700 to-blue-900" },
      { nombre: "Firebase", icon: SiFirebase, nivel: 80, color: "from-yellow-500 to-orange-500" }
    ],
    tools: [
      { nombre: "Git", icon: FaGitAlt, nivel: 90, color: "from-orange-600 to-red-600" },
      { nombre: "Vercel", icon: SiVercel, nivel: 85, color: "from-gray-800 to-black" },
      { nombre: "Responsive Design", icon: FaMobile, nivel: 92, color: "from-pink-500 to-purple-500" }
    ]
  };

  const SkillCard = ({ skill }) => {
    const IconComponent = skill.icon;
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
        <div className="flex items-center mb-4">
          <div className={`w-12 h-12 bg-gradient-to-br ${skill.color} rounded-lg flex items-center justify-center mr-4`}>
            <IconComponent className="text-white text-xl" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
              {skill.nombre}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {skill.nivel}% de dominio
            </p>
          </div>
        </div>
        
        {/* Barra de Progreso */}
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div 
            className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
            style={{ width: `${skill.nivel}%` }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-8 lg:p-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-12 text-center">
          {textos.titulo}
        </h1>
        
        <div className="space-y-12">
          {/* Frontend */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mr-3"></div>
              {textos.categorias.frontend}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {habilidades.frontend.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </div>

          {/* Backend */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg mr-3"></div>
              {textos.categorias.backend}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {habilidades.backend.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </div>

          {/* Bases de Datos */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg mr-3"></div>
              {textos.categorias.database}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {habilidades.database.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </div>

          {/* Herramientas */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg mr-3"></div>
              {textos.categorias.tools}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {habilidades.tools.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;