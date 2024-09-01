"use client";

import React from "react";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-ivory shadow-footer-top py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    {/* Logos */}
                    <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center md:text-left">
                        <div className="flex justify-center md:justify-start items-center mb-4">
                            <Image
                                src="/logos/logoDragonTeal.svg"
                                alt="Logo Dragon Teal"
                                width={75}
                                height={60}
                            />
                            <Image
                                src="/logos/avLaNuevaElipaShortBlack.svg"
                                alt="Logo Av La Nueva Elipa"
                                width={130}
                                height={60}
                                className="ease-in-out"
                            />
                        </div>
                    </div>

                    {/* Información de Contacto */}
                    <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center">
                        <h2 className="text-lg font-semibold mb-2">Contacto</h2>
                        <div className="flex flex-col items-center md:items-start">
                            <div className="flex items-center justify-start mt-2">
                                <Image
                                    src="/icons/address.svg"
                                    alt="Dirección"
                                    width={24}
                                    height={24}
                                    className="mr-2"
                                />
                                <a
                                    href="https://maps.google.com/?q=Santa+Felicidad,+29,+Madrid,+28017"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline text-gray-600"
                                >
                                    Santa Felicidad, 29, Madrid, 28017
                                </a>
                            </div>
                            <div className="flex items-center justify-start mt-2">
                                <Image
                                    src="/icons/mail.svg"
                                    alt="Correo"
                                    width={24}
                                    height={24}
                                    className="mr-2"
                                />
                                <a href="mailto:nuevaelipa@gmail.com" className="hover:underline text-gray-600">
                                    nuevaelipa@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center justify-start mt-2">
                                <Image
                                    src="/icons/phone.svg"
                                    alt="Teléfono"
                                    width={24}
                                    height={24}
                                    className="mr-2"
                                />
                                <a href="tel:+34722233425" className="hover:underline text-gray-600">
                                    +34 722 233 425
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Redes Sociales */}
                    <div className="w-full md:w-1/3 text-center">
                        <h2 className="text-lg font-semibold mb-2">Síguenos en redes</h2>
                        <div className="flex justify-center space-x-4">
                            <a href="https://www.facebook.com/LaNuevaElipa/?locale=es_ES" className="hover:underline">
                                <Image
                                    src="/icons/facebook.svg"
                                    alt="Facebook"
                                    width={24}
                                    height={24}
                                />
                            </a>
                            <a href="https://www.instagram.com/asociacion_la_nueva_elipa/?hl=es" className="hover:underline">
                                <Image
                                    src="/icons/instagram.svg"
                                    alt="Instagram"
                                    width={24}
                                    height={24}
                                />
                            </a>
                            <a href="https://wa.me/34722233425" className="hover:underline">
                                <Image
                                    src="/icons/whatsapp.svg"
                                    alt="WhatsApp"
                                    width={24}
                                    height={24}
                                />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Enlaces Legales */}
                <div className="mt-8 text-center text-sm text-gray-600">
                    <a href="/aviso-legal" className="hover:underline text-gray-600">
                        Aviso Legal
                    </a>
                    <span className="mx-2">|</span>
                    <a href="/politica-cookies" className="hover:underline text-gray-600">
                        Política de Cookies
                    </a>
                    <span className="mx-2">|</span>
                    <a href="/politica-privacidad" className="hover:underline text-gray-600">
                        Política de Privacidad
                    </a>
                </div>

                {/* Derechos Reservados */}
                <div className="mt-2 text-center text-sm text-gray-600">
                    &copy; {new Date().getFullYear()} Asociación Vecinal La Nueva Elipa. Todos los derechos reservados.
                </div>

                {/* Credito del Sitio */}
                <div className="mt-2 text-center text-sm text-gray-600">
                    Sitio creado y diseñado por 
                    <a href="#" className="hover:underline ml-2">
                        <Image
                            src="/logos/{RR}icon.svg"
                            alt="Logo del Creador"
                            width={24}
                            height={24}
                            className="inline-block"
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
