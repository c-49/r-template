import { createI18n } from 'vue-i18n';

const messages = {
  en: {
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
