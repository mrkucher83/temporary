// eslint-disable-next-line @typescript-eslint/no-var-requires
const prettier = require('./.prettierrc.js');

module.exports = {
  // parser: '@typescript-eslint/parser',
  plugins: ['import', 'prettier', '@typescript-eslint', 'vue'],
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/babel',
    // 'prettier/standard',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.vue'],
        moduleDirectory: ['node_modules'],
      },
    },
  },

  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  // extends: [
  //   '@nuxtjs/eslint-config-typescript',
  //   'prettier',
  //   'prettier/vue',
  //   'plugin:prettier/recommended',
  //   'plugin:nuxt/recommended',
  // ],
  // plugins: ['prettier'],
  // add your custom rules here
  rules: {
    '@typescript-eslint/no-throw-literal': 'off',
    '@typescript-eslint/no-dupe-class-members': 'off',
    '@typescript-eslint/no-implied-eval': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    'consistent-return': 'off',
    'no-underscore-dangle': ['error', { allow: ['__typename'] }],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
      },
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-param-reassign': ['error', { props: false }],
    'prettier/prettier': [2, prettier],
    'import/prefer-default-export': 0,
    curly: 1,
    'no-continue': 'warn',
  },
};
