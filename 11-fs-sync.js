const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

//console.log(first, second)
console.log('starting the next task')
writeFileSync(
    './content/result-sync.txt',
    `concatenating 1st and 2nd: ${first}, ${second} `,
    {flag: 'a'}
)
console.log('done with this task')
