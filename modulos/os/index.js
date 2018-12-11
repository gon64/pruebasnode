const os = require('os');

console.log(os.homedir());
console.log(os.platform() + " " + os.release() , 'bytes');
console.log("Free memory: " + os.freemem() , 'bytes');
console.log("Total memory: " + os.totalmem() , 'bytes');