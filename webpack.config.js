module.exports = {
    // simple config from http://webpack.github.io/docs/configuration.html
    entry: "./src/js/entry.js",
    output: { filename: "./src/js/bundle.js" },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: 'source-map', 
    // using webpack loader
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                loader: "babel-loader", // or just "babel"
                query: {
                    presets: ['es2015', 'stage-0', 'react']
                }
            }
        ]
    }
};