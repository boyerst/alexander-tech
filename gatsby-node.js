




require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})



exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-leaflet|leaflet/,
            use: loaders.null(),
          }
        ]
      }
    })
  }
};
