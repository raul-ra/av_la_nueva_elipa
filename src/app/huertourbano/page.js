"use client";

import React from 'react';
import Image from 'next/image';
import CTASocio from '../../components/ctaSocio/ctaSocio';

export default function HuertoElipa() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-center font-bold text-4xl mb-6">Huerto Urbano de La Elipa</h1>

            {/* Texto del huerto */}
            <div className="mb-8">
                <p className="mb-4">
                    En 2016, la Asociación de Vecinos La Nueva Elipa solicitó una parcela de 832 m² en el Pinar de La Elipa para la creación y mantenimiento de un Huerto Urbano Comunitario, reflejando de esta manera su compromiso con el medioambiente y la creación de un entorno más sostenible y saludable.
                </p>
                <p className="mb-4">
                    El Huerto Urbano de La Elipa, con carácter ecológico y comunitario, se sitúa en el Parque Pinar de La Elipa, rodeado de una gran superficie arbolada, en su mayoría pinos y encinas, y circundado por un carril bici y caminos muy utilizados para el paseo por los vecinos de los barrios de La Elipa y Moratalaz. El huerto es miembro de la Red de Huertos Urbanos de Madrid, lo que refuerza su enfoque en la sostenibilidad y el trabajo comunitario.
                </p>
                <p className="mb-4">
                    Es un espacio abierto a todos los que quieran participar en un proyecto que aúna la actividad hortense (cultivo y producción de verduras, frutas y plantas ornamentales) con cualquier otra actividad de carácter social, lúdico o educativo. La tierra es compartida sin parcelas privadas que dividan el terreno, creando un sentido de pertenencia colectiva, lo que fortalece los lazos entre los participantes.
                </p>
                <p className="mb-4">
                    Nos guía el consumo de alimentos frescos y ecológicos, el mantenimiento medioambiental adecuado de nuestro entorno, y la producción colectiva ecológica, realizada con nuestras propias manos. Cada cosecha es el resultado de un esfuerzo conjunto, lo que fomenta la solidaridad y la cooperación en la comunidad.
                </p>
                <p className="mb-4">
                    El huerto también es un punto de encuentro y un lugar para la realización de actividades tanto para los integrantes del equipo de trabajo hortense como para la Asociación Vecinal La Nueva Elipa. Además, está abierto a centros de Educación Primaria y Secundaria, tanto públicos como privados, así como a asociaciones juveniles y de mayores del barrio, que lo utilizan principalmente para actividades relacionadas con la naturaleza y la horticultura.
                </p>
                <p className="mb-4">
                    Es un espacio inclusivo donde no importa el origen, la edad o el nivel de experiencia. También acoge visitas de colegios, fundaciones y centros educativos especializados en niños con autismo y otras necesidades especiales, proporcionando una experiencia enriquecedora para todos los participantes.
                </p>
            </div>

            {/* Componente CTA entre el texto y los datos de contacto */}
            <div className="flex justify-center mb-12">
                <CTASocio /> {/* Componente de llamada a la acción */}
            </div>

            {/* Mapa y datos de contacto en pantallas grandes */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Datos de contacto (lado izquierdo) */}
                <div className="flex flex-col justify-between order-2 lg:order-1">
                    <div className="mb-4">
                        <div className="flex items-center mt-6 mb-6">
                            <Image src="/icons/address.svg" alt="Dirección" width={75} height={75} className="mr-2" />
                            <div>
                                <p className="font-bold">Dirección:</p>
                                <p>Calle Santa Irene 4, Pinar de la Elipa, La Elipa (Ciudad Lineal)</p>
                            </div>
                        </div>

                        <div className="flex items-center mb-6">
                            <Image src="/icons/Entidad responsable.svg" alt="Entidad Responsable" width={75} height={75} className="mr-2" />
                            <div>
                                <p className="font-bold">Entidad responsable:</p>
                                <p>Asociación de Vecinos La Nueva Elipa</p>
                            </div>
                        </div>

                        <div className="flex items-center mb-6">
                            <Image src="/icons/mail.svg" alt="Email de Contacto" width={75} height={75} className="mr-2" />
                            <div>
                                <p className="font-bold">Email de contacto:</p>
                                <a href="mailto:huertolaelipa@gmail.com" className="text-teal-600 underline">huertolaelipa@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <Image src="/icons/schedule.svg" alt="Horarios" width={75} height={75} className="mr-2" />
                            <div>
                                <p className="font-bold">Días y horas de apertura:</p>
                                <p>
                                    Los horarios varían según la disponibilidad de las personas voluntarias del huerto. Lo mejor es que escribas un email a{' '}
                                    <a href="mailto:huertolaelipa@gmail.com" className="text-teal-600 underline">huertolaelipa@gmail.com</a>{' '}
                                    si quieres saber cuándo puedes pasarte a conocernos.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mapa (lado derecho) */}
                <div className="flex flex-col items-center order-1 lg:order-2">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1402.111687891189!2d-3.6527934864333838!3d40.418175067177096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses!2ses!4v1726508519588!5m2!1ses!2ses"
                        width="600"
                        height="450"
                        style={{ border: '4px solid teal', borderRadius: '8px' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full mb-4"
                    ></iframe>
                    <p className="text-center text-gray-600">Haz click en el mapa para guiarte hasta el Huerto de La Elipa.</p>
                </div>
            </div>
        </div>
    );
}
