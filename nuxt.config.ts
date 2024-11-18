// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  content: {
    markdown: {
      mdc: true,
    },
  },
  modules: ["@nuxt/content", "@pinia/nuxt"],
  css: ["~/assets/css/main.css", "~/assets/css/forms-fields.css"],
  routeRules: {
    "/": { prerender: true },
  },
  compatibilityDate: "2024-11-15",
});
