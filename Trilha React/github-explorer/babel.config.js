module.exports = {
    presets: [
        '@babel/preset-env',

         // Os [] e a o atributo 'runtime: 'automatic'' possibilitam que o react não precise ser importado em todas as páginas que usam sintaxe HTML
        ['@babel/preset-react', {
            runtime: 'automatic'
        }]
    ]
}