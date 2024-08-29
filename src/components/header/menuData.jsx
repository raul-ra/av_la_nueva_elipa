export const menuData = [
    {
        title: 'Inicio',
        link: '/', // Link correctamente definido
    },
    {
        title: 'Quienes Somos',
        subMenu: [
            { title: 'Historia de la Asociación', link: '/historiadelaasociacion' },
            { title: 'Nuestra Misión', link: '/nuestramision' },
            { title: 'Organigrama', link: '/organigrama' },
        ],
    },
    {
        title: 'Qué Hacemos',
        subMenu: [
            { title: 'Mediación', link: '/mediacion' },
            { title: 'Cursos y Talleres', link: '/cursosytalleres' },
            { title: 'Huerto Urbano', link: '/huertourbano' },
            { title: 'Grupo Scout Atreyu', link: '/gruposcoutatreyu' },
            { title: "Campamento de Verano 'El Escondite'", link: '/campamentodeverano' },
            {
                title: 'Espacio Comunitario',
                subMenu: [
                    { title: 'Grupo de Consumo Ecológico', link: '/grupodeconsumoecologico' },
                    { title: 'Grupo Felicidad', link: '/grupofelicidad' },
                    { title: 'Club de Ajedrez', link: '/clubdeajedrez' },
                ],
            },
            {
                title: 'Dinamización Social y Cultural',
                subMenu: [
                    { title: 'Elipa Rock', link: '/eliparock' },
                    { title: 'Cross Salvar el Pinar', link: '/crosspinar' },
                    { title: 'Carrera Popular', link: '/carrerapopular' },
                ],
            },
        ],
    },
    {
        title: 'Hazte Socio',
        link: '/haztesocio', // Link correctamente definido
    },
];
