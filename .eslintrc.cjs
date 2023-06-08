// eslint-disable-next-line no-unused-vars
const { Linter } = require('eslint');
const airbnbStyle = require('eslint-config-airbnb-base/rules/style');

/**
 * @type {Linter.ConfigOverride}
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'react',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      plugins: ['react-hooks'],
      extends: ['eslint-config-airbnb/rules/react', 'standard-with-typescript'],
      parserOptions: {
        project: ['./tsconfig.json', './tsconfig.node.json'],
      },
      rules: {
        'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
        'react/react-in-jsx-scope': ['off'],
        'react/jsx-no-constructed-context-values': 'off',
        'react/no-array-index-key': 'off',
        'react/require-default-props': 'off',
        'react/prop-types': 'off',
        // 检查 Hooks 的使用规则
        'react-hooks/rules-of-hooks': 'error',
        // 检查依赖项的声明
        'react-hooks/exhaustive-deps': 'warn',
        // 这条需要关闭，因为会和 react/jsx-indent 这条规则冲突
        'react/jsx-closing-tag-location': 'off',
        'react/jsx-key': 'error',

        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/semi': ['error', 'always'],
      },
    },
  ],
  rules: {
    ...airbnbStyle.rules, // 使用airbnb的基础规则
    // 'prefer-template': 'error',
    // 'object-curly-spacing': ['error', 'always'],
    // 'no-tabs': 'off',
    // 'max-len': [
    //   'error',
    //   180,
    //   2,
    //   {
    //     ignoreUrls: true,
    //     ignoreComments: false,
    //     ignoreRegExpLiterals: true,
    //     ignoreStrings: true,
    //     ignoreTemplateLiterals: true,
    //   },
    // ],
    // 'no-param-reassign': [
    //   'error',
    //   {
    //     props: false,
    //   },
    // ],
    // 'no-multi-spaces': 'error',
  },
};
