const os = require('os')

const user = os.userInfo()

// console.log(`The system uptime is: ${os.uptime} seconds.`)
console.log(os.totalmem());
console.log(os.freemem());