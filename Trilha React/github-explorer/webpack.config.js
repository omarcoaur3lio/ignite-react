
// Para não ter problemas em encontrar os arquivos quando estivermos em um ambiente (SO) diferente.
const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

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
        hot: true, // Habilita o hot reloading.
    },
    plugins: [
        isDevelopment && new ReactRefreshWebpackPlugin(), // Para que o React Refresh funcione.
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'), // Define qual arquivo será usado como modelo para o HTML.
        })
    ].filter(Boolean), // Hack para resolver o problema do ReactRefreshWebpackPlugin quando o ambiente for de produção.
    module: { // Define como os arquivos importados serão interpretados. (Um objeto para cada tipo de arquivo).
        rules: [
            {
                test: /\.jsx$/, // Expressão regular para verificar e encontrar arquivos .jsx
                exclude: /node_modules/, // Para não interpretar os arquivos que estão na pasta node_modules
                use: {
                    loader: 'babel-loader', // Integra o babel com o webpack
                    options: {
                        plugins: [
                            isDevelopment && require.resolve('react-refresh/babel')
                        ].filter(Boolean) // Para que o React Refresh funcione.
                    }
                },
            },
            {
                test: /\.scss$/, // Expressão regular para verificar e encontrar arquivos .scss
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            }
        ],
    }
}