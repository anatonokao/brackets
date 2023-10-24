module.exports = function check(str, bracketsConfig) {
  bracketsConfig = bracketsConfig.map(config => config.join(''))
  console.log(bracketsConfig)
  let lastLength = str.length
  while (str.length) {
    bracketsConfig.forEach(config => {
      str = str.replaceAll(config, '')
    })
    if (lastLength === str.length) return false
    lastLength = str.length
  }
  return true
}