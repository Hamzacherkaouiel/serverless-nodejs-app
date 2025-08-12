const clients =require('./client')
const schemas=require('./schemas')
const {eq}=require('drizzle-orm')

async function addLeads({email}) {
    const db= await clients.getDrizzleClient()
    const results=await db.insert(schemas.LeadTable).values({

        email:email
    }).returning({timestamp:schemas.LeadTable.createdAt});
    return results
}

async function getLeads() {
    const db = await clients.getDrizzleClient();
    const results= db.select().from(schemas.LeadTable).limit(10)
    return results;
}

async function getSingleLead(id){
    const db =await clients.getDrizzleClient();
    const results =await db.select().from(schemas.LeadTable).where(eq(
        schemas.LeadTable.id,id
    ))
    return results[0];
}

module.exports.addLeads=addLeads
module.exports.getLeads=getLeads
module.exports.getSingleLead=getSingleLead