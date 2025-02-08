import moment from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import duration from 'dayjs/plugin/duration'
import relativeTime from 'dayjs/plugin/relativeTime'
import timezone from 'dayjs/plugin/timezone'
import 'dayjs/locale/zh-cn'

moment.locale('zh-cn')
moment.extend(relativeTime)
moment.extend(advancedFormat)
moment.extend(customParseFormat)
moment.extend(timezone)
moment.extend(relativeTime)
moment.extend(duration)

export const dayjs = moment
export const toNow = (time: string) => dayjs(time).fromNow()
export const toDate = (time: string) => dayjs(time).format('YYYY-MM-DD')
export const toDateTime = (time: string) => dayjs(time).format('YYYY-MM-DD HH:mm:ss')
