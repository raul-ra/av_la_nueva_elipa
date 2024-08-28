# Header Component

Este proyecto incluye un componente `Header` diseñado para funcionar tanto en dispositivos móviles como en la vista de escritorio. El header incluye un sistema de menús y submenús dinámicos que se abren mediante hover en escritorio y clic en dispositivos móviles. También cuenta con una lógica para cerrar los menús automáticamente después de 5 segundos de inactividad en escritorio.

## Funcionamiento General

### Estructura

El `Header` está estructurado en dos partes principales:
1. **Menú de Escritorio**: Visible cuando el ancho de la pantalla es mayor o igual a 1024px. Los menús y submenús se abren al pasar el ratón por encima y se cierran automáticamente después de 5 segundos sin interacción.
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

## Funciones Clave

- **`handleMouseOver`**: Abre el menú cuando el ratón pasa por encima de un elemento de menú principal (solo en escritorio).
- **`handleMouseOut`**: Inicia el temporizador de 5 segundos para cerrar el menú cuando el ratón sale del área del menú.
- **`clearExistingTimeout`**: Cancela cualquier temporizador activo para prevenir el cierre automático del menú mientras el ratón sigue interactuando con el mismo.
- **`toggleMenu` y `toggleSubMenu`**: Controlan la apertura y cierre de menús y submenús en la vista móvil mediante clics.

## Requerimientos

- **React**: El componente `Header` está construido utilizando React y maneja el estado interno mediante hooks como `useState` y `useEffect`.
- **Tailwind CSS**: Se utiliza para el diseño y la disposición de los elementos, incluyendo estilos responsivos para el menú móvil y de escritorio.

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

1. **Tiempo de Inactividad**: El temporizador de 5 segundos para cerrar los menús se reinicia siempre que haya interacción, por lo que los menús solo se cierran cuando el ratón deja de interactuar completamente.
2. **Responsividad**: El componente está completamente optimizado para ser responsivo, adaptándose automáticamente al ancho de la pantalla.
3. **Accesibilidad**: Cada enlace y botón dentro del menú y submenús puede ser navegable mediante teclado, facilitando la accesibilidad.