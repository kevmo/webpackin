module.exports = {
    entry:  './index.js',
    output: {
        path:     'builds',
        filename: 'bundle.js'
    },
    loaders: [
        {
            test: /\.js$/,
            loader: 'babel'
        }
    ]

};