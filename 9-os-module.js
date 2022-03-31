
const os = require('os')
const { uptime } = require('process')

//info about current .user
const user = os.userInfo()
console.log(user) 

//method returns the system upotime in second
console.log(`The system Uptime is ${os.uptime()} seconds`)


//another method
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)