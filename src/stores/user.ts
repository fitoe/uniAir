export const useUserStore = defineStore('user', () => {
  const openid = ref('')
  const id = ref()
  const username = ref('')
  const name = ref('')
  const avatar = ref('')
  const remark = ref('')
  const status = ref(0)
  async function login() {
    return new Promise(async (resolve, reject) => {
      // #ifdef H5
      openid.value = ''
      getUserInfo()
      return resolve(openid.value)
      // #endif

      // #ifdef MP-WEIXIN
      try {
        const { code } = await uni.login({ provider: 'weixin' })
        const res = await get('/wechat/openid', { code })
        openid.value = res.openid
        getUserInfo()
        return resolve(openid.value)
      }
      catch (e) {
        console.error(e)
        return reject(e)
      }
      // #endif
    })
  }

  // 获取用户信息
  async function getUserInfo() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await get<User>('/user', { openid: openid.value })
        id.value = res.id
        name.value = res.name
        avatar.value = res.avatar
        remark.value = res.remark
        status.value = res.status
        username.value = res.username
        return resolve(res)
      }
      catch (e) {
        return reject(e)
      }
    })
  }

  return { id, name, avatar, remark, status, username, openid, login, getUserInfo }
}, {
  persist: {
    enabled: true,
  },
})
