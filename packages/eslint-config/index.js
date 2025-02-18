require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  env: {
    node: true,
  },
  parser: 'vue-eslint-parser',
  extends: [
    // add more generic rulesets here
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'prettier',
  ],
  rules: {
    // override/add rules settings here
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
