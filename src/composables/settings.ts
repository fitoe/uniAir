export const teamName = '应用名称'
let platform_name
// #ifdef H5
platform_name = 'h5'
// #endif
// #ifdef MP-WEIXIN
platform_name = 'wechat'
// #endif
export const platform = platform_name
export const h5 = platform_name === 'h5'
export const wechat = platform_name === 'wechat'
export const imghost = 'https://domain.com/upload' // 图片上传地址

export const default_location = { longitude: 118.35, latitude: 35.1 }
export const appid = '' // 微信小程序的appid
