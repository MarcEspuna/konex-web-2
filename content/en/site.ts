export const site = {
  common: {
    siteName: 'Konexdrone',
    tagline: 'FPV engineering, racing culture, and scalable drone light shows.',
    nav: {
      items: [
        { label: 'About', href: '/about' },
        { label: 'Products', href: '/products' },
        { label: 'Light Shows', href: '/light-shows' },
        { label: 'Events', href: '/events' },
        { label: 'Pilots', href: '/pilots' },
        { label: 'Contact', href: '/contact' }
      ],
      store: { label: 'Store', href: 'https://konexdrone.com', external: true }
    },
    footer: {
      columns: [
        {
          title: 'Company',
          links: [
            { label: 'About', href: '/about' },
            { label: 'Products', href: '/products' },
            { label: 'Light Shows', href: '/light-shows' }
          ]
        },
        {
          title: 'Community',
          links: [
            { label: 'Events', href: '/events' },
            { label: 'Pilots', href: '/pilots' },
            { label: 'Store', href: 'https://konexdrone.com', external: true }
          ]
        },
        {
          title: 'Legal',
          links: [
            { label: 'Privacy Policy', href: '/privacy' },
            { label: 'Cookies', href: '/cookies' },
            { label: 'Terms', href: '/terms' }
          ]
        }
      ],
      legalNote: 'Konexdrone SL. All rights reserved.'
    }
  },
  home: {
    metaTitle: 'FPV Engineering and Drone Light Shows',
    metaDescription:
      'Konexdrone builds FPV flight controllers, custom minidrones, and runs racing events and indoor light shows.',
    hero: {
      kicker: 'Konexdrone SL',
      title: 'We build FPV hardware and choreograph the next generation of drone light shows.',
      lede:
        'We are racers and engineers. From our H743 flight controller to UWB-positioned minidrones, every product is designed for speed, reliability, and scale.',
      ctas: [
        { label: 'Explore Products', href: '/products', variant: 'primary' },
        { label: 'Light Shows', href: '/light-shows', variant: 'ghost' }
      ]
    },
    stats: [
      { label: 'Flagship FC', value: 'Konex H743' },
      { label: 'Power Range', value: '2S-8S' },
      { label: 'Motor Outputs', value: '8 Outputs' }
    ],
    highlights: [
      {
        title: 'Konex H743 Flight Controller',
        description:
          'Dual ICM gyro, ELRS built in, and tuned for competitive FPV racing and freestyle builds.'
      },
      {
        title: 'Minidrones for Indoor Shows',
        description:
          'PCB-frame micro drones with integrated FC, AM32, and UWB positioning for precise formations.'
      },
      {
        title: 'Events and Racing Culture',
        description:
          'We organize local FPV races, share tracks, and support pilots with sponsorships and gear.'
      }
    ],
    callout: {
      title: 'Ready to build a custom light show?',
      description:
        'We handle performance design, pilot training, and scalable deployments for indoor venues.',
      cta: { label: 'Request a demo', href: '/light-shows', variant: 'primary' }
    }
  },
  about: {
    metaTitle: 'About Konexdrone',
    metaDescription:
      'Konexdrone is a Spanish FPV company building racing-grade hardware and scalable drone light show systems.',
    hero: {
      kicker: 'About Us',
      title: 'Racers first. Engineers always.',
      lede:
        'We design FPV hardware and flight systems from scratch. Our focus is to make racing-grade reliability available for pilots, organizers, and performance teams.'
    },
    story: [
      'Konexdrone SL is a Spanish FPV company built by racers who wanted better hardware and cleaner flight stacks.',
      'We sell DJI and FPV components through our store, while engineering custom flight controllers and mini drones for our own race teams and shows.'
    ],
    values: [
      {
        title: 'Built for racing pressure',
        description: 'Every board and component is validated under real race conditions.'
      },
      {
        title: 'In-house engineering',
        description: 'From PCB layout to firmware tuning, we control the full stack.'
      },
      {
        title: 'Community momentum',
        description: 'Events, pilots, and open source experiments keep us connected.'
      }
    ]
  },
  products: {
    metaTitle: 'Products',
    metaDescription: 'Konexdrone hardware: H743 flight controller and UWB-ready minidrones.',
    hero: {
      kicker: 'Products',
      title: 'Hardware built to win races and scale performances.',
      lede:
        'Our flagship controller powers 2S-8S builds, while our minidrones unlock indoor shows and training programs.'
    },
    h743: {
      name: 'Konex H743 Flight Controller',
      description:
        'A race-proven FC with ELRS built in, dual ICM gyro, and 8 motor outputs. Designed by Konexdrone from scratch.',
      specs: ['2S-8S input', 'ELRS built-in', '8 motor outputs', 'Dual ICM gyro'],
      cta: { label: 'Buy on the store', href: 'https://konexdrone.com', external: true }
    },
    minidrone: {
      name: 'UWB Minidrone Platform',
      description:
        'PCB-frame micro drones with integrated FC, AM32, ELRS ceramic antenna, and UWB positioning for precision indoor shows.',
      specs: ['2S-3S capable', '2.5 inch class', 'PCB frame chassis', 'UWB positioning'],
      pricing: [
        { label: 'Minidrone only', value: '229 EUR' },
        { label: 'Minidrone + UWB system', value: '329 EUR' }
      ],
      cta: { label: 'Talk to us', href: '/contact' }
    }
  },
  lightShows: {
    metaTitle: 'Indoor Drone Light Shows',
    metaDescription:
      'Custom indoor FPV light shows powered by UWB positioning and lightweight minidrones.',
    hero: {
      kicker: 'Light Shows',
      title: 'Indoor drone performances engineered for tight spaces.',
      lede:
        'We build the drones, write the choreography, and train teams to operate reliable indoor light shows.'
    },
    services: [
      {
        title: 'Show production',
        description: 'Concept, choreography, and full execution for venues and events.'
      },
      {
        title: 'Training and consulting',
        description: 'Private training sessions to run your own show operations.'
      },
      {
        title: 'Minidrones for sale',
        description: 'Ready-to-scale 2.5 inch drones with optional UWB positioning.'
      }
    ],
    pricing: [
      { label: 'Minidrone only', value: '229 EUR' },
      { label: 'Minidrone + UWB system', value: '329 EUR' }
    ],
    trainingNote: 'Training pricing is handled via direct contact.',
    callout: {
      title: 'Design a show with us',
      description: 'We can create a custom indoor performance and train your crew.',
      cta: { label: 'Start a conversation', href: '/contact', variant: 'primary' }
    }
  },
  events: {
    metaTitle: 'Events and Registrations',
    metaDescription: 'FPV race calendar, event details, and registration flows by Konexdrone.',
    hero: {
      kicker: 'Events',
      title: 'Race with the community and test new hardware.',
      lede:
        'We organize FPV racing events across Spain with affordable entry fees and community support.'
    },
    refundPolicy: 'Refunds are available up to two weeks before the event. No age limits.',
    registrationNote:
      'Registrations are confirmed once payment is enabled. For now, we collect interest and send a manual confirmation.'
  },
  pilots: {
    metaTitle: 'Pilots and Community',
    metaDescription: 'Meet the pilots and community that race with Konexdrone.',
    hero: {
      kicker: 'Pilots',
      title: 'Pilots who push our gear to the limit.',
      lede:
        'We support pilots who race hard, test new builds, and represent the FPV community.'
    },
    rosterNote:
      'The sponsored pilot roster is being refreshed. Reach out if you want to collaborate or be featured.',
    communityNote:
      'Community channels are launching soon. Follow our store for updates or contact us to join.'
  },
  contact: {
    metaTitle: 'Contact Konexdrone',
    metaDescription: 'Get in touch about products, events, or indoor light shows.',
    hero: {
      kicker: 'Contact',
      title: 'Let us know what you want to build.',
      lede:
        'We respond quickly to product, event, and light show inquiries. Use the form or email us directly.'
    },
    form: {
      nameLabel: 'Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      submitLabel: 'Send message',
      note: 'We typically reply within 48 hours.'
    },
    contactCards: [
      {
        title: 'Email',
        value: 'hello@konexdrone.com'
      },
      {
        title: 'Location',
        value: 'Based in Spain. Regional coverage for events and shows.'
      }
    ]
  },
  legal: {
    privacy: {
      metaTitle: 'Privacy Policy',
      sections: [
        {
          title: 'Data we collect',
          content:
            'We collect only the information needed to respond to inquiries or register for events.'
        },
        {
          title: 'How we use data',
          content:
            'Data is used to confirm registrations, send updates, and provide invoices once payments are enabled.'
        },
        {
          title: 'Your rights',
          content:
            'You can request access, correction, or deletion of your data by contacting us.'
        }
      ]
    },
    cookies: {
      metaTitle: 'Cookie Policy',
      sections: [
        {
          title: 'Essential cookies',
          content: 'We use essential cookies required for site functionality.'
        },
        {
          title: 'Analytics',
          content:
            'Analytics cookies will only be enabled with explicit consent when required.'
        }
      ]
    },
    terms: {
      metaTitle: 'Event Registration Terms',
      sections: [
        {
          title: 'Registration',
          content:
            'Registrations are subject to capacity limits and confirmation emails.'
        },
        {
          title: 'Refunds',
          content:
            'Refunds are available up to two weeks before the event date.'
        },
        {
          title: 'Code of conduct',
          content:
            'Participants must follow safety rules and organizer instructions at all times.'
        }
      ]
    }
  }
};
