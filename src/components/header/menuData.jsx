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
        link: '/hazte-socio', // Link correctamente definido
    },
];
