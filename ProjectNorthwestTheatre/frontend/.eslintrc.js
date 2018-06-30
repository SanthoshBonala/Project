module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: true,
    },
    extends: [
        // add more generic rulesets here, such as:
        'eslint:standard',
        'plugin:vue/essential'
    ],
    plugins: [
        'vue'
    ],
    rules: {
        'generator-star-spacing': 'off',
        // override/add rules settings here, such as:
         'vue/no-unused-vars': 'error'
    }
}