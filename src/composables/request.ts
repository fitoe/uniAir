import AdapterUniapp from '@alova/adapter-uniapp'
import { createAlova } from 'alova'

const instance = createAlova({
  ...AdapterUniapp(),
  baseURL: import.meta.env.VITE_API_PATH,
  timeout: 3000,
  cacheLogger: import.meta.env.NODE_ENV === 'development',
  cacheFor: {
    GET: 0,
    POST: 0,
  },
  async beforeRequest(method) {
    // 请求拦截
  },
  responded: {
    onSuccess: async (response) => {
      switch (response.statusCode) {
        case 200:
          return response.data
        case 401:
          throw new Error('请先登录')
        case 404:
          throw new Error('接口不存在')
        case 500:
          throw new Error(response.data?.message || '服务器错误')
        default:
          break
      }
    },
    onError: (error) => {
      console.error('请求错误:', error)
      return Promise.reject(error)
    },
  },
})
const baseURL = import.meta.env.VITE_API_PATH
const requestparams = {
  enableHttp2: true,
  sslVerify: true,
}

export const get = <T>(url: string, params?: object, config: object = { baseURL }) => instance.Get<T>(url, { params, ...config, ...requestparams })

export const post = <T>(url: string, data?: object, config: object = { baseURL }) => instance.Post<T>(url, data, config)

export const del = <T>(url: string, data?: object, config: object = { baseURL }) => instance.Delete<T>(url, data, config)

export const put = <T>(url: string, data?: object, config: object = { baseURL }) => instance.Put<T>(url, data, config)

export const upload = <T>(url: string, data: { name: string, filePath: string, formData: object }, config: object = {}) => instance.Post<T>(url, data, { requestType: 'upload', fileType: 'image', ...config })
