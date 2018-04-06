var prompt = require('prompt');
var fs = require('fs');

var runtimes = [
    'nodejs',
    'nodejs4.3',
    'nodejs6.10',
    'nodejs8.10',
];
var runtimeOptions = '0) ' + runtimes.reduce((prev, cur, i) => {
    return prev + '\n' + i + ') ' + cur;
}) + '\n';

var lambdaFunctionCreationArgs = [
    {
        name: 'functionName',
        description: 'Enter the function name',
        type: 'string',
        pattern: /[\w\d-_]+/g,
        message: 'Function name must contain only letters, numbers, hyphens, or underscores',
        required:  true
    },
    {
        name: 'role',
        description: 'The ARN for the function\'s IAM Role to run with',
        type: 'string',
        required: true
    },
    {
        name: 'runtime',
        description: 'Runtime environment for the function (corresponding to the ones in the ' +
            'AWS Lambda Console)\n' + runtimeOptions,
        type: 'string',
        pattern: /\d+/g,
        message: 'Choose a runtime (as a number) from the list',
        required: true
    },
    {
        name: 'handler',
        description: 'Handler for the function',
        type: 'string',
        default: 'index.handler',
        required: true
    }
]

prompt.message = '';
prompt.colors = false;
prompt.start();

prompt.get(lambdaFunctionCreationArgs, function(error, result) {
    console.log('Command-line input received: ');

    if (result) {
        // console.log('function-name: ' + result.functionName);
        // console.log('role: ' + result.role);
        // console.log('runtime: ' + runtimes[+result.runtime]);
        // console.log('handler: ' + result.handler);
        const functionCreationConfig = {
            functionName: result.functionName,
            role: result.role,
            runtime: runtimes[+result.runtime],
            handler: result.handler
        };
        fs.writeFile('function-creation-config.json', JSON.stringify(functionCreationConfig, null, '\t'), function(error) {
            if (error) {
                throw error;
            }
            console.log('Saved AWS Lambda function configuration!');
        });
    }
});