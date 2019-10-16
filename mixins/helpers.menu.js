export default {
  data() {
    return {
      pages: [
        {
          name: this.$t("aboutUs"),
          to: "about-us",
        },
        {
          name: this.$t("artists"),
          to: "artists",
        },
        {
          name: this.$t("releases"),
          to: "releases",
        },
        {
          name: this.$t("services"),
          to: "services",
        },
        {
          name: this.$t("contacts"),
          to: "contacts",
        },
      ],
    };
  },
  i18n: {
    messages: {
      en: {
        aboutUs: "About us",
        artists: "Artists",
        releases: "Releases",
        services: "Services",
        contacts: "Contacts",
      },
      pt: {
        aboutUs: "Sobre nós",
        artists: "Artistas",
        releases: "Portfólio",
        services: "Serviços",
        contacts: "Contactos",
      },
    },
  },
};
