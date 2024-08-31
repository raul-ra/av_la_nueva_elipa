
# Proyecto Asociación de Vecinos La Nueva Elipa

Este proyecto se enmarca en el proyecto final del curso de Certificado de Profesionalidad Confección y Publicación de páginas web (IFCD0110). l objetivo principal es crear una página web funcional y moderna para la **Asociación de Vecinos La Nueva Elipa**, proporcionando una plataforma digital que refleje sus actividades, misiones y servicios a la comunidad. 

## Tecnologías Utilizadas

- **Next.js**: Framework de React para aplicaciones web.
- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Tailwind CSS**: Framework de utilidades para construir interfaces de usuario modernas y responsivas.
- **PostCSS**: Herramienta para transformar estilos con plugins de JavaScript.
- **Autoprefixer**: Plugin de PostCSS para añadir prefijos a las CSS de manera automática.
- **Lottie**: Biblioteca para animaciones vectoriales en la web.
- **Theme Toggles**: Librería para el manejo de temas en React.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

- **`components/`**: Contiene los componentes reutilizables de la aplicación, como el `Header`.
- **`pages/`**: Contiene las páginas de la aplicación.
- **`public/`**: Contiene los recursos estáticos como imágenes y fuentes.
- **`styles/`**: Contiene los archivos de estilos, incluyendo Tailwind CSS.
- **`menuData.jsx`**: Archivo de configuración que define los menús y submenús utilizados en el `Header`.

## Cómo Levantar el Proyecto

1. Clonar el repositorio.
    
 ```bash
 https://github.com/raul-ra/av_la_nueva_elipa.git.
 ```

2. Ejecutar `npm install` para instalar las dependencias.
3. Ejecutar `npm run dev` para levantar el servidor de desarrollo.
4. Acceder a `http://localhost:3000` en el navegador.

```json
{
  "name": "asociaciondevecinoslanuevaelipa",
  "version": "1.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "asociaciondevecinoslanuevaelipa",
      "version": "1.0.0",
      "dependencies": {
        "@theme-toggles/react": "^4.1.0",
        "autoprefixer": "^10.4.16",
        "next": "^14.2.7",
        "next-themes": "^0.3.0",
        "postcss": "^8.4.31",
        "prop-types": "^15.8.1",
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "react-lottie": "^1.2.4",
        "tailwindcss": "^3.4.1"
      }
    }
  }
}
```

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
