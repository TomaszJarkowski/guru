module.exports = {
    propsParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json').parse,
    components: 'src/components/UI/**/*.tsx',
    skipComponentsWithoutExample: true,
    styles: 'src/scss/Reset.scss'
};
