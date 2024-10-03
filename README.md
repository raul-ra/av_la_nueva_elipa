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
  

## Ramas de Git

En este proyecto, la rama principal es **main**, pero dado que el desarrollo sigue activo, aún no se ha hecho un merge a esta rama. Cada una de las ramas se ha creado con el objetivo de desarrollar o modificar diferentes componentes del proyecto. Las correcciones urgentes se deben gestionar a través de ramas **hotfix**, asegurando que cualquier cambio crítico se maneje de manera independiente de las funcionalidades en desarrollo.

### Ramas Principales:
- **main**: La rama principal. No se ha mergeado aún debido a que el proyecto sigue en desarrollo activo.
- **dev**: Es la rama de desarrollo principal desde donde se hacen los merges al resto de ramas para realizar cambios y ajustes.
- **cursosytalleres**: Rama dedicada al componente de los cursos y talleres.
- **ctacomponents**: Rama para los componentes del **Call To Action**.
- **hartesocio**: Rama enfocada en el desarrollo del área de socios de la asociación.
- **footer**: Rama donde se ha trabajado en el pie de página del sitio.

## Proceso de Deploy en Netlify

El proyecto utiliza **Netlify** para el despliegue continuo desde la rama **dev**. https://avlanuevaelipa.netlify.app/

A continuación se explica el proceso completo para hacer el deploy desde esta rama:

### 1. Configuración de Continuous Deployment
El sitio está vinculado a un repositorio de GitHub, lo que permite un despliegue continuo a través de Netlify cada vez que se actualiza la rama **dev**.

### 2. Configuración del entorno de construcción
- **Framework**: Next.js
- **Base directory**: `/`
- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Functions directory**: `netlify/functions`

### 3. Despliegue Automático
- La rama de producción está configurada como **dev**, lo que significa que cualquier cambio hecho en esta rama desencadena automáticamente un proceso de construcción y despliegue en Netlify.
- Las ramas de desarrollo adicionales están disponibles para realizar pruebas, pero cualquier cambio en **dev** es el que activa el despliegue.

### 4. Node.js y dependencias
- El proyecto usa Node.js en su versión 18.x para garantizar la compatibilidad con las librerías y dependencias que el proyecto necesita.

### 5. Previsualización y colaboraciones
- Netlify permite a los colaboradores del proyecto revisar los cambios en un entorno de previsualización antes de que estos se lleven a la producción.
- Se pueden realizar comentarios, crear issues o anotar capturas directamente desde el entorno de previsualización para facilitar la colaboración.

### 6. Configuración de hooks y triggers
- El despliegue puede ser activado manualmente a través de **build hooks**, lo cual facilita la posibilidad de forzar un despliegue sin necesidad de realizar un commit en el repositorio de Git.

### 7. Mantenimiento del entorno
- El entorno de producción se mantiene automáticamente activo con los últimos cambios de la rama **dev**, mientras que los despliegues antiguos son eliminados después de 90 días para optimizar el uso de los recursos.

### Consideraciones adicionales
- Las modificaciones mayores o las correcciones urgentes se deben hacer en ramas **hotfix**, y luego integrarse a **dev** para asegurar que los cambios sean efectivos en el despliegue.
  
Este flujo de trabajo garantiza que el desarrollo del sitio web para la Asociación de Vecinos La Nueva Elipa sea seguro y eficiente, asegurando que las mejoras y correcciones se implementen de manera controlada mientras el proyecto sigue en desarrollo activo.

## Funcionamiento General

### Estructura

# Header Component

El componente `Header` esta diseñado para funcionar tanto en dispositivos móviles como en la vista de escritorio. El header incluye un sistema de menús y submenús dinámicos que se abren mediante hover en escritorio y clic en dispositivos móviles. También cuenta con una lógica para cerrar los menús automáticamente después de 5 segundos de inactividad en escritorio.


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
# Hazte Socio

Este proyecto incluye un formulario diseñado para que los usuarios puedan hacerse socios de la **Asociación Vecinal La Nueva Elipa**. El formulario recoge los datos personales del usuario y valida la información antes de ser enviada a través del servicio de **Formspree**. También cuenta con un sistema para evitar inyecciones XSS.

## Funcionamiento General

### Estructura

El formulario de "Hazte Socio" está estructurado en varias secciones principales:

1. **Datos Personales**: Campos para el nombre, apellidos, correo electrónico, teléfono y dirección del usuario.
2. **Colaboración**: Un campo donde el usuario puede expresar sus intereses y cómo le gustaría participar.
3. **Opción de Hacerse Socio/a**: Pregunta para determinar si el usuario desea hacerse socio y la forma de pago.
4. **Modal de Confirmación**: Una modal que aparece al enviar correctamente el formulario, mostrando un mensaje de éxito.

### Validaciones

El formulario implementa validaciones básicas para garantizar que los campos requeridos sean completados correctamente antes de enviar la información.

- **Nombre**: El campo nombre es obligatorio.
- **Apellidos**: El campo apellidos es obligatorio.
- **Correo Electrónico**: Se utiliza una expresión regular (`emailPattern`) para validar que el formato del correo sea correcto.
- **Teléfono**: Se utiliza una expresión regular (`phonePattern`) para validar que el teléfono tenga entre 9 y 10 dígitos.
- **Dirección**: El campo dirección es obligatorio.

Las validaciones solo se muestran al usuario si intenta enviar el formulario sin cumplir con los requisitos. Los mensajes de error se muestran en color rojo mediante la clase `text-red-500` de Tailwind CSS.

### Función para Limpiar el Input y Evitar Inyecciones XSS

Para prevenir inyecciones XSS (Cross-Site Scripting), se utiliza una función de sanitización (`sanitizeInput`). Esta función reemplaza los caracteres peligrosos como `<`, `>`, `"`, `'`, `&` y `/` en los inputs del formulario.

```js
function sanitizeInput(input) {
    return input.replace(/[<>"'&/]/g, ""); // Elimina caracteres peligrosos para XSS
}
```
### Modal de Confirmación
Cuando el formulario se envía correctamente, se muestra una modal que notifica al usuario que la información ha sido enviada con éxito. La modal incluye un botón de "Aceptar" con el mismo estilo que el botón de enviar. Al hacer clic en el botón, la modal se cierra y el formulario se envía a Formspree.

```js
{isModalOpen && (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-4">¡Enhorabuena!</h2>
            <p className="mb-4">Tu formulario ha sido enviado con éxito. Gracias por unirte a la Asociación del Barrio. ¡Nos pondremos en contacto contigo muy pronto!</p>
            <button
                onClick={handleAccept}
                className="bg-[#60c6b4] text-white rounded-lg px-4 py-2 mt-4 transition transform active:scale-95 active:bg-[#4da594] focus:outline-none"
            >
                Aceptar
            </button>
        </div>
    </div>
)}
```

### Envío del Formulario a través de Formspree
El formulario está configurado para ser enviado a través de Formspree, un servicio que permite enviar formularios HTML sin necesidad de un servidor backend propio.

Implementación de Formspree
En el atributo action del formulario se especifica la URL proporcionada por Formspree para manejar los envíos:


```js
<form action="https://formspree.io/f/tu-identificador" method="POST" onSubmit={handleSubmit}>

```
Al hacer clic en el botón "Enviar", si todas las validaciones son correctas, se muestra la modal y, tras su confirmación, se realiza el envío del formulario a la URL de Formspree.

### Configuración de Formspree

Para configurar **Formspree** y enviar un formulario de HTML o React sin necesidad de un backend propio, sigue estos pasos:

## 1. Crear una cuenta en Formspree

1. Ve a [Formspree](https://formspree.io/) y crea una cuenta.
2. Inicia sesión en tu cuenta y crea un nuevo formulario.

## 2. Obtener la URL de Formspree

1. Una vez que hayas creado un formulario en el panel de control de Formspree, te proporcionarán una URL única para tu formulario.
2. La URL tendrá un formato similar a:
```js
https://formspree.io/f/tu-identificador
```
## 3. Configurar el Formulario en HTML o React

En el formulario de HTML o Next, utiliza el atributo `action` para establecer la URL que obtuviste de Formspree. El formulario se enviará a esta URL cuando el usuario haga clic en "Enviar".

### Ejemplo en HTML:

```html
<form action="https://formspree.io/f/tu-identificador" method="POST">
 <label for="name">Nombre:</label>
 <input type="text" name="name" id="name" required>
 
 <label for="email">Correo Electrónico:</label>
 <input type="email" name="email" id="email" required>
 
 <button type="submit">Enviar</button>
</form>

```next
<form action="https://formspree.io/f/tu-identificador" method="POST">
    <input type="text" name="name" placeholder="Nombre" required />
    <input type="email" name="email" placeholder="Correo Electrónico" required />
    <button type="submit">Enviar</button>
</form>
```
## 4. Personalizar Campos del Formulario
Puedes añadir más campos a tu formulario si es necesario, como campos de teléfono, dirección, etc. Todos los campos con el atributo name serán enviados a Formspree.

Ejemplo con más campos:
```next
<form action="https://formspree.io/f/tu-identificador" method="POST">
    <input type="text" name="name" placeholder="Nombre" required />
    <input type="email" name="email" placeholder="Correo Electrónico" required />
    <input type="tel" name="phone" placeholder="Teléfono" required />
    <textarea name="message" placeholder="Mensaje" required></textarea>
    <button type="submit">Enviar</button>
</form>
```
## 5. Prueba del Formulario
Abre tu formulario en el navegador.
Completa los campos y haz clic en "Enviar".
Recibirás un correo electrónico en la dirección que configuraste en tu cuenta de Formspree cuando alguien complete el formulario.

### Envío del formulario a través de Formspree sin redirección

Para mejorar la experiencia del usuario y dar una sensación más profesional a la página, se ha implementado el envío del formulario de manera asíncrona utilizando `fetch`. Este enfoque evita la redirección a la página de confirmación de Formspree, permitiendo que el usuario se quede en la misma página tras enviar el formulario.

El flujo es el siguiente:

1. **Validación de campos**: Antes de enviar el formulario, se realiza una validación de los datos ingresados por el usuario para asegurarse de que están completos y en el formato adecuado.
2. **Envío asíncrono con fetch**: Si los datos son válidos, se envían de manera asíncrona a Formspree utilizando `fetch`, enviando una solicitud `POST` con los datos del formulario.
3. **Sin redirección**: A diferencia del comportamiento estándar de Formspree, el usuario no es redirigido a la página de confirmación. En su lugar, permanece en la misma página.
4. **Modal de confirmación**: Al enviarse correctamente el formulario, se muestra una modal con un mensaje positivo que confirma que el formulario ha sido enviado con éxito, dando una sensación más fluida y profesional al usuario.

Esta implementación mejora la experiencia del usuario al evitar cambios abruptos de página, haciendo que el proceso sea más fluido y menos disruptivo.

# Componentes CTA

Una CTA (Call To Action) es un elemento clave en cualquier página web o aplicación cuyo propósito es atraer la atención de los usuarios hacia una acción específica. En este proyecto, se han implementado dos componentes CTA: `ctaSocio` y `ctaInformacion`, ambos con la finalidad de alentar a los usuarios a unirse o colaborar con la Asociación Vecinal La Nueva Elipa o solicitar más información sobre temas específicos.

## Partes Comunes de los Componentes

1. **Botón de CTA**: Ambos componentes tienen un botón que abre una ventana modal cuando el usuario hace clic. El botón en `ctaSocio` dice "¿Quieres colaborar con la Asociación del Barrio?" y en `ctaInformacion` dice "Necesito más información". Estos botones están estilizados y utilizan animaciones de escala para mejorar la experiencia del usuario.

2. **Modal**: Al hacer clic en el botón, se abre una ventana modal centrada en la pantalla que contiene un formulario. La modal se puede cerrar haciendo clic en la "X" situada en la esquina superior derecha o tras enviar el formulario exitosamente.

3. **Sanitización de los datos**: Ambos formularios emplean la función `sanitizeInput` para limpiar los datos introducidos por los usuarios y evitar la inyección de código malicioso (XSS).

4. **Validaciones**: Ambos componentes realizan validaciones en los formularios para asegurar que los datos sean correctos antes de enviarlos. Las validaciones incluyen:

   - Verificar que los campos obligatorios estén completados.
   - Que el formato del correo electrónico sea válido.
   - Que el número de teléfono contenga entre 9 y 10 dígitos.

5. **Prevención de envíos duplicados**: En ambos componentes, si los mismos nombres y apellidos ya han sido enviados, no se permite volver a enviar el formulario para evitar spam o saturación de formularios. Se muestra una modal de alerta en caso de detección de envío duplicado.

6. **Envío del formulario a Formspree**: Ambos formularios se envían a través de Formspree utilizando la API de `fetch`. Dependiendo de las elecciones del usuario, se personaliza el contenido del formulario enviado a Formspree.

7. **Modal de éxito**: Si el formulario se envía correctamente, se muestra una modal de éxito con un mensaje que informa al usuario de que su solicitud ha sido enviada correctamente. Esta modal contiene un botón de "Aceptar" para cerrar la ventana.

8. **Enlaces a redes sociales**: En ambos componentes, los enlaces a las redes sociales están diseñados para abrirse en una nueva pestaña o ventana al hacer clic, sin cerrar la modal principal. Para ello, se utiliza el atributo `target="_blank"` y `rel="noopener noreferrer"` en los enlaces. Esto es una práctica recomendada para evitar vulnerabilidades de seguridad al abrir enlaces externos y para prevenir la pérdida de datos en el formulario.

## CTA Socio

### Funcionalidades específicas de CTA Socio

1. **Formulario de afiliación o donación**:

   - El formulario tiene un campo que pregunta al usuario si desea hacerse socio o no, mediante dos opciones: "Sí" o "No".
   - Si el usuario selecciona "Sí", aparecen campos adicionales para que elija su método de pago (Asociación Vecinal o Transferencia Bancaria).
   - Si el usuario selecciona "No", se le ofrece la posibilidad de realizar una donación voluntaria.

2. **Campo de intereses**:

   - Si el usuario selecciona que desea hacerse socio, el campo `interests` se llena automáticamente con "Afiliación/Suscripción".
   - Si el usuario opta por no hacerse socio, el campo `interests` se llena con "Posible Donación".

3. **Validaciones adicionales**:

   - Se verifica que el usuario haya seleccionado un método de pago si ha optado por afiliarse.
   - Los mensajes de error se muestran en color rojo debajo de los campos que necesitan corrección.

4. **Prevención de envíos duplicados**:

   - Se utiliza el `localStorage` para almacenar los nombres y apellidos de los usuarios que han enviado el formulario.
   - Si se detecta que el usuario intenta enviar el formulario nuevamente con los mismos datos, se muestra una modal de alerta informando que ya ha enviado una solicitud.

5. **Modal de éxito personalizada**:

   - Una vez que se envía el formulario correctamente, el usuario ve una modal de éxito que le informa que se ha afiliado a la asociación con éxito o que se ha registrado su intención de donar.

6. **Envío del formulario a Formspree**:

   - El formulario se envía a través de Formspree utilizando la API de `fetch`.
   - Dependiendo de la opción seleccionada por el usuario, el campo `interests` se ajusta para indicar si se trata de una afiliación o una donación.

## CTA Información

### Funcionalidades específicas de CTA Información

1. **Formulario de solicitud de información**:

   - Incluye un desplegable que permite al usuario seleccionar el tema sobre el que desea obtener información.
   - Los temas disponibles son: "Mediación", "Cursos y Talleres", "Huerto Urbano", "Grupo Scout Atreyu", "Campamento de Verano 'El Escondite'", "Grupo de Consumo Ecológico", "Grupo Felicidad", "Club de Ajedrez", "Elipa Rock", "Cross Salvar el Pinar" y "Carrera Popular".

2. **Campo de consulta**:

   - El formulario incluye un campo de texto donde los usuarios pueden escribir su consulta con un límite de 500 caracteres.

3. **Validaciones adicionales**:

   - Se verifica que el usuario seleccione un tema de interés y complete el campo de consulta.
   - Los mensajes de error se muestran en color rojo debajo de los campos que necesitan corrección.

4. **Prevención de envíos duplicados**:

   - Se utiliza un estado interno para almacenar los nombres y apellidos de los usuarios que han enviado el formulario.
   - Si se detecta que el usuario intenta enviar el formulario nuevamente con los mismos datos, se muestra una modal de alerta informando que ya ha enviado una solicitud.

5. **Modal de éxito personalizada**:

   - Cuando el formulario se envía correctamente, se muestra una modal que informa al usuario de que su solicitud de información ha sido enviada.
   - Se proporciona el correo electrónico de contacto de la Asociación (`nuevaelipa@gmail.com`) y enlaces a sus redes sociales.

6. **Enlaces a redes sociales**:

   - Los enlaces a redes sociales están centrados en la modal y se abren en una nueva pestaña o ventana al hacer clic, sin cerrar la modal principal.
   - Se utiliza `target="_blank"` y `rel="noopener noreferrer"` en los enlaces para mejorar la seguridad y evitar la pérdida de datos.

7. **Envío del formulario a Formspree**:

   - El formulario se envía a través de Formspree utilizando la API de `fetch`, incluyendo el campo `interests` con el tema seleccionado por el usuario.

## Medidas de Seguridad Implementadas

1. **Sanitización de Datos**:

   - Se utiliza la función `sanitizeInput` para eliminar caracteres peligrosos y prevenir ataques de inyección de código (XSS).

2. **Validaciones Estrictas**:

   - Todos los campos obligatorios son validados antes de permitir el envío del formulario.

3. **Prevención de Envíos Duplicados**:

   - Se implementa una lógica que verifica si el usuario ya ha enviado un formulario con los mismos nombres y apellidos, mostrando una modal de alerta en caso afirmativo.

4. **Enlaces Externos Seguros**:

   - Los enlaces a redes sociales utilizan `target="_blank"` y `rel="noopener noreferrer"` para abrir en nuevas pestañas y evitar vulnerabilidades de seguridad al abrir enlaces externos.
   - Esto también previene la pérdida de datos en el formulario si el usuario decide visitar las redes sociales sin cerrar la modal.

## Uso de los Componentes

Ambos componentes se exportan como componentes funcionales de React y se pueden importar y usar en cualquier página donde sean necesarios.

### Ejemplo de Importación y Uso

```jsx
import React from 'react';
import CTASocio from './components/ctaSocio/ctaSocio';
import CTAInformacion from './components/ctaInformacion/ctaInformacion';

function HomePage() {
  return (
    <div>
      {/* Otros componentes de la página */}
      <CTASocio />
      <CTAInformacion />
    </div>
  );
}

export default HomePage;
```

# Componente CardWorkshop

El componente `CardWorkshop` está diseñado para mostrar información sobre talleres en un formato de tarjeta visualmente atractivo. Cada tarjeta contiene una imagen representativa del taller, un título, una descripción y un botón para interactuar (por ejemplo, para solicitar más información).

## Características

- **Diseño responsive**: Las tarjetas se muestran en un formato de cuadrícula que se adapta al tamaño de la pantalla. En pantallas grandes se muestran 5 tarjetas por fila, y en dispositivos móviles se muestran 2 tarjetas por fila.
- **Título centrado**: Cada tarjeta presenta un título centrado para mejorar la legibilidad y la consistencia visual.
- **Descripción justificada**: La descripción está justificada, asegurando que el texto se vea limpio y alineado.
- **Botón de información alineado**: El botón "Quiero más información" está alineado en todas las tarjetas a la misma altura para un aspecto uniforme.

## Funcionamiento

### Estructura

El componente recibe una lista de talleres, cada uno con las siguientes propiedades:
- `title`: El nombre del taller.
- `description`: Una breve descripción del taller.
- `image`: La URL de la imagen que representa visualmente el taller.

### Ejemplo de datos de talleres

```javascript
const workshops = [
  {
    title: 'Yoga',
    description: 'El yoga es una disciplina que une cuerpo, mente y alma. Mejora la flexibilidad, fortalece huesos y músculos, alivia dolores posturales y reduce la ansiedad y el estrés.',
    image: '/images/Yoga.png',
  },
  {
    title: 'Flamenco',
    description: 'Clases personalizadas que combinan música, baile y expresión corporal. Se aprende el compás, zapateado, braceo y coreografía.',
    image: '/images/Flamenco.png',
  },
  // Otros talleres...
];
```
### Uso

1. Importa el componente CardWorkshop en la página o componente donde desees usarlo.

```javascript
import CardWorkshop from './components/cardWorkshop/CardWorkshop';
```

2. Pasa el array de talleres (workshops) como propiedad al componente CardWorkshop para renderizar las tarjetas.

```javascript
export default function CursosTalleres() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-center font-bold my-6">
        <span className="text-4xl md:text-5xl">Talleres</span>
      </h1>
      <CardWorkshop workshops={workshops} />
    </div>
  );
}
```

### Diseño responsive

- En pantallas con más de 1024px de ancho, se mostrarán 5 tarjetas por fila.
- En pantallas más pequeñas, como en dispositivos móviles, el diseño se ajusta para mostrar 2 tarjetas por fila.
  
