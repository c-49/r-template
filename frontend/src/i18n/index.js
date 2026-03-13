import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    header: {
      tagline: 'Delicious Food',
    },
    landing: {
      hero: {
        title: 'Welcome! We Made Delicious Food for You',
        subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        cta: 'Order Online',
      },
    },
    hero: {
      title: 'Welcome to Our Restaurant',
      tagline: 'Delicious food, cozy atmosphere',
    },
    about: {
      title: 'About Us',
      description: 'We are a family-owned restaurant serving fresh meals.',
    },
    menu: {
      title: 'Our Menu',
      empty: 'Menu is currently unavailable.',
    },
    hours: {
      title: 'Hours & Location',
      opening: 'Open daily from 11am to 10pm',
    },
    contact: {
      title: 'Contact / Reservation',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      submit: 'Send',
    },
  },
  es: {
    header: {
      tagline: 'Comida Deliciosa',
    },
    landing: {
      hero: {
        title: '¡Bienvenido! Hicimos Comida Deliciosa para Ti',
        subtitle: 'Lorem Ipsum es simplemente texto de relleno de la industria de impresión y composición.',
        cta: 'Ordenar en Línea',
      },
    },
    hero: {
      title: 'Bienvenido a Nuestro Restaurante',
      tagline: 'Comida deliciosa, ambiente acogedor',
    },
    about: {
      title: 'Sobre Nosotros',
      description: 'Somos un restaurante familiar que sirve comidas frescas.',
    },
    menu: {
      title: 'Nuestro Menú',
      empty: 'El menú no está disponible en este momento.',
    },
    hours: {
      title: 'Horario y Ubicación',
      opening: 'Abierto todos los días de 11am a 10pm',
    },
    contact: {
      title: 'Contacto / Reserva',
      name: 'Nombre',
      email: 'Correo electrónico',
      message: 'Mensaje',
      submit: 'Enviar',
    },
  },
};

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});

export default i18n;
