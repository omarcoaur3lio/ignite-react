
// Para não ter problemas em encontrar os arquivos quando estivermos em um ambiente (SO) diferente.
const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production', // Deixa a conversão do código mais rápida durante o desenvolvimento (caso isDevelopment seja verdadeiro).
    devtool: isDevelopment ? 'eval-source-map' : 'source-map', // Cria um mapa de código fonte para o código que está sendo executado  (caso isDevelopment seja verdadeiro).
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'], // Para que sejam interpretados os arquivos .jsx
    },
    devServer: {
        static: path.resolve(__dirname, 'public'), // Deve apontar para o diretório onde estão os arquivos que serão exibidos na aplicação (HTML estático).
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'), // Define qual arquivo será usado como modelo para o HTML.
        })
    ],
    module: { // Define como os arquivos importados serão interpretados. (Um objeto para cada tipo de arquivo).
        rules: [
            {
                test: /\.jsx$/, // Expressão regular para verificar e encontrar arquivos .jsx
                exclude: /node_modules/, // Para não interpretar os arquivos que estão na pasta node_modules
                use: 'babel-loader', // Integra o babel com o webpack
            },
            {
                test: /\.scss$/, // Expressão regular para verificar e encontrar arquivos .scss
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            }
        ],
    }
}