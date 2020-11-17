const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    // The publicPath configuration option can be quite useful in a variety of scenarios. It allows you to specify the base path for all the assets within your application.
    // https://webpack.js.org/guides/public-path/#root
    publicPath: "http://localhost:5000/",

    // A unique name of the webpack build to avoid multiple webpack runtimes to conflict when using globals. It defaults to output.library name or the package name from package.json in the context, if both aren't found, it is set to an ''.
    // https://webpack.js.org/configuration/output/#outputuniquename
    uniqueName: "shell"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    // https://webpack.js.org/configuration/optimization/#optimizationruntimechunk
    runtimeChunk: false
  },
  plugins: [
    // https://webpack.js.org/concepts/module-federation/#modulefederationplugin-high-level
    new ModuleFederationPlugin({
      remotes: {
        'cleaners': "cleaners@http://localhost:3000/remoteEntry.js"
      },
      shared: ["@angular/core", "@angular/common", "@angular/router"]
    })
  ],
};


