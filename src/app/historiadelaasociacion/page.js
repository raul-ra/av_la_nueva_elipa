"use client";

import React from 'react';
import Timeline from '../../components/timeLine/timeline';
import CTASocio from '../../components/ctaSocio/ctaSocio'; // Reutilizamos el componente `CTASocio`

export default function HistoriaAsociacion() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-center font-bold text-4xl mb-6">
                Historia de Nuestra Asociación
            </h1>

            {/* Texto introductorio */}
            <div className="mb-8">
                <p className="mb-4">
                    La historia de la Asociación Vecinal La Nueva Elipa está profundamente
                    ligada a la evolución del barrio y a las luchas vecinales que han
                    marcado su desarrollo. Fundada en 1977, esta asociación ha sido
                    testigo y protagonista de importantes cambios en el tejido social y
                    urbano de La Elipa.
                </p>
                <p className="mb-4">
                    A lo largo de los años, la Asociación ha jugado un papel clave en la
                    mejora de las infraestructuras del barrio, la creación de espacios
                    comunitarios, y la lucha por los derechos de los vecinos. Desde la
                    pavimentación de calles hasta la construcción de centros educativos,
                    la Asociación ha sido un pilar en la transformación de La Elipa.
                </p>
            </div>

            {/* Componente timeline */}
            <Timeline /> 

            {/* Componente CTA */}
            <div className="flex justify-center my-12">
                <CTASocio />
            </div>
        </div>
    );
}
