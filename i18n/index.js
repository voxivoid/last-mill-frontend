// https://nuxt-community.github.io/nuxt-i18n/

export const locales = [
  { code: "en", iso: "en-US", name: "English" },
  { code: "pt", iso: "pt-pt", name: "Português" },
];

export default {
  locales,
  vueI18n: {
    fallbackLocale: "pt",
  },
  defaultLocale: "pt",
};
