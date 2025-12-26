export const site = {
  common: {
    siteName: 'Konexdrone',
    tagline: 'Ingeniería FPV, cultura de carreras y shows de drones escalables.',
    nav: {
      items: [
        { label: 'Nosotros', href: '/about' },
        { label: 'Productos', href: '/products' },
        { label: 'Light Shows', href: '/light-shows' },
        { label: 'Eventos', href: '/events' },
        { label: 'Pilotos', href: '/pilots' },
        { label: 'Contacto', href: '/contact' }
      ],
      store: { label: 'Tienda', href: 'https://konexdrone.com', external: true }
    },
    footer: {
      columns: [
        {
          title: 'Empresa',
          links: [
            { label: 'Nosotros', href: '/about' },
            { label: 'Productos', href: '/products' },
            { label: 'Light Shows', href: '/light-shows' }
          ]
        },
        {
          title: 'Comunidad',
          links: [
            { label: 'Eventos', href: '/events' },
            { label: 'Pilotos', href: '/pilots' },
            { label: 'Tienda', href: 'https://konexdrone.com', external: true }
          ]
        },
        {
          title: 'Legal',
          links: [
            { label: 'Privacidad', href: '/privacy' },
            { label: 'Cookies', href: '/cookies' },
            { label: 'Condiciones', href: '/terms' }
          ]
        }
      ],
      legalNote: 'Konexdrone SL. Todos los derechos reservados.'
    }
  },
  home: {
    metaTitle: 'Ingeniería FPV y shows de drones',
    metaDescription:
      'Konexdrone desarrolla controladoras FPV, minidrones a medida y organiza eventos y shows indoor.',
    hero: {
      kicker: 'Konexdrone SL',
      title: 'Creamos hardware FPV y coreografías para la nueva generación de shows de drones.',
      lede:
        'Somos pilotos y desarrolladores. Desde nuestra controladora H743 hasta minidrones con UWB, todo está pensado para velocidad, fiabilidad y escala.',
      ctas: [
        { label: 'Ver productos', href: '/products', variant: 'primary' },
        { label: 'Light Shows', href: '/light-shows', variant: 'ghost' }
      ]
    },
    stats: [
      { label: 'FC principal', value: 'Konex H743' },
      { label: 'Rango de potencia', value: '2S-8S' },
      { label: 'Salidas de motor', value: '8 salidas' }
    ],
    highlights: [
      {
        title: 'Controladora Konex H743',
        description:
          'Doble gyro ICM, ELRS integrado y ajustada para carreras FPV y builds freestyle.'
      },
      {
        title: 'Minidrones para shows indoor',
        description:
          'Drones con frame PCB, FC integrada, AM32 y UWB para formaciones precisas.'
      },
      {
        title: 'Eventos y cultura racing',
        description:
          'Organizamos carreras locales, compartimos circuitos y apoyamos a pilotos.'
      }
    ],
    callout: {
      title: '¿Quieres un show indoor a medida?',
      description:
        'Diseñamos la actuación, entrenamos al equipo y desplegamos operaciones escalables.',
      cta: { label: 'Solicitar demo', href: '/light-shows', variant: 'primary' }
    }
  },
  about: {
    metaTitle: 'Sobre Konexdrone',
    metaDescription:
      'Konexdrone es una empresa FPV española que desarrolla hardware de carreras y sistemas de shows de drones.',
    hero: {
      kicker: 'Nosotros',
      title: 'Pilotos primero. Ingeniería siempre.',
      lede:
        'Diseñamos hardware y sistemas de vuelo desde cero. Nuestro objetivo es llevar fiabilidad de carreras a pilotos, organizadores y equipos de shows.'
    },
    story: [
      'Konexdrone SL es una empresa FPV española creada por pilotos que buscaban mejores componentes y stacks más limpios.',
      'Vendemos productos DJI y FPV en nuestra tienda, y desarrollamos controladoras y minidrones propios para carreras y shows.'
    ],
    values: [
      {
        title: 'Preparado para presión de carreras',
        description: 'Validamos cada placa y componente en condiciones reales.'
      },
      {
        title: 'Ingeniería propia',
        description: 'Del PCB al firmware, controlamos todo el stack.'
      },
      {
        title: 'Impulso comunitario',
        description: 'Eventos, pilotos y open source nos mantienen conectados.'
      }
    ]
  },
  products: {
    metaTitle: 'Productos',
    metaDescription: 'Hardware Konexdrone: controladora H743 y minidrones con UWB.',
    hero: {
      kicker: 'Productos',
      title: 'Hardware para ganar carreras y escalar performances.',
      lede:
        'Nuestra controladora principal alimenta builds 2S-8S y los minidrones abren la puerta a shows indoor.'
    },
    h743: {
      name: 'Controladora Konex H743',
      description:
        'Una FC probada en carreras con ELRS integrado, doble gyro ICM y 8 salidas de motor. Diseñada por Konexdrone desde cero.',
      specs: ['Entrada 2S-8S', 'ELRS integrado', '8 salidas de motor', 'Doble gyro ICM'],
      cta: { label: 'Comprar en la tienda', href: 'https://konexdrone.com', external: true }
    },
    minidrone: {
      name: 'Plataforma minidrone UWB',
      description:
        'Drones con frame PCB, FC integrada, AM32, antena cerámica ELRS y UWB para shows indoor de precisión.',
      specs: ['Compatible 2S-3S', 'Clase 2.5 pulgadas', 'Chasis frame PCB', 'Posicionamiento UWB'],
      pricing: [
        { label: 'Minidrone solo', value: '229 EUR' },
        { label: 'Minidrone + UWB', value: '329 EUR' }
      ],
      cta: { label: 'Hablemos', href: '/contact' }
    }
  },
  lightShows: {
    metaTitle: 'Shows indoor con drones',
    metaDescription:
      'Shows indoor con drones FPV, coreografía propia y minidrones ligeros con UWB.',
    hero: {
      kicker: 'Light Shows',
      title: 'Shows indoor diseñados para espacios exigentes.',
      lede:
        'Construimos los drones, escribimos la coreografía y formamos equipos para operar shows indoor.'
    },
    services: [
      {
        title: 'Producción del show',
        description: 'Concepto, coreografía y ejecución completa para eventos y venues.'
      },
      {
        title: 'Formación y consultoría',
        description: 'Sesiones privadas para operar tu propio show.'
      },
      {
        title: 'Venta de minidrones',
        description: 'Drones 2.5 pulgadas listos para escalar con UWB opcional.'
      }
    ],
    pricing: [
      { label: 'Minidrone solo', value: '229 EUR' },
      { label: 'Minidrone + UWB', value: '329 EUR' }
    ],
    trainingNote: 'La formación se cotiza por contacto directo.',
    callout: {
      title: 'Diseña un show con nosotros',
      description: 'Creamos performances indoor y formamos a tu equipo.',
      cta: { label: 'Empezar conversación', href: '/contact', variant: 'primary' }
    }
  },
  events: {
    metaTitle: 'Eventos e inscripciones',
    metaDescription: 'Calendario FPV, detalles de eventos y flujo de inscripciones Konexdrone.',
    hero: {
      kicker: 'Eventos',
      title: 'Compite con la comunidad y prueba nuevo hardware.',
      lede:
        'Organizamos eventos FPV en España con inscripciones asequibles y enfoque comunitario.'
    },
    refundPolicy:
      'Reembolsos disponibles hasta dos semanas antes del evento. Sin límite de edad.',
    registrationNote:
      'Las inscripciones se confirman cuando los pagos estén activos. Por ahora registramos interés y confirmamos manualmente.'
  },
  pilots: {
    metaTitle: 'Pilotos y comunidad',
    metaDescription: 'Conoce a los pilotos y la comunidad que confían en Konexdrone.',
    hero: {
      kicker: 'Pilotos',
      title: 'Pilotos que llevan nuestro hardware al límite.',
      lede:
        'Apoyamos a pilotos que compiten, prueban nuevas builds y representan a la comunidad FPV.'
    },
    rosterNote:
      'La lista de pilotos patrocinados se está actualizando. Contacta si quieres colaborar o aparecer.',
    communityNote:
      'Los canales de comunidad se publicarán pronto. Sigue nuestra tienda o contáctanos para unirte.'
  },
  contact: {
    metaTitle: 'Contacto Konexdrone',
    metaDescription: 'Contacta sobre productos, eventos o shows indoor.',
    hero: {
      kicker: 'Contacto',
      title: 'Cuéntanos qué quieres construir.',
      lede:
        'Respondemos rápido a consultas de producto, eventos y shows indoor. Usa el formulario o escríbenos.'
    },
    form: {
      nameLabel: 'Nombre',
      emailLabel: 'Email',
      messageLabel: 'Mensaje',
      submitLabel: 'Enviar mensaje',
      note: 'Solemos responder en menos de 48 horas.'
    },
    contactCards: [
      {
        title: 'Email',
        value: 'hello@konexdrone.com'
      },
      {
        title: 'Ubicación',
        value: 'Base en España. Cobertura regional para eventos y shows.'
      }
    ]
  },
  legal: {
    privacy: {
      metaTitle: 'Política de privacidad',
      sections: [
        {
          title: 'Datos que recopilamos',
          content:
            'Solo recopilamos la información necesaria para responder consultas o registrar eventos.'
        },
        {
          title: 'Cómo usamos los datos',
          content:
            'Usamos los datos para confirmar inscripciones, enviar actualizaciones y emitir facturas cuando se activen los pagos.'
        },
        {
          title: 'Tus derechos',
          content:
            'Puedes solicitar acceso, corrección o eliminación de datos escribiéndonos.'
        }
      ]
    },
    cookies: {
      metaTitle: 'Política de cookies',
      sections: [
        {
          title: 'Cookies esenciales',
          content: 'Usamos cookies esenciales necesarias para el funcionamiento del sitio.'
        },
        {
          title: 'Analítica',
          content:
            'Las cookies de analítica solo se activarán con consentimiento explícito cuando sea requerido.'
        }
      ]
    },
    terms: {
      metaTitle: 'Condiciones de inscripción',
      sections: [
        {
          title: 'Inscripción',
          content:
            'Las inscripciones dependen de la capacidad y se confirman por email.'
        },
        {
          title: 'Reembolsos',
          content:
            'Los reembolsos están disponibles hasta dos semanas antes del evento.'
        },
        {
          title: 'Código de conducta',
          content:
            'Los participantes deben seguir las normas de seguridad y las indicaciones del organizador.'
        }
      ]
    }
  }
};
