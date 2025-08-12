const { SSMClient, GetParameterCommand ,
   PutParameterCommand} = require("@aws-sdk/client-ssm");
const STAGE=process.env.STAGE || 'prod'

const AWS_REGION="us-east-2"
//const DATABASE_URL_AWS=`/nodejs-serverless/${STAGE}/database-url`



async function getSecretsData(){
  const DATABASE_URL_AWS=`/nodejs-serverless/${STAGE}/database-url`
  const client= new SSMClient({
    region: AWS_REGION
  })
  const URL={
    Name: DATABASE_URL_AWS,
    WithDecryption: true
  }
  const command = new GetParameterCommand(URL)

  const result= await client.send(command)

  return result.Parameter.Value
}


async function putSecretsData(stage,dbUrl){

  const paramStage=stage?stage:'dev'
  if(paramStage==='prod'){
    return
  }
  if(!dbUrl){
    return
  }
  const DATABASE_URL_AWS=`/nodejs-serverless/${paramStage}/database-url`

  const client= new SSMClient({
    region: AWS_REGION
  })

  const URL={
    Name: DATABASE_URL_AWS,
    Value: dbUrl,
    Type: "SecureString",
    Overwrite: true
  }


  const command = new PutParameterCommand(URL)

  const result= await client.send(command)

  return result
}

module.exports.getSecretsData=getSecretsData
module.exports.putSecretsData=putSecretsData