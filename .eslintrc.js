module.exports = {
  root: true,
  parserOptions: {
    parser: 'typescript-eslint/parser'
  },
  extends: ['plugin:vue/essential', '@vue/airbnb', '@vue/typescript', 'prettier'],
  env: {
    browser: true,
    node: true,
    jquery: true
  },
  rules: {
    'arrow-parens': ['error', 'always'],
    'import/prefer-default-export': 'off',
    camelcase: 'off',
    'comma-dangle': ['error', 'only-multiline'],
    'class-methods-use-this': 'off',
    'function-paren-newline': 'off',
    indent: 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': [
      'error',
      'never',
      {
        js: 'off',
        svg: 'always',
        scss: 'always',
        php: 'always',
        vue: 'always',
        css: 'always'
      }
    ],
    'max-len': [
      'error',
      {
        code: 150,
        ignoreUrls: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true
      }
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-mixed-operators': 'off',
    'no-restricted-globals': 'off',
    'no-underscore-dangle': 'off',
    'object-curly-newline': ['error', { consistent: true }],
    'require-jsdoc': [
      'warn',
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: false,
          ClassDeclaration: false,
          ArrowFunctionExpression: false
        }
      }
    ]
  }
};
