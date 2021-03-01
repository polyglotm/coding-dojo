module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    'jest/globals': true,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'import/no-extraneous-dependencies': 'off',
    'no-trailing-spaces': [
      'error',
      {
        skipBlankLines: true,
      },
    ],
    'no-unused-vars': [
      'error',
      {
        args: 'none',
      },
    ],
    'max-classes-per-file': ['error', 2],
    // "max-lines-per-function": ["error", 50],
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
    ],
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  plugins: [
    'jest',
  ],
  overrides: [{
    // for files matching this pattern
    files: ['*.ts'],
    // following config will override 'normal' config
    parser: '@typescript-eslint/parser',
    plugins: [
      '@typescript-eslint',
      'jest',
    ],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:jest/recommended',
    ],
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  }],
  settings: {
    'import/resolver': {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
  },
};
