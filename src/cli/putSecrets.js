const secrets=require('../lib/secrets-management')
require('dotenv').config()

const args=process.argv.slice(2)
if(args.length!==2){
    console.log("retrieved values")
    process.exit(1)
}


if (require.main === module) {
    console.log("update url")

    const[stage,dbUrl]=args
    
    secrets.putSecretsData(stage,dbUrl).then((val)=>{
        console.log(val)
        process.exit(0)
    }).catch(error=>{
        console.log(`error${error}`)
        process.exit(1)
    })
}