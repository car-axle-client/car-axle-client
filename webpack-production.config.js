const path = require('path')
module.exports = {
    entry: './src/index.ts', // Entry point of your application
    mode: 'production', // Or 'development' for non-minified output
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            '@/': path.resolve('src/'),
            // doesn't work for some reason??
        },
    },
    output: {
        filename: 'build.js', // Output bundle filename
        // path: path.resolve(__dirname, 'build'), // Output directory
        path: path.resolve(__dirname, 'dist'), // testing directory
    },
}
