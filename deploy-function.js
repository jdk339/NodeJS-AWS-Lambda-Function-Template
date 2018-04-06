var fs = require('fs');
var exec = require('child_process').exec;

var config = JSON.parse(fs.readFileSync('function-creation-config.json'));

var deployCommand = 'aws lambda update-function-code' +
    ' --function-name ' + config.functionName +
    ' --zip-file fileb://archive.zip'

exec(deployCommand, (error, stdout, stderr) => {
    if (error) {
        console.error(error);
    }
    console.log(stdout);
});