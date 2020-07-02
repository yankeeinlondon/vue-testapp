const TerserPlugin = require("terser-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  transpileDependencies: ["vuetify"],

  chainWebpack: (config) => {
    config.resolve.set("symlinks", false);
  },

  configureWebpack: (config) => {
    const isProd = process.env.NODE_ENV === "production";

    // don't compress classnames otherwise firemodel names will be lost
    if (isProd) {
      config.externals = (config.externals || []).concat("faker");
      console.log(
        "- Configuring the minimizer [terser] to keep the classname un-minimized (a requirement for firemodel models"
      );
      config.optimization.minimizer = [
        new TerserPlugin({
          terserOptions: {
            keep_classnames: true,
            compress: {
              arrows: false,
              collapse_vars: false,
              comparisons: false,
              computed_props: false,
              hoist_funs: false,
              hoist_props: false,
              hoist_vars: false,
              inline: false,
              loops: false,
              negate_iife: false,
              properties: false,
              reduce_funcs: false,
              reduce_vars: false,
              switches: false,
              toplevel: false,
              typeofs: false,
              booleans: true,
              if_return: true,
              sequences: true,
              unused: true,
              conditionals: true,
              dead_code: true,
              evaluate: true,
            },
            mangle: {
              safari10: true,
            },
          },
        }),
      ];
    }

    // allow mode to be set to "analyze" so that we can analyze module deps
    if (process.env.VUE_APP_ANALYZE) {
      console.log("\n- Starting in Analyze mode on a production build");
      config.plugins = config.plugins.concat([
        new BundleAnalyzerPlugin({
          openAnalyzer: true,
          statsFilename: "stats.json",
          generateStatsFile: true,
        }),
      ]);
    }
  },

  css: {
    loaderOptions: {
      scss: {
        prependData: `@import '@inocan/move-style/src/styles/_variables.sass';@import '@inocan/move-style/src/styles/_mixins.scss';`,
      },
      sass: {
        prependData: `@import '@inocan/move-style/src/styles/_variables.sass'`,
      },
    },
  },

  pwa: {
    name: "Got It",
    manifestOptions: {
      name: "Got It | Get It. Got It. Good.",
      short_name: "Got It",
      start_url: "/",
      display: "standalone",
      theme_color: "#5e5e5e",
    },
    appleMobileWebAppCapable: "yes",
    themeColor: "#5e5e5e",
    workboxOptions: {
      exclude: ["_redirect", "_headers"],
    },
  },
};
