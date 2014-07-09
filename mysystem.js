var os = require('os');

var message='Hier is wat info over je systeem';

var sysarray= new Array('Type: '+os.type()
   , 'Node version: ' +process.version
   , 'Platform: ' + os.platform()
   , 'Hostname: ' + os.hostname()
   , 'Total Memory: ' + os.totalmem()
   , 'Free Memory: ' + os.freemem()
   , 'Uptime: ' + os.uptime()

);

console.log(message);

var arraylen = sysarray.length;

var i = 0;
while(i < arraylen){
   console.log(sysarray[i]);
   i++;
}
