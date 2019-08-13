import Cookies from 'js-cookie'
const TokenKey = 'Admin-Token'; // Token键
const MobileKey = 'mobile';// 验证是否登陆的key
const userInfoKey = 'us';// userInfo
// 从cookie中获取ToKen
export function cookieGetToken() {
    return Cookies.get(TokenKey)
}
// 在cookie中设置ToKen
export function cookieSetToken(token) {
    return Cookies.set(TokenKey, token)
}
// 从cookie中删除ToKen
export function cookieRemoveToken() {
    return Cookies.remove(TokenKey)
}



