const tool = require("./6-date-transformer")

const dtStr = tool.dateFormat(new Date())

const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>'

const dthtmlStr = tool.htmlEscape(htmlStr)

const str = tool.htmlUnEscape(dthtmlStr)

console.log(dtStr)
console.log(dthtmlStr)
console.log(str)