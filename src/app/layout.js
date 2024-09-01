import React from 'react';
import "./globals.css";
import Header from '../components/header'; // Importar el Header
import CookieConsentModal from '../components/CookieConsentModal/CookieConsentModal'; // Importar la Modal de Cookies
import Footer from '../components/footer/footer'; // Importa el componente Footer
import { Montserrat } from 'next/font/google'; // Importar la fuente Montserrat

// Asignamos la fuente Montserrat a una constante en el ámbito del módulo
const montserrat = Montserrat({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Puedes añadir más metadatos aquí si es necesario */}
      </head>
      <body className={`${montserrat.className} bg-white`}>

          {/* Incluimos el Header */}
          <Header />
          
          {/* Modal de Aceptación de Cookies */}
          <CookieConsentModal />

          {/* Contenido principal */}
          <main>{children}</main>

          {/* Incluimos el footer */}
          <Footer />
      </body>
    </html>
  );
}
