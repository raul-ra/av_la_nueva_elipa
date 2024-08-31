import React from 'react';
import "./globals.css";
import { ThemeProvider } from 'next-themes'; // Importar ThemeProvider para manejo de temas
import Header from '../components/header'; // Importar el Header
import CookieConsentModal from '../components/CookieConsentModal/CookieConsentModal'; // Importar la Modal de Cookies
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
        {/* Envolvemos todo en el ThemeProvider para el cambio de tema */}
        <ThemeProvider attribute="class">
          {/* Incluimos el Header */}
          <Header />
          
          {/* Modal de Aceptación de Cookies */}
          <CookieConsentModal />

          {/* Contenido principal */}
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
