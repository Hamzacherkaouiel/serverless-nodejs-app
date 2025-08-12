const secrets= require('../lib/secrets-management')
const {neon,neonConfig} =require( '@neondatabase/serverless')
const {drizzle} =require('drizzle-orm/neon-http')



async function dbClient() {
  const dbUrl=await secrets.getSecretsData()
  neonConfig.fetchConnectionCache=true
  let sql=neon(dbUrl)
  return sql
}

async function getDrizzleClient() {
  const dbclient=await dbClient();
  return drizzle(dbclient)
}


module.exports.dbClient=dbClient
module.exports.getDrizzleClient=getDrizzleClient