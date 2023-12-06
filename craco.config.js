module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
        return webpackConfig;
    },
},
  reactScriptsVersion: "react-scripts",
    style: {
    css: {
      loaderOptions: () => {
        return {
          url: false,
        };
      },
    },
  },
};