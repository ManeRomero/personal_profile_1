const Portada = new Vue ({
    el: '#portada',
    data: {
        articulos: [{
            naming: 'Destinos',
            link: 'destinos'
        },
            { 
            naming: 'Quiénes Somos',
            link: 'about'
        },
            {
            naming: 'Dónde Vamos',
            link: 'estamos'
        }
    ],
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

const Destinos = new Vue ({
    el: '#destinos',
    data: {
        referencias: [
            {
            discount: 'Save 90$ pay only',
            price: '359',
            city: 'Mykonos',
            alt: 'La Nueva Grecia, discotecas con sabor a Yogurt. Joroña que joroña!',
            url: 'beijing.JPG'
        },
            {
            discount: 'Save 75$ pay only',
            price: '729',
            city: 'London',
            alt: 'La City Londinense. Autobuses de dos plantas y gente igual de estirada.',
            url: 'buenos_aires.JPG'
        },
            {
            discount: 'Save 35$ pay only',
            price: '519',
            city: 'Dublin',
            alt: 'Mejor no les cabrees. El barrio está mal, pero viva San Patricio! ',
            url: 'ciudad_mexico.JPG'
        },
            {
            discount: 'Save 65$ pay only',
            price: '329',
            city: 'París',
            alt: 'La ciudad del amor, oh la la! Prohibido echar un piti cerca de Catedrales.',
            url: 'madrid.JPG'
        },
            {
            discount: 'Save 95$ pay only',
            price: '199',
            city: 'Amsterdam',
            alt: 'Se equivocaron con Las Vegas: lo que pasa en Amsterdam, se queda en Amsterdam',
            url: 'new_york.JPG'
        },
            {
            discount: 'Save 50$ pay only',
            price: '659',
            city: 'Rome',
            alt: 'Rómulo y Remo fliparían con la que liaron. Levantas una piedra y sale otro vestigio',
            url: 'tokyo.JPG'
        }
    ]
    }
})

const Nosotros = new Vue ({
    el: '#about',
    data: {
        title: 'Quiénes somos',
        subtitle: 'GeeksHubs Travels, desde hace poco, pero pa siempre!',
        submit: 'Descubrir',
        description: 'GeeksHubs Travels es una agencia de viajes online creada en 2009 por un equipo de viajeros entusiastas que deciden hacer de su pasión por conocer el mundo un modo de vida. Desde nuestros inicios hemos diseñado más de 500 viajes organizados a diferentes destinos de Europa, Norteamérica y Asia. Nuestro objetivo ahora es ir ampliando horizontes poco a poco.',
    }
})

const Estamos = new Vue ({
    el: '#estamos',
    data: {
        mapUrl: 'mapa.png',
        mapAddress: 'Avenida Tocha de cojones, San Juan',
        concepts: [{
            title: 'E: enquiry@artiotravel.com',
            class: ''
        }, 
        {
            title: 'P: 0264 123 4567',
            class: ''
        },
        {
            title:'Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days.',
            class: ''
        },
        {
            title: 'We are open from 8.30 AM - 4.00 PM week days.',
            class:'thisIsTheLast'
        }],
        recomendation: 'please complete all fields correctly',
        forms: [{
            placeholder: 'Name',
            required: true,
        },
        {
            placeholder: 'Email',
            required: true
        },
        {
            placeholder: 'Phone',
            required: false
        },
        {
            placeholder: 'Country',
            required: false
        }],
        textareaPlac: 'Message'
    },
     methods: {
        checkRequired: function() {
            for(var i = 0; i < this.forms.length; i++){
                if (this.forms[i].required === true){
                    this.forms[i].class = 'required'
                }
                else
                {
                    return ''
                }
            }
        }
    } 
})

const Contactar = new Vue ({
    el: '#contact',
    data: {
        uno: [
            {title: 'necesitas ayuda?'},
            ['0264 123 4567',
            'enquiry@geekshubtravels.com',
            'Lun-Vie: 9.30 - 19.00, Sáb: vamos no jodas']
        ],
        dos: [
            {title: 'información'},
            ['Quiénes somos',
            'Preguntas Frecuentes',
            'Política de privacidad',
            'Condiciones generales',
            'Aviso legal',
            'Contacto',
            'Programa de puntos']
        ],
        tres: [{
            title: 'suscríbete a la newsletter',
            placehold: 'Correo electrónico',
            boton: 'suscríbete'
        }
    ],
        closing: 'GeeksHubs Travels Manuel Romero 2019 Todos los derechos reservados.'
    }
})