
"use client";

import React from 'react';
import Image from 'next/image';
import CTASocio from '../../components/ctaSocio/ctaSocio';
import CTAInformacion from '../../components/ctaInformacion/ctaInformacion';

export default function ColectivosElipa() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-center font-bold text-4xl mb-6">Colectivos y Colaboraciones en La Elipa</h1>

            {/* Icono representativo con tamaño responsive y reducción de margen superior */}
            <div className="flex justify-center mt-0 mb-3">
                <Image 
                    src="/icons/colectivos.svg" 
                    alt="Colectivos" 
                    width={500} 
                    height={500} 
                    className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-auto" 
                />
            </div>

               {/* CTA Informacion */}
               <div className="flex justify-center my-6">
                    <CTAInformacion />
                </div>

            {/* Texto principal */}
            <div className="mb-8">
                <p className="mb-4">
                    Contamos con diversos colectivos que enriquecen y fortalecen nuestro espacio común. Cada uno de ellos aporta su compromiso y dedicación para contribuir al bienestar del barrio en diferentes ámbitos. Todos trabajan para mejorar nuestro entorno y promover la participación comunitaria.
                </p>
                <p className="mb-4">
                    Estas colaboraciones nos permiten abordar las necesidades de La Elipa de manera integral, fomentando la unión vecinal y el desarrollo de proyectos que nos beneficien a todos. Juntos, construimos un barrio más solidario y activo.
                </p>
            </div>

            {/* Texto adicional */}
            <div className="mb-8">
                <p className="mb-4">
                    Destacamos nuestro respaldo a la <strong>Despensa Solidaria</strong> y a <strong>Alcohólicos Anónimos</strong>, dos iniciativas que contribuyen significativamente a mejorar la calidad de vida de muchas personas.
                </p>
                <p className="mb-4">
                    La Asociación trabaja también para fomentar la sostenibilidad y el respeto por el medioambiente. Como parte de este compromiso, ponemos a disposición espacios que permiten a colectivos locales desarrollar proyectos con un impacto positivo en el entorno y la calidad de vida de los vecinos de La Elipa.
                </p>

                <p className="mb-4">
                    Por último, la Asociación apoya y colabora con diversos grupos que promueven actividades de ocio y tiempo libre de calidad. Nuestro objetivo es crear espacios de encuentro donde los vecinos puedan compartir experiencias, aprender y disfrutar en un ambiente saludable. Apostamos por un ocio que entretenga y que contribuya a la cohesión del barrio.
                </p>
                <p className="mb-4">
                    Invitamos a todo el barrio a sumarse a estas iniciativas, ya sea mediante donaciones, voluntariado o simplemente difundiendo su labor. Juntos, podemos construir un barrio más solidario e inclusivo, donde nadie se sienta solo ante las dificultades.
                </p>
            </div>

            {/* Componente CTA entre el texto y los datos de contacto */}
            <div className="flex justify-center mb-12">
                <CTASocio />
            </div>
        </div>
    );
}