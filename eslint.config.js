import unocss from '@unocss/eslint-config/flat'

export default [
  unocss,
  {
    rules: {
      'vue/singleline-html-element-content-newline': 'off',
      'vue/multiline-html-element-content-newline': 'off',
      'no-console': 'off',
    },
  },
  // other configs
]
