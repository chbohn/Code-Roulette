const fs = require('fs');
const child_process = require('child_process');
 
var workerProcess = child_process.spawn('java');

workerProcess.stdout.on('data', function (data) {
   console.log("" + data);
});

workerProcess.stderr.on('data', function (data) {
   console.log("" + data);
});