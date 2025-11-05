const {defineConfig} = require('eslint/config');
const js = require('@eslint/js');
const vueParser = require('vue-eslint-parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const {FlatCompat} = require('@eslint/eslintrc');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = defineConfig([
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
  {
    extends: compat.extends(
      'plugin:vue/vue3-recommended',
      'plugin:vue/vue3-strongly-recommended',
      'plugin:vue/vue3-essential',
      'eslint:recommended',
      'plugin:storybook/recommended',
    ),
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    languageOptions: {
      parser: vueParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: ['.vue'],
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        // module: 'readonly',
        // require: 'readonly',
        __dirname: 'readonly',
      },
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      // TODO:: remove
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
    },
  },
  {
    files: ['*.cjs', '*.js', '.storybook/**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
    },
  },
]);
