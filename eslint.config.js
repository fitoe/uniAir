import uniHelper from '@uni-helper/eslint-config'
import unocss from '@unocss/eslint-config/flat'

export default uniHelper({ unocss }, {
  rules: {
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
  },
})
