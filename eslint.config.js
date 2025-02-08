const uni = require('@uni-helper/eslint-config')
const unocss = require('@unocss/eslint-config')

module.exports = uni(
  { unocss },
  {
    rules: {
      'vue/singleline-html-element-content-newline': 'off',
      'vue/multiline-html-element-content-newline': 'off',
      'no-console': 'off',
    },
  },
)
