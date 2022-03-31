const path = require('path')

console.log(path.sep)

//prints the file path
const filePath = path.join('\content', 'subfolder', 'test.txt')
console.log(filePath) 

//prints the  base file name
const base = path.basename(filePath)
console.log(base)


const absolute = path.resolve(__dirname,'content', 'sunfolder', 'test.txt')
console.log(absolute)