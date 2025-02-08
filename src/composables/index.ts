import { debounce as _debounce, throttle as _throttle } from 'throttle-debounce';

const dictstore = useDictStore()
export const location = () => useLocationStore()
export const setting = () => useSettingStore()
export const user = () => useUserStore()
export const dict = dictstore.dict
export const _dict = dictstore._dict
export const dictSync = dictstore.dictSync
export const _dictSync = dictstore._dictSync

export const throttle = _throttle
export const debounce = _debounce
