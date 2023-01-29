// 1. 导入moment 包
const moment = require('moment')

// 2. 参考 moment 官方 API 文档，调用对应的方法，对事件进行格式化
// 2.1 调用 moment() 方法，得到当前的时间
// 2.2 针对当前的时间，调用 format() 方法，按照指定的格式进行时间的格式化
const dt = moment().format('YYYY-MM-DD HH:mm:ss')

console.log(dt)