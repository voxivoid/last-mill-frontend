// https://nuxt-community.github.io/nuxt-i18n/

export const locales = [
  { code: "us", iso: "en-US", name: "English" },
  { code: "pt", iso: "pt-PT", name: "Português" },
];

export default {
  locales,
  vueI18n: {
    fallbackLocale: "pt",
  },
  defaultLocale: "pt",
};
