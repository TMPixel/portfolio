import React, { useState } from 'react';
import { 
  FaEnvelope, 
  FaLinkedin, 
  FaGithub, 
  FaTwitter, 
  FaInstagram,
  FaPaperPlane,
  FaUser,
  FaFileAlt
} from 'react-icons/fa';

const Contact = () => {
  
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });
  
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const textos = {
    titulo: "Contáctame",
    subtitulo: "¿Tienes un proyecto en mente? ¡Hablemos!",
    formulario: {
      nombre: "Tu Nombre",
      email: "Tu Email",
      asunto: "Asunto",
      mensaje: "Tu Mensaje",
      enviar: "Enviar Mensaje",
      enviando: "Enviando...",
      enviado: "¡Mensaje Enviado! Pronto obtendrás una respuesta."
    },
    info: {
      titulo: "Información de Contacto",
      email: "tamiaofv@gmail.com",
      disponible: "Disponible para proyectos"
    },
    redes: {
      titulo: "También puedes encontrarme en..."
    }
  };

  const redesSociales = [
    {
      nombre: "Email",
      url: "mailto:tu.email@ejemplo.com",
      icon: FaEnvelope,
      color: "from-red-500 to-pink-500"
    },
    {
      nombre: "LinkedIn",
      url: "https://www.linkedin.com/in/tamia-maliza-a05aa7346/",
      icon: FaLinkedin,
      color: "from-blue-600 to-blue-800"
    },
    {
      nombre: "GitHub",
      url: "https://github.com/TMPixel/",
      icon: FaGithub,
      color: "from-gray-700 to-gray-900"
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);
    
    setTimeout(() => {
      setEnviando(false);
      setEnviado(true);
      setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
      
      setTimeout(() => {
        setEnviado(false);
      }, 3000);
    }, 2000);
  };

  return (
    <div className="p-8 lg:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            {textos.titulo}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {textos.subtitulo}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulario de Contacto */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nombre */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <FaUser className="inline mr-2" />
                  {textos.formulario.nombre}
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                  placeholder="Ramiro García"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <FaEnvelope className="inline mr-2" />
                  {textos.formulario.email}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                  placeholder="correo@ejemplo.com"
                />
              </div>

              {/* Asunto */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <FaFileAlt  className="inline mr-2" />
                  {textos.formulario.asunto}
                </label>
                <input
                  type="text"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                  placeholder="Propuesta/Idea de Proyecto"
                />
              </div>

              {/* Mensaje */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {textos.formulario.mensaje}
                </label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors resize-none"
                  placeholder="Detalles sobre el proyecto..."
                />
              </div>

              {/* Botón de Envío */}
              <button
                type="submit"
                disabled={enviando}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center ${
                  enviado
                    ? 'bg-green-500 text-white'
                    : enviando
                    ? 'bg-blue-400 text-white cursor-not-allowed'
                    : 'bg-blue-500 hover:bg-blue-600 text-white hover:transform hover:scale-105'
                }`}
              >
                {enviado ? (
                  <>
                    <FaPaperPlane className="mr-2" />
                    {textos.formulario.enviado}
                  </>
                ) : enviando ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    {textos.formulario.enviando}
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="mr-2" />
                    {textos.formulario.enviar}
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Información de Contacto */}
          <div className="space-y-8">
            {/* Info Personal */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                {textos.info.titulo}
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <FaEnvelope className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Email</p>
                    <p className="text-gray-800 dark:text-white font-semibold">
                      {textos.info.email}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center mr-4">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Estado</p>
                    <p className="text-green-600 dark:text-green-400 font-semibold">
                      {textos.info.disponible}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Redes Sociales */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                {textos.redes.titulo}
              </h3>
              
              <div className="grid grid-cols-1 gap-2">
                {redesSociales.map((red, index) => {
                  const IconComponent = red.icon;
                  return (
                    <a
                      key={index}
                      href={red.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 rounded-lg hover:shadow-lg transition-all duration-200 hover:transform hover:scale-105 bg-gray-50 dark:bg-gray-700"
                    >
                      <div className={`w-10 h-10 bg-gradient-to-br ${red.color} rounded-lg flex items-center justify-center mr-3`}>
                        <IconComponent className="text-white" />
                      </div>
                      <span className="text-gray-800 dark:text-white font-medium">
                        {red.nombre}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;