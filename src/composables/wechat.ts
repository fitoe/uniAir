// 微信内容审核
interface Result {
  result: {
    suggest: string
    label: number
  }
}
const label: { [key: number]: string } = {
  100: '正常',
  10001: '广告',
  20001: '时政',
  20002: '色情',
  20003: '辱骂',
  20006: '违法犯罪',
  20008: '欺诈',
  20012: '低俗',
  20013: '版权',
  21000: '其他',
}
export function checkText(content: any) {
  return new Promise<void>(async (resolve, reject) => {
    try {
      const res = await post('/wechat/textcheck', { content, openid: user().openid })
      if (res.result.suggest !== 'pass') {
        const text = label[res.result.label] || '违规'
        uni.showToast({ title: `检测到${text}内容，请检查`, icon: 'none' })
        return reject(text)
      }
      resolve()
    }
    catch (e) {
      reject(e)
    }
  })
}
