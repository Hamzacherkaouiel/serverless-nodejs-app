const { serial } = require('drizzle-orm/pg-core')
const { timestamp } = require('drizzle-orm/pg-core')
const {text,pgTable} =require('drizzle-orm/pg-core')

const LeadTable= pgTable('leads',{

    id: serial('id').primaryKey().notNull(),
    email: text('email').notNull(),
    description: text('description').default("this is the description"),
    createdAt: timestamp('createdat').defaultNow()
}
)
module.exports.LeadTable=LeadTable
