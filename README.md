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

En la versión de escritorio, se implementa un temporizador (mediante `setTimeout`) que espera unos 200 milisegundos antes de cerrar los menús para evitar cierres inesperados mientras el usuario está navegando por los menús.

## Interacción entre Archivos

- **`menuData.jsx`**: Define la estructura de los menús y submenús que se van a renderizar.
- **`index.jsx`**: Usa los datos de `menuData.jsx` para renderizar dinámicamente los menús y submenús tanto en la vista móvil como en la de escritorio. Aquí también se implementa toda la lógica para la interacción del usuario con el menú.

## Personalización

Si deseas agregar, eliminar o modificar menús y submenús, simplemente actualiza el archivo `menuData.jsx` con la nueva estructura de menús. El `Header` renderizará los cambios automáticamente en la interfaz de usuario.

## Ejemplo de Uso

Para usar el `Header`, simplemente importa el componente en cualquier página de tu aplicación React/Next.js y colócalo donde desees que aparezca en la interfaz:

```jsx
import Header from './components/Header';

function App() {
    return (
        <div>
            <Header />
            {/* El resto de tu aplicación */}
        </div>
    );
}

export default App;
```

## Consideraciones

1. **Tiempo de Inactividad**: El menú de escritorio se cierra automáticamente después de un breve periodo de inactividad si el ratón no está interactuando con él.
2. **Responsividad**: El componente está completamente optimizado para ser responsivo, adaptándose automáticamente al ancho de la pantalla.
3. **Accesibilidad**: Cada enlace y botón dentro del menú y submenús puede ser navegable mediante teclado, facilitando la accesibilidad.git log --merges


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

## Licencia

Este componente es de código abierto y está disponible bajo la [Licencia MIT](LICENSE).
