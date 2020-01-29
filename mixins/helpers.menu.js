export default {
  computed: {
    pages() {
      return [
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
          name: this.$t("entertainment"),
          to: "entertainment",
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
        artists: "Artists",
        releases: "Releases",
        entertainment: "Entertainment",
        services: "Services",
        contacts: "Contacts",
      },
      pt: {
        aboutUs: "Sobre nós",
        artists: "Artistas",
        releases: "Portfólio",
        entertainment: "Entretenimento",
        services: "Serviços",
        contacts: "Contactos",
      },
    },
  },
};
