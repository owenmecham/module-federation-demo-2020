const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:3050/",
    uniqueName: "simpleform"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({

      // Remotes configuration
      name: "simpleform",
      library: { type: "var", name: "simpleform" },
      filename: "remoteEntry.js",
      exposes: {
        './Module': './projects/simpleform/src/app/simpleform/simpleform.module.ts',
      },

      shared: ["@angular/core", "@angular/common", "@angular/router", "@angular/forms"]
    })
  ],
};
