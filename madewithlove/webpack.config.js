var webpack = require('webpack');

var isProduction = process.env.NODE_ENV === 'production';


var plugins = [
    new webpack.optimize.CommonsChunkPlugin({
        // name: 'main',
        children: true,
        minChunks: 2,
        async: true
    })
];

if (isProduction) {
    plugins.concat([
        // prod plugins go hurr

    ])
}

module.exports = {
    entry: './src', // top of the dependency tree
    output: {
        path: 'builds',
        filename: 'bundle.js',
        publicPath: 'builds/'
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loader: 'babel',
                include: __dirname + '/src'
            },
            {
                test: /\.scss/,
                loader: 'style!css!sass' // pipeline
            },
            {
                test: /\.html/,
                loader: 'html'
            }
        ]
    },

    plugins: plugins,

    // env stuff
    debug: !isProduction,
    devtool: isProduction ? false : 'eval'  // sourcemaps generation

};
