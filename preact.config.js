export default (config, env, helpers) => {
  delete config.entry.polyfills;
  config.entry = `${__dirname}/src`;

  config.output.filename = "wpp-widget.js";
  config.output.publicPath = "";
  config.output.library = "WppWidget";
  config.output.libraryExport = "default";

  let { plugin } = helpers.getPluginsByName(config, "ExtractTextPlugin")[0];

  plugin.options.disable = true;

  if (env.production) {
    config.output.libraryTarget = "umd";
  }
};
