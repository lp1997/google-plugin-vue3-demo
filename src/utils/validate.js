export function valiLink (rule, val, callback) {
  return !val || /^http(|s):\/\//.test(val)
}
export function formatNumber (num) { // 货币格式化
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
export function validPhone (num) { // 手机号格式
  return /^(13|14|15|16|17|18|19)\d{9}$/.test(num)
}
export function validMail (name) { // 邮箱格式
  return /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(name)
}
