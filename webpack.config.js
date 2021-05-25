const path = require('path');
const webpack = require('webpack');

//'entry' is root of the bundle & beginning of dependency graph - gives relative path to client's code
//the bundled entry is 'output'ted to the specified folder
//'mode' auto runs in production mode, for this we use development mode
module.exports = {
    entry: './assets/js/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
    ],
    mode: 'development'
};