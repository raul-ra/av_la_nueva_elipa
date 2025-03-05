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
            { title: 'Cerca de ti', link: '/cercadeti' },
            { title: 'Cursos y Talleres', link: '/cursosytalleres' },
            { title: 'Huerto Urbano', link: '/huertourbano' },
            { title: 'Espacio Comunitario', link: '/espaciocomunitario'},
            {
                title: 'Construyendo Barrio',
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
