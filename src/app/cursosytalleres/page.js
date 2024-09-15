"use client";

import React from 'react';
import CardWorkshop from '../../components/cardWorkshop/cardWorkshop';  // Corregimos la importación del componente cardWorkshop
import CTAInformacion from '../../components/ctaInformacion/ctaInformacion';  // Importamos el componente CTAInformacion

export default function CursosTalleres() {
    return (
        <div className="container mx-auto px-4">
            {/* Banner con título estilizado */}
            <h1 className="text-center font-bold my-6">
                <span className="text-4xl md:text-5xl">La Elipa Activa y Colectiva</span>
            </h1>

            {/* Descripción introductoria */}
            <p className="mb-4">
                La diversidad de actividades que la Asociación lleva a cabo es un reflejo del papel central que desempeña la Asociación como punto de encuentro comunitario.
            </p>

            <h2 className="text-2xl font-bold my-4 text-center">Cursos y Talleres</h2>

            <p className="mb-4">
                En el local de la A.V. La Nueva Elipa, ofrecemos espacios versátiles para una diversa gama de actividades, especialmente talleres enfocados en el ejercicio físico, la inclusión y la creatividad. La variedad de actividades refleja el compromiso de la Asociación de adaptarse a las necesidades e intereses cambiantes del barrio.
            </p>

            {/* Componente de tarjetas de talleres */}
            <CardWorkshop />
        </div>
    );
}

