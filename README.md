

# Serverless Nodejs Application in the Lambda AWS

This template demonstrates how to develop and deploy a simple Node Express API service running on AWS Lambda using the Serverless Framework.


## Usage

### Deployment

Install dependencies with:

```
npm install
```

and then deploy with:

```
npm run deploy
```

After running deploy, you should see output similar to:

```
serveless-nodejs-app@1.0.0 deploy
> serverless deploy --stage prod --region X



                   
✔ Installed Serverless Framework v4.18.0
Disable auto-updates by adding "frameworkVersion" to your serverless.yml (frameworkVersion: ~4.18.0)

Deploying "serverless-application" to stage "prod" (region)
✔ Service deployed to stack serverless-application (29s)
endpoint: ANY - https://XXXXXX.XXXXXamazonaws.com

functions:
  api: your serverless application lambda (X MB)
```



### Invocation

After successful deployment, you can call the created application via HTTP:

```
curl https://xxxxxxx.execute-api.us-east-1.amazonaws.com/
```

Which should result in the following response:

```json
{ "message": "Hello from root!" }
```

### Local development

The easiest way to develop and test your function is to use the `dev` command:

```
npm run dev
```

This will start a local emulator of AWS Lambda and tunnel your requests to and from AWS Lambda, allowing you to interact with your function as if it were running in the cloud.

Now you can invoke the function as before, but this time the function will be executed locally. Now you can develop your function locally, invoke it, and see the results immediately without having to re-deploy.

When you are done developing, don't forget to run `npm run deploy` to deploy the function to the cloud.
