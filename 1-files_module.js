// 1. import fs module
const fs = require("fs")

// 2. fs.readFile()
function readFile() {
    fs.readFile('./files/1.txt', 'utf8', function(err, result) {
        if (err) {
            return console.log('ERROR: cannot read file!  ' + err.message)
        }
        console.log('SUCCESS: read file. content: ' + result)
    })
}
// readFile() 


// 3. fs.writeFile()
function writeFile() {
    fs.writeFile('./files/2.txt', 'hello node.js', function(err) {
        if (err) {
            return console.log('Error write file' + err.message)
        }
        console.log('success write file.')
    })
}
// writeFile()

// 4. Example - results
function result() {
    // 4.1 readFile
    fs.readFile('/Users/lvhonghua/Desktop/front-end/Node + npm/files/results.txt', 'utf8', function(err, dataStr) {
        if (err) {
            return console.log('read file error!' + err.message)
        } 
        // 4.2 split the blank spance
        const arrOld = dataStr.split(' ')
        // 4.3 new arr
        const arrNew = []
        arrOld.forEach(item => {
            arrNew.push(item.replace('=', ": "))
        })
        // 4.4 new Str
        const newStr = arrNew.join('\r\n')
        // 4.5 fs.writeFile()
        fs.writeFile('./files/results-after.txt', newStr, function(err) {
            if (err) {
                return console.log('error write file!' + err.message)
            } 
            console.log('successfuly written file!')
        })
    })
}
result()