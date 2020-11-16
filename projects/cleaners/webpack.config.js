const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:3000/",
    uniqueName: "cleaners"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({

      // For remotes (please adjust)
      name: "cleaners",
      library: { type: "var", name: "cleaners" },
      filename: "remoteEntry.js",
      exposes: {
        './Module': './projects/cleaners/src/app/cleaners/cleaners.module.ts',
      },

      shared: ["@angular/core", "@angular/common", "@angular/router"]
    })
  ],
};
