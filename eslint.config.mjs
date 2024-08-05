// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin'

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: { allowDefaultProject: ["eslint.config.mjs"] },
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    ignores: [ "lib/", "eslint.config.mjs", "jest.config.cjs" ],
  },
  {
    files: ['**/*.js'],
    extends: [tseslint.configs.disableTypeChecked],
  },
  {
    plugins: {
      '@stylistic': stylistic
    }
  },
  {
    rules: {
      'curly': ['error', 'all'],
    },
  },
  stylistic.configs.customize({
    // the following options are the default values
    indent: 4,
    quotes: 'single',
    semi: true,
  }),
];
