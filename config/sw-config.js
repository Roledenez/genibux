module.exports = {
  cache: {
    cacheId: "GeniBux",
    runtimeCaching: [{
      handler: "fastest",
      urlPattern: "\/$"
    }],
    staticFileGlobs: ["dist/**/*"]
  },
  manifest: {
    background: "#FFFFFF",
    title: "GeniBux",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
