require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: ["@typescript-eslint/eslint-plugin"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  rules: {
    // override/add rules settings here
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'quotes': ['error','single'],
    'semi': ['error', 'always'],
    'no-unused-vars': [
      'error',
      {
        caughtErrors: 'none',
      },
    ],
  },
  env: {
    node: true,
    // browser: true,
    // es2021: true
  },
};
