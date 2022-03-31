//importing buildin module
const { readFile, writeFile } = require('fs')

console.log('start')
//reading the txt file
readFile('./content/first.txt', 'utf8', (err, result) =>{
    if(err){
        console.log(err)
        return
    }
    const first = result
    console.log('test result', result)
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile(
            './content/result-async.txt',
            `Here is the rsult from nested function: ${first}, ${second}`,
    (err, result) => {
        if(err){
            console.log(err)
            return
        }
        //console.log(result)
        console.log('done with this task')
    })
    })
})
console.log('starting the next')