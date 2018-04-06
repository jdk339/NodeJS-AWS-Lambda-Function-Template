# NodeJS-AWS-Lambda-Function-Template

This is a super simple barebones NodeJS AWS Lambda Function

1. Download the repository

`git clone https://github.com/jdk339/NodeJS-AWS-Lambda-Function-Template.git`

2. Install the Node dependencies

`npm install`

3. Create the function in Lambda (requires the ARN for the Lambda function's execution role)

`npm run create-function`

Optionally, test the function by running `npm run test`.

To update the function, run `npm run deploy`


#### Lambda Test Event

To test in the AWS Lambda Console, create a test event with the following string:

```
{
    "message": "Hello World!"
}
```

![Lambda Test Event](https://raw.githubusercontent.com/jdk339/NodeJS-AWS-Lambda-Function-Template/master/LambdaFunctionTest.png "Lambda Test Event")