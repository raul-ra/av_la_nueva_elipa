import React from 'react';
import { Montserrat } from 'next/font/google';
import "./globals.css";

// Importa la fuente Montserrat de Google Fonts
const montserrat = Montserrat({ subsets: ["latin"] });

// Metadatos optimizados para SEO local
export const metadata = {
  title: 'Asociación de Vecinos La Nueva Elipa - ¡Salvemos EL Pinar!',
  description: 'La Asociación de Vecinos La Nueva Elipa, ubicada en Calle de Sta Felicidad, 29, posterior, Ciudad Lineal, 28017 Madrid, trabaja activamente en mejorar la calidad de vida de los vecinos y proteger el Parque Pinar de la Elipa con su campaña "Salvemos el Pinar". Defendemos la sanidad pública, promovemos la solidaridad y apoyamos la conservación de espacios naturales en La Elipa y Ciudad Lineal.',
  keywords: 'Asociación de Vecinos La Nueva Elipa, La Elipa, Ciudad Lineal, 28017, Parque Pinar de la Elipa, Salvemos el Pinar, conservación, actividades culturales, sanidad pública, talleres, solidaridad, eventos comunitarios, apoyo social, Madrid',
  authors: [{ name: 'Asociación de Vecinos La Nueva Elipa', url: 'https://www.laelipa.es' }],
  icons: {
    icon: './favicon/favicon.ico',
  },
  openGraph: {
    title: 'Asociación de Vecinos La Nueva Elipa - Protegiendo el Parque Pinar de la Elipa y Mejorando La Elipa (28017)',
    description: 'Únete a la Asociación de Vecinos La Nueva Elipa en Ciudad Lineal, 28017 Madrid. Participa en actividades sociales, culturales y en la campaña "Salvemos el Pinar" para proteger el Parque Pinar de la Elipa.',
    url: 'https://www.laelipa.es',
    siteName: 'Asociación de Vecinos La Nueva Elipa',
    images: [
      {
        url: './images/la-elipa-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Asociación de Vecinos La Nueva Elipa - Banner',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Asociación de Vecinos La Nueva Elipa - Salvemos el Pinar y Mejorando La Elipa (28017)',
    description: 'Contribuye al bienestar de La Elipa y Ciudad Lineal, y ayuda a proteger el Parque Pinar de la Elipa con la Asociación de Vecinos La Nueva Elipa y su campaña "Salvemos el Pinar".',
    images: ['./images/la-elipa-banner.jpg'],
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+34 722 23 34 25',
    contactType: 'Customer Service',
    areaServed: 'ES',
    availableLanguage: ['Spanish'],
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Calle de Sta Felicidad, 29, posterior',
    addressLocality: 'Ciudad Lineal',
    postalCode: '28017',
    addressRegion: 'Madrid',
    addressCountry: 'ES',
  },
};

import PropTypes from 'prop-types';

export default function RootLayout({ children }) {
  RootLayout.propTypes = {
    children: PropTypes.node.isRequired,
  };
  return (
    <html lang="es">
      <head>
        {/* Aquí podrían ir otros metadatos específicos si es necesario */}
      </head>
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}
