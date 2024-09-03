"use client";

import React from 'react';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      {/* Contenido principal */}
      <div className="w-full">
        <h1 className="text-3xl font-bold my-6 text-center">
          Asociación Vecinal La Nueva Elipa: Más de 40 Años Luchando por un Barrio Mejor
        </h1>
        <p className="mb-4">
          Somos una Asociación Vecinal con más de 40 años de historia, comprometidos con la mejora de nuestro barrio, La Elipa.
          Como entidad sin ánimo de lucro, trabajamos incansablemente por y para nuestros vecinos, con el objetivo de hacer de
          La Elipa un lugar más amable, habitable, humano y solidario.
        </p>
        <p className="mb-4">
          Nos distingue nuestro firme compromiso con la acción social, la sostenibilidad y el medioambiente, el consumo responsable,
          y la promoción de un ocio y tiempo libre de calidad. Las reivindicaciones han sido, y siguen siendo, el motor que nos
          impulsa a través de la acción colectiva, logrando cambios y mejoras significativas para nuestro barrio.
        </p>
        <p className="mb-6">
          Nuestros fines incluyen la representación y defensa de los intereses vecinales, la mejora de las infraestructuras y servicios,
          el fomento de la convivencia y la participación ciudadana. Además, promovemos iniciativas que contribuyan al desarrollo social
          y cultural, la sostenibilidad y la mejora de los espacios verdes.
        </p>

        <h2 className="text-2xl font-bold my-4 text-center">¿Qué Reclamamos para La Elipa?</h2>
        <p className="mb-6">
          Destacamos las principales demandas que buscamos llevar a cabo para mejorar nuestro barrio. Estas peticiones
          reflejan las necesidades reales de La Elipa y queremos trabajar conjuntamente con nuestros vecinos y las autoridades para
          hacerlas realidad.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-4">
            <img src="/icons/Centro de Salud.svg" alt="Centro de Salud" className="h-24 w-24 mb-2 mx-auto object-contain" />
            <h3 className="font-bold text-center mb-4">Centro de Salud en C/José Barbastre</h3>
            <p>
              La saturación del actual centro de salud en Av. Daroca hace necesaria la construcción de un nuevo centro. Este proyecto fue
              aprobado por la Comunidad de Madrid en 2008 y sigue parado, pendiente de la recalificación del terreno.
            </p>
          </div>
          <div className="p-4">
            <img src="/icons/Recuperación y Mantenimiento del Pinar.svg" alt="Recuperación del Pinar" className="h-24 w-24 mb-2 mx-auto object-contain" />
            <h3 className="font-bold text-center">Recuperación y Mantenimiento del Pinar</h3>
            <p>
              Solicitamos más inversión en la plantación de árboles y masa arbórea, además de la definición de un plan director para su
              adecuado mantenimiento.
            </p>
          </div>
          <div className="p-4">
            <img src="/icons/Retirada de Amianto.svg" alt="Retirada de Amianto" className="h-24 w-24 mb-2 mx-auto object-contain" />
            <h3 className="font-bold text-center mb-4">Retirada de Amianto</h3>
            <p>
              Reclamamos ayudas que permitan la retirada de todo el amianto de los edificios del barrio, protegiendo así la salud de los
              vecinos.
            </p>
          </div>
          <div className="p-4">
            <img src="/icons/Atención de Servicios Sociales.svg" alt="Servicios Sociales" className="h-24 w-24 mb-2 mx-auto object-contain" />
            <h3 className="font-bold text-center mb-4">Atención de Servicios Sociales</h3>
            <p>
              Exigimos la recuperación del servicio de atención a los vecinos por parte de las trabajadoras sociales, un servicio esencial
              para el bienestar de nuestra comunidad.
            </p>
          </div>
          <div className="p-4">
            <img src="/icons/Aparcamiento para Residentes.svg" alt="Aparcamiento" className="h-24 w-24 mb-2 mx-auto object-contain" />
            <h3 className="font-bold text-center mb-4">Aparcamiento para Residentes</h3>
            <p>
              Necesitamos soluciones que mitiguen los problemas de aparcamiento que persisten en el barrio, especialmente durante la noche.
            </p>
          </div>
          <div className="p-4">
            <img src="/icons/Limpieza y Recuperación de Espacios Interbloques.svg" alt="Limpieza" className="h-24 w-24 mb-2 mx-auto object-contain" />
            <h3 className="font-bold text-center">Limpieza y Recuperación de Espacios Interbloques</h3>
            <p>
              Demandamos un mantenimiento y limpieza más continuado de estas zonas, que son de titularidad municipal y requieren atención
              regular.
            </p>
          </div>
          <div className="p-4">
            <img src="/icons/Línea 11 de Metro.svg" alt="Línea 11 de Metro" className="h-24 w-24 mb-2 mx-auto object-contain" />
            <h3 className="font-bold text-center mb-4">Línea 11 de Metro</h3>
            <p>
              Proponemos que la Línea 11 de metro conecte nuestro barrio con Valdebebas y La Fortuna, mejorando la movilidad y
              conectividad.
            </p>
          </div>
          <div className="p-4">
            <img src="/icons/Regulación de Viviendas de Uso Turístico.svg" alt="Viviendas Turísticas" className="h-24 w-24 mb-2 mx-auto object-contain" />
            <h3 className="font-bold text-center">Regulación de Viviendas de Uso Turístico</h3>
            <p>
              Reclamamos una regulación efectiva de estas viviendas, que están encareciendo tanto la vivienda como los servicios, y
              dificultando la disponibilidad de alquileres en el barrio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
