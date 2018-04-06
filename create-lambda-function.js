var fs = require('fs');
var exec = require('child_process').exec;

var config = JSON.parse(fs.readFileSync('function-creation-config.json'));

// example: aws lambda create-function --function-name my-lambda-function --runtime nodejs6.10 
//     --role arn:aws:iam::123456677:role/lambda_basic_execution 
//     --handler index.handler --zip-file fileb://archive.zip
var awsLambdaFunctionCreationCommand = 'aws lambda create-function' +
    ' --function-name ' + config.functionName +
    ' --runtime ' + config.runtime +
    ' --role ' + config.role +
    ' --handler ' + config.handler +
    ' --zip-file fileb://archive.zip'

exec(awsLambdaFunctionCreationCommand, (error, stdout, stderr) => {
    if (error) {
        console.error(error);
    }
    console.log(stdout);
});