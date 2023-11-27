import withNextra from "nextra";

export default withNextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
})({
  // transpilePackages: ["geist"],
  i18n: {
    locales: ["en", "zh"],
    defaultLocale: "en",
  },
});
