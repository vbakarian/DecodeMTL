var path = require('path')
module.exports = {
    module: {
        loaders: [
            {
                loader: "babel-loader",
                include: [path.resolve(__dirname, "src")],
                test: /\.jsx?$/,
                query: {
                    presets: ['es2015', 'stage-2', 'react'],
                }
            },
        ]
    },
    entry: './app.jsx',
    output: {
        filename: 'bundle.js'
    }
};
