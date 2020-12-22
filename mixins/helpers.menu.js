export default {
  computed: {
    pages() {
      return [
        {
          name: this.$t("aboutUs"),
          to: "about-us",
        },
        {
          name: this.$t("services"),
          to: "services",
        },
        {
          name: this.$t("contacts"),
          to: "contacts",
        },
      ];
    },
  },
  i18n: {
    messages: {
      us: {
        aboutUs: "About us",
        services: "Services",
        contacts: "Contacts",
      },
      pt: {
        aboutUs: "Sobre nós",
        services: "Serviços",
        contacts: "Contactos",
      },
    },
  },
};
