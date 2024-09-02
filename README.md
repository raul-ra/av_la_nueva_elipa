# Proyecto Asociación de Vecinos La Nueva Elipa

Este proyecto es parte del curso de Certificado de Profesionalidad Confección y Publicación de Páginas Web (IFCD0110). El objetivo principal es crear una página web funcional y moderna para la **Asociación de Vecinos La Nueva Elipa**, proporcionando una plataforma digital que refleje sus actividades, misiones y servicios a la comunidad.

## Tecnologías Utilizadas

### Node.js
Node.js es un entorno de ejecución de JavaScript que permite ejecutar código JavaScript en el lado del servidor. Es conocido por su eficiencia y escalabilidad, lo que lo convierte en una excelente opción para aplicaciones web modernas.  
**Ventajas:**
- Rápido rendimiento gracias a su motor V8.
- Gran comunidad y ecosistema de módulos.
- Asíncrono y orientado a eventos.

### npm (Node Package Manager)
npm es el gestor de paquetes de Node.js. Permite instalar y gestionar las dependencias necesarias para el desarrollo del proyecto, facilitando la integración de bibliotecas y herramientas adicionales.  
**Ventajas:**
- Gestión sencilla de dependencias.
- Amplio repositorio de paquetes y módulos.
- Integración directa con Node.js.

### Next.js
Next.js es un framework de React que permite crear aplicaciones web con renderizado del lado del servidor (SSR) y generación de sitios estáticos (SSG). Facilita el desarrollo de aplicaciones React con enrutado automático y optimizaciones de rendimiento.  
**Ventajas:**
- Renderizado híbrido (SSR y SSG).
- Enrutado basado en el sistema de archivos.
- Optimización automática de imágenes y código.

### Tailwind CSS
Tailwind CSS es un framework CSS que proporciona utilidades predefinidas para construir interfaces de usuario modernas y responsivas de manera rápida.  
**Ventajas:**
- Diseño altamente personalizable.
- Enfoque utilitario para escribir CSS.
- Fácil de aprender y usar con una curva de aprendizaje rápida.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

- **`src/app/`**: Contiene las páginas de la aplicación y se utiliza para el enrutamiento. Cada subcarpeta dentro de `app/` representa una ruta en la aplicación, y cada archivo `page.js` dentro de estas subcarpetas define la página correspondiente.
    - Por ejemplo, `src/app/avisolegalidad/page.js` se convierte en la ruta `/avisolegalidad`.
    - **`globals.css` y `layout.js`** en la carpeta `app/` proporcionan estilos globales y la estructura de diseño que se aplica a todas las páginas.
- **`src/components/`**: Contiene los componentes reutilizables de la aplicación, como `CookieConsentModal`, `Footer`, `Header`, etc.
    - **`footer`**: Contiene el archivo `footer.jsx` que define el componente de pie de página.
    - **`header`**: Contiene los archivos `index.jsx` y `menuData.jsx` que definen la cabecera y la estructura de menús.
    - **`underConstruction/`**: Contiene la página `page.jsx` que podría utilizarse para mostrar un mensaje de "En construcción".
- **`public/`**: Contiene recursos estáticos como imágenes, iconos y otros archivos públicos.
    - **`favicon/`**: Contiene iconos utilizados como favicon.
    - **`images/`**: Contiene imágenes utilizadas en la página, organizadas en subcarpetas como `icons` y `logos`.
- **Configuraciones del proyecto**:
    - **`next.config.mjs`**: Configuración de Next.js.
    - **`postcss.config.js` y `tailwind.config.js`**: Configuraciones para Tailwind CSS y PostCSS.
    - **`.eslintrc.json`**: Configuración para ESLint, que asegura la calidad del código.

## Instalación de Dependencias

### Requisitos Previos

Antes de comenzar, asegúrate de tener instalados Node.js y npm en tu sistema. Puedes verificar si están instalados ejecutando los siguientes comandos en tu terminal:

```bash
node -v
npm -v
```

Si no tienes Node.js y npm instalados, sigue los pasos a continuación:

### Instalación de Node.js y npm

1. **Windows/MacOS:**
   - Visita la [página oficial de Node.js](https://nodejs.org/) y descarga el instalador correspondiente a tu sistema operativo.
   - Sigue las instrucciones del instalador para completar la instalación. Node.js incluye npm por defecto.

2. **Linux:**
   - En distribuciones basadas en Debian/Ubuntu, ejecuta:
   
     ```bash
     sudo apt update
     sudo apt install nodejs npm
     ```

   - En distribuciones basadas en Red Hat/Fedora, ejecuta:

     ```bash
     sudo dnf install nodejs npm
     ```

### Instalación de Next.js y Tailwind CSS

1. **Instalar Next.js**:
   - Ejecuta el siguiente comando en la raíz de tu proyecto para instalar Next.js:
   
     ```bash
     npm install next react react-dom
     ```

2. **Instalar Tailwind CSS**:
   - Ejecuta el siguiente comando para instalar Tailwind CSS junto con sus dependencias:

     ```bash
     npm install -D tailwindcss postcss autoprefixer
     npx tailwindcss init -p
     ```

3. **Configurar Tailwind CSS**:
   - En el archivo `tailwind.config.js`, configura los paths para tus archivos:

     ```javascript
     module.exports = {
       content: [
         './src/app/**/*.{js,ts,jsx,tsx}',
         './src/components/**/*.{js,ts,jsx,tsx}',
       ],
       theme: {
         extend: {},
       },
       plugins: [],
     }
     ```

   - En tu archivo `./src/app/globals.css`, añade las siguientes líneas:

     ```css
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```

## Cómo Levantar el Proyecto

1. **Clonar el repositorio**:

   ```bash
   git clone https://github.com/raul-ra/av_la_nueva_elipa.git
   ```

2. **Navegar al directorio del proyecto**:

   ```bash
   cd av_la_nueva_elipa
   ```

3. **Instalar las dependencias**:

   ```bash
   npm install
   ```

4. **Levantar el servidor de desarrollo**:

   ```bash
   npm run dev
   ```

   Esto iniciará el servidor en modo desarrollo. Puedes acceder a la aplicación en tu navegador en `http://localhost:3000`.

## Enrutamiento en Next.js

En Next.js, utilizando la carpeta `app/`, las rutas se definen según la estructura de carpetas y archivos dentro de esta. Aquí te explico cómo se enrutan las páginas en base a la estructura del proyecto:

- **Ruta raíz (`/`)**: Corresponde al archivo `src/app/page.js`.
- **Ruta para "Aviso Legalidad" (`/avisolegalidad`)**: Corresponde a `src/app/avisolegalidad/page.js`.
- **Rutas adicionales**: Cada subcarpeta dentro de `src/app/` con un archivo `page.js` define una nueva ruta. Por ejemplo, `src/app/historiadelasociacion/page.js` se mapeará a `/historiadelasociacion`.

# Header Component

Este proyecto incluye un componente `Header` diseñado para funcionar tanto en dispositivos móviles como en la vista de escritorio. El header incluye un sistema de menús y submenús dinámicos que se abren mediante hover en escritorio y clic en dispositivos móviles. También cuenta con una lógica para cerrar los menús automáticamente después de 5 segundos de inactividad en escritorio.

## Funcionamiento General

### Estructura

El `Header` está estructurado en dos partes principales:

1. **Menú de Escritorio**: Visible cuando el ancho de la pantalla es mayor o igual a 1024px. Los menús y submenús se abren al pasar el ratón por encima y se cierran automáticamente si no hay interacción.
2. **Menú Móvil ("Hamburger Menu")**: Visible cuando el ancho de la pantalla es menor a 1024px. Los menús y submenús se abren y cierran mediante clics en los botones correspondientes.

### Lógica de Menús y Submenús

#### Escritorio

- Los menús se abren al pasar el ratón por encima de un elemento de menú principal que tenga submenús.
- Los submenús también se abren al hacer hover sobre el elemento correspondiente.
- Se ha implementado un temporizador que cierra el menú y los submenús después de 5 segundos sin interacción con ellos (es decir, cuando el ratón sale completamente del área de los menús).

#### Móvil

- El menú principal se alterna (abrir/cerrar) mediante un botón de "hamburguesa".
- Al hacer clic en un elemento de menú principal que tenga submenús, estos se despliegan.
- Los submenús también se pueden abrir y cerrar mediante clics.

### index.jsx

El archivo `index.jsx` implementa el `Header` utilizando los datos proporcionados por `menuData.jsx`. Este archivo maneja la lógica para la versión móvil y de escritorio del menú.

### `menuData.jsx`

El archivo `menuData.jsx` contiene la estructura de datos que define los menús y submenús utilizados en el `Header`. Es un archivo de configuración que organiza los títulos y enlaces de los menús.

```jsx
export const menuData = [
    {
        title: 'Inicio',
        link: '/', // Link correctamente definido
    },
    {
        title: 'Quienes Somos',
        subMenu: [
            { title: 'Historia de la Asociación', link: '/historia' },
            { title: 'Nuestra Misión', link: '/mision' },
            { title: 'Organigrama', link: '/organigrama' },
        ],
    },
    {
        title: 'Qué Hacemos',
        subMenu: [
            { title: 'Mediación', link: '/mediacion' },
            { title: 'Cursos y Talleres', link: '/cursos-talleres' },
            { title: 'Huerto Urbano', link: '/huerto-urbano' },
            { title: 'Grupo Scout Atreyu', link: '/grupo-scout' },
            { title: "Campamento de Verano 'El Escondite'", link: '/campamento' },
            {
                title: 'Espacio Comunitario',
                subMenu: [
                    { title: 'Grupo de Consumo Ecológico', link: '/grupo-consumo' },
                    { title: 'Grupo Felicidad', link: '/grupo-felicidad' },
                    { title: 'Club de Ajedrez', link: '/club-ajedrez' },
                ],
            },
            {
                title: 'Dinamización Social y Cultural',
                subMenu: [
                    { title: 'Elipa Rock', link: '/elipa-rock' },
                    { title: 'Cross Salvar el Pinar', link: '/cross-salvar' },
                    { title: 'Carrera Popular', link: '/carrera-popular' },
                ],
            },
        ],
    },
    {
        title: 'Hazte Socio',
        link: '/hazte-socio',
    },
];
```

Cada entrada del menú puede tener un `title`, un `link` y opcionalmente un `subMenu`, que a su vez puede tener más submenús anidados.

## Interacción con `menuData.jsx`

El `Header` importa el array `menuData` para renderizar los menús y submenús dinámicamente. Cada objeto del array representa un menú principal o un submenú, y los componentes del `Header` recorren este array para construir el menú visible en la interfaz de usuario.

Por ejemplo:
- Si un elemento en `menuData` tiene un `subMenu`, el `Header` renderizará ese elemento como un menú desplegable.
- Los submenús pueden contener enlaces adicionales que también se renderizan dinámicamente.

### Detección del Tipo de Dispositivo

Se usa `useState` y `useEffect` para determinar si el dispositivo es móvil o de escritorio, cambiando el comportamiento del menú en consecuencia.

### Control de Apertura y Cierre del Menú (Versión Móvil)

- **`toggleMenu`**: Alterna entre abrir y cerrar el menú principal cuando se hace clic en el botón de "hamburguesa".
- **`toggleSubMenu`**: Abre o cierra un submenú específico cuando se hace clic en un elemento de menú principal.
- **`toggleSubSubMenu`**: Abre o cierra los sub-submenús anidados dentro de un submenú.

### Control de Apertura y Cierre del Menú (Versión Escritorio)

- **`handleMouseEnterMenu`** y **`handleMouseLeaveMenu`**: Abren y cierran los menús principales cuando el ratón pasa por encima o sale de un elemento del menú.
- **`handleMouseEnterSubMenu`** y **`handleMouseLeaveSubMenu`**: Manejan el comportamiento de los submenús de la misma manera que los menús principales.

### Transiciones y Animaciones

- Cuando el menú móvil se abre, el segundo logo (`logoAvLaNuevaElipaBlack.svg`) se reemplaza por un logo más pequeño (`avLaNuevaElipaShortBlack.svg`) para acomodar el espacio adicional ocupado por el menú.
- Las transiciones entre estos dos logos se manejan utilizando `className` y estilos CSS como `transition-transform`.

### Tiempo de Espera para Cerrar Menús

En la versión de escritorio, se implementa un temporizador (mediante `setTimeout`) que espera unos 200 milisegundos antes de cerrar los menús para evitar cierres inesperados, garantizando una experiencia de usuario fluida.


# Componente UnderConstruction

El componente `UnderConstruction` es un componente de React reutilizable diseñado para mostrar un mensaje de "Página en Construcción". Cuenta con un icono animado opcional, un título de página personalizable y un mensaje amigable para informar a los usuarios que la página a la que intentan acceder aún no está disponible.

## Características

- Muestra un mensaje de "Página en Construcción" con un título de página personalizable.
- Incluye una animación opcional de Lottie para retroalimentación visual.
- Simple y fácil de integrar en cualquier proyecto de Next.js.
- Componente totalmente del lado del cliente, aprovechando los hooks de React como `useState` y `useEffect`.

## Instalación

1. Asegúrate de tener `react-lottie` instalado en tu proyecto. Si no es así, instálalo usando npm o yarn:

   ```bash
   npm install react-lottie
   ```

   o

   ```bash
   yarn add react-lottie
   ```

2. Coloca el componente `UnderConstruction` en el directorio apropiado dentro de tu proyecto:

   ```plaintext
   src/
   └── components/
       └── underConstruccion/
           └── page.jsx
   ```

3. Añade el archivo de animación Lottie `workinprogress.json` a tu directorio `public/icons/`:

   ```plaintext
   public/
   └── icons/
       └── workinprogress.json
   ```

## Uso

Para usar el componente `UnderConstruction` en una página, simplemente impórtalo y pasa la prop `pageName` para personalizar el título mostrado:

```javascript
import UnderConstruction from "../../components/underConstruccion/page";

export default function HistoriaDeLaAsociacion() {
    return <UnderConstruction pageName="Historia de la Asociación" />;
}
```

### Props

- `pageName` (string): El nombre de la página que se va a mostrar. Esta prop es obligatoria.

## Ejemplo

```javascript
import UnderConstruction from "../../components/underConstruccion/page";

export default function HuertoUrbano() {
    return <UnderConstruction pageName="Huerto Urbano" />;
}
```

En este ejemplo, el componente `UnderConstruction` mostrará un mensaje de "Página en Construcción" con el título "Huerto Urbano" y un icono animado.

## Personalización

### Estilo CSS

El componente está estilizado usando estilos en línea. Si deseas personalizar los estilos, puedes modificar los objetos `style` dentro del componente o aplicar clases CSS externas.

### Animación de Lottie

El componente utiliza el paquete `react-lottie` para renderizar la animación. Puedes reemplazar el archivo `workinprogress.json` con cualquier otro archivo JSON de Lottie para personalizar la animación mostrada.

## Solución de Problemas

### Problemas Comunes

1. **El Componente No se Renderiza:**
   - Asegúrate de que el componente `UnderConstruction` esté importado correctamente y que la ruta del archivo sea precisa.
   - Asegúrate de que la directiva `use client`; esté presente en la parte superior del archivo del componente para garantizar que se ejecute del lado del cliente.

2. **La Animación de Lottie No se Carga:**
   - Verifica que el archivo `workinprogress.json` esté presente en el directorio `public/icons/`.
   - Asegúrate de que la URL de `fetch` en el hook `useEffect` sea correcta.


# Componente CookieConsentModal

El componente `CookieConsentModal` es una implementación en React que muestra un aviso modal para que los usuarios acepten o rechacen el uso de cookies en el sitio web. Este componente está diseñado para ser utilizado en proyectos desarrollados con Next.js y Tailwind CSS.

## Propósito

El propósito del componente `CookieConsentModal` es cumplir con las normativas de privacidad y protección de datos, proporcionando a los usuarios la opción de aceptar o rechazar las cookies utilizadas en el sitio web. Este componente se muestra automáticamente cuando el usuario visita el sitio por primera vez o si no ha aceptado previamente las cookies.

## Características

- **Modal de Consentimiento**: Muestra una ventana modal cuando el usuario visita el sitio por primera vez y no ha dado su consentimiento para el uso de cookies.
- **Almacenamiento en LocalStorage**: El estado de consentimiento se almacena en `localStorage` para recordar la elección del usuario en visitas posteriores.
- **Botón de Aceptar**: Permite al usuario aceptar el uso de cookies.
- **Botón de Cancelar**: Permite al usuario rechazar el uso de cookies.
- **Enlace a Política de Cookies**: Incluye un enlace para que el usuario pueda leer la política de cookies completa.

## Uso

### Instalación

Primero, asegúrate de tener el entorno de desarrollo configurado con `Next.js` y `Tailwind CSS`.

### Integración en el Proyecto

1. **Crear el Componente**

   Crea un archivo `CookieConsentModal.jsx` en el directorio `components/cookieModal/` y añade el siguiente código:

   ```jsx
   "use client";

   import { useState, useEffect } from 'react';

   const CookieConsentModal = () => {
       const [isOpen, setIsOpen] = useState(false);

       useEffect(() => {
           const cookieConsent = localStorage.getItem('cookieConsent');
           if (!cookieConsent) {
               setIsOpen(true);
           }
       }, []);

       const handleAccept = () => {
           localStorage.setItem('cookieConsent', 'true');
           setIsOpen(false);
       };

       const handleDecline = () => {
           localStorage.setItem('cookieConsent', 'false');
           setIsOpen(false);
       };

       if (!isOpen) return null;

       return (
           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
               <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
                   <h2 className="text-xl font-semibold mb-4 text-black">Usamos cookies</h2>
                   <p className="mb-4 text-gray-800">
                       Este sitio web utiliza cookies para mejorar la experiencia del usuario. Para más información, por favor visita nuestra 
                       <a href="/politica-de-cookies" className="text-teal hover:underline ml-1">
                           Política de Cookies
                       </a>.
                   </p>
                   <div className="flex justify-end space-x-4">
                       <button
                           onClick={handleDecline}
                           className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 focus:outline-none"
                       >
                           Cancelar
                       </button>
                       <button
                           onClick={handleAccept}
                           className="bg-teal text-white px-4 py-2 rounded-lg hover:bg-teal-600 focus:outline-none"
                       >
                           Aceptar
                       </button>
                   </div>
               </div>
           </div>
       );
   };

   export default CookieConsentModal;
```

2 **Integrar el Componente en el Layout Principal**

```jsx
import CookieConsentModal from '../components/cookieModal/CookieConsentModal';

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <head></head>
            <body className="bg-white">
                <Header />
                <CookieConsentModal />
                <main>{children}</main>
            </body>
        </html>
    );
}
```

### Personalización

Puedes personalizar los estilos y el contenido de la modal ajustando las clases de Tailwind CSS o el texto dentro del componente CookieConsentModal.

- **Estilos**: Los estilos están basados en Tailwind CSS, lo que facilita su personalización cambiando las clases dentro del componente.
- **Texto y Enlaces**: Puedes modificar el texto y los enlaces, como la URL de la política de cookies, para que se ajusten a tu proyecto.

# Footer 

Este proyecto incluye un componente `Footer` diseñado para proporcionar la información de contacto, enlaces legales y accesos a redes sociales de la **Asociación Vecinal La Nueva Elipa**. El footer está optimizado tanto para dispositivos móviles como para escritorio.

## Funcionamiento General

### Estructura

El `Footer` está estructurado en tres partes principales:

1. **Logos**: Se muestran los logos de la asociación.
2. **Información de Contacto**: Se proporciona la dirección, correo electrónico y teléfono de la asociación con enlaces interactivos.
3. **Redes Sociales**: Enlaces a las redes sociales de la asociación.

### Funcionamiento de los Enlaces

- **Dirección**: El enlace de la dirección está configurado para abrir Google Maps. En dispositivos móviles, al hacer clic en la dirección, se abrirá la aplicación de Google Maps.
- **Correo Electrónico**: El enlace de correo electrónico utiliza el protocolo `mailto:`. En dispositivos móviles, esto abrirá la aplicación de correo predeterminada del usuario.
- **Teléfono**: El enlace de teléfono utiliza el protocolo `tel:`. Al hacer clic en el número de teléfono en dispositivos móviles, se abrirá la aplicación de llamadas.
- **WhatsApp**: El enlace de WhatsApp abre una conversación directa con el número de la asociación en la aplicación de WhatsApp.

- **Dirección**:
  ```jsx
  <a
      href="https://maps.google.com/?q=Santa+Felicidad,+29,+Madrid,+28017"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline text-gray-600"
  >
      Santa Felicidad, 29, Madrid, 28017
  </a>
  ```

Este enlace abrirá Google Maps directamente cuando se accede desde un dispositivo móvil.

- **Correo Electrónico**:

```jsx
<a href="mailto:nuevaelipa@gmail.com" className="hover:underline text-gray-600">
    nuevaelipa@gmail.com
</a>
```

Al hacer clic en este enlace, se abrirá la aplicación de correo electrónico predeterminada del usuario.

- **Teléfono**:
```jsx
<a href="tel:+34722233425" className="hover:underline text-gray-600">
    +34 722 233 425
</a>
```
Este enlace está diseñado para abrir la aplicación de llamadas en dispositivos móviles.


### Implementación

El componente `Footer` está implementado utilizando React y Tailwind CSS para estilos rápidos y responsivos. Aquí se detallan algunas de las implementaciones clave:


### Optimización de Estilos en CSS

Se realizaron ajustes en el archivo `globals.css` para mejorar la presentación y la responsividad del `Footer`. Los cambios incluyen:

- **Sombra en la Parte Superior del Footer**: Se agregó una sombra superior para separar visualmente el footer del resto del contenido.

```css
.shadow-footer-top {
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.1);
}
```
- **Alineación y Centrado del Contenido**: Se ajustó la alineación de los textos y elementos dentro del footer para que se centren en su contenedor, pero el contenido como la información de contacto se mantiene alineado a la izquierda en dispositivos móviles.
- **Medias Queries**: Se implementaron `media queries` para asegurar que el diseño del footer se adapte correctamente a diferentes tamaños de pantalla, asegurando que los elementos se dispongan en una sola columna en dispositivos móviles.
  
```css
/* Ajustes específicos para el contenido de contacto en vista móvil */
@media (max-width: 768px) {
  footer .flex.items-center {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
}
```

## Créditos
El footer también incluye un enlace para el crédito del sitio, que muestra un ícono y un enlace a la página del creador.

```jsx
<div className="mt-2 text-center text-sm text-gray-600">
    Sitio creado y diseñado por 
    <a href="#" className="hover:underline">
        <Image
            src="/logos/{RR}icon.svg"
            alt="Logo del Creador"
            width={24}
            height={24}
            className="inline-block ml-2"
        />
    </a>
```
