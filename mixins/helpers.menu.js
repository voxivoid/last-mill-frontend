export default {
  computed: {
    pages() {
      return [
        {
          name: this.$t("aboutUs"),
          to: "know-more",
          hash: "about-us",
        },
        {
          name: this.$t("portfolio"),
          to: "know-more",
          hash: "portfolio",
        },
        {
          name: this.$t("pricing"),
          to: "know-more",
          hash: "pricing",
        },
        {
          name: this.$t("contacts"),
          to: "know-more",
          hash: "contacts",
        },
      ];
    },
  },
  i18n: {
    messages: {
      us: {
        aboutUs: "About us",
        portfolio: "Featured work",
        pricing: "Pricing",
        contacts: "Contacts",
      },
      pt: {
        aboutUs: "Sobre nós",
        portfolio: "Trabalhos em destaque",
        pricing: "Preços",
        contacts: "Contactos",
      },
    },
  },
};
