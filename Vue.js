const app = new Vue ({
    el: '#portada',
    data: {
        articulos: ['Destinos', 'Quiénes Somos', 'Dónde Vamos'],
        redesSociales:[
            {
            titulo: 'Visita nuestro Facebook',
            enlace: 'http://facebook.com/geekshubAcademy',
            icono: 'fab fa-facebook-f'
        },
            {
            titulo: 'Háblanos por WhatsApp',
            enlace: 'https://web.whatsapp.com/🌐/es',
            icono: 'fab fa-whatsapp'
        },
            {
            titulo: 'Síguenos en Twitter',
            enlace: 'https://twitter.com/GeekshubsTravels',
            icono: 'fab fa-twitter'
        },
            {
            titulo: 'Conoce nuestro Instagram',
            enlace: 'https://instagram.com/GeekshubsTravels',
            icono: 'fab fa-instagram'
        },    
            {
            titulo: 'Nuestro Perfil en LinkedIn',
            enlace: 'https://linkedin.com/GeekshubsTravels',
            icono: 'fab fa-linkedin'
        },    
            {
            titulo: 'Canal de YouTube',
            enlace: 'https://youtube.com/GeekshubsTravels',
            icono: 'fab fa-youtube'
        }
    ]
    }
})