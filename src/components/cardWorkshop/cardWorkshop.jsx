import React from 'react';
import CTAInformacion from '../../components/ctaInformacion/ctaInformacion'; // Importamos el componente CTAInformacion

const workshops = [
  {
    title: 'Yoga',
    description: 'El yoga es una disciplina que une cuerpo, mente y alma que aporta grandes beneficios. Mejora la flexibilidad, fortalece huesos y músculos, alivia dolores posturales y reduce la ansiedad y el estrés.',
    image: '/images/Yoga.png',
  },
  {
    title: 'Flamenco',
    description: 'Son clases personalizadas que combinan música, baile y expresión corporal y donde se aprende el compás, zapateado, braceo y coreografía.',
    image: '/images/Flamenco.png',
  },
  {
    title: 'Pintura',
    description: 'Pintar es una actividad creativa que permite expresarnos y explorar nuestro lado artístico además de aportarnos beneficios para la salud mental y emocional.',
    image: '/images/Pintura.png',
  },
  {
    title: 'Lengua de Signos',
    description: 'Nuestros cursos siguen una línea comunicativa, con dinámicas interactivas. La enseñanza es impartida en su totalidad en lengua de signos española por personas sordas, tituladas por la CNSE.',
    image: '/images/Lengua de signos.png',
  },
  {
    title: 'Salsation Fitness',
    description: 'Es una actividad de fitness enfocada en el entrenamiento funcional. En las clases se baila lo que se siente, enfocándose en la musicalidad y la expresión lírica.',
    image: '/images/Salsation.png',
  },
  {
    title: 'Inglés iniciación',
    description: 'El nivel es de iniciación. Además de adquirir nuevos conocimientos del idioma, las alumnas pasan una tarde entretenida y divertida.',
    image: '/images/Ingles.png',
  },
  {
    title: 'Boxeo',
    description: 'Es una disciplina de entrenamiento integral que combina ejercicios cardiovasculares, técnicas de combate, y trabajo de fuerza y resistencia. Hay clases para adultos y niños.',
    image: '/images/Boxeo.png',
  },
  {
    title: 'Swing',
    description: 'Las clases de swing son una experiencia donde se enseñan combinaciones de pasos básicos y movimientos improvisados que permiten a los alumnos experimentar su propio estilo.',
    image: '/images/Swing.png',
  },
  {
    title: 'Zumba',
    description: 'Actividad apta para todos los públicos, sin límite de edad. Combina la diversión de bailar con los beneficios del ejercicio cardiovascular y de tonificación muscular.',
    image: '/images/Zumba.png',
  },
  {
    title: 'Pilates',
    description: 'Entrenamiento basado en la práctica sistemática de ejercicios específicos que se trabajan mediante la respiración, el control mental y la relajación.',
    image: '/images/Pilates.png',
  },
];

function CardWorkshop() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 p-4">
      {workshops.map((workshop, index) => (
        <div key={index} className="border-2 border-teal p-4 rounded-lg shadow-lg flex flex-col">
          <img
            src={workshop.image}
            alt={workshop.title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="flex-1 p-4 flex flex-col justify-start">
            {/* Título centrado */}
            <h3 className="text-xl font-bold mb-2 text-center">{workshop.title}</h3>
            {/* Descripción justificada */}
            <p className="text-gray-700 mb-4 text-justify flex-grow">{workshop.description}</p>
            {/* Agregamos el componente CTAInformacion */}
            <CTAInformacion />
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardWorkshop;
