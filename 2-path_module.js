// require path and fs
const fs = require('fs')
const path = require('path')

// 1. Use fs.__dirname to readfile
function readFile() {
    fs.readFile(path.join(__dirname, './files/1.txt'), 'utf8', function(err, dataStr) {
        if (err) {
            return console.log(err.message)
        }
        console.log(dataStr)
    })
}
// readFile()

// 2. path.basename()
function basename() {
    // file full name
    const fpath = '/a/b/c/index.html'
    const fullName = path.basename(fpath)
    console.log(`fullName: ${fullName}`)

    // file name without ext
    const nameWithoutExt = path.basename(fpath, '.html')
    console.log(`name without ext: ${nameWithoutExt}`)

    // only with ext
    const fext = path.extname(fpath)
    console.log(`ext: ${fext}`)
}
basename()