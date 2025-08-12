const serverless = require("serverless-http");
const express = require("express");
const{dbClient}=require('./db/client')
const app = express();
const crud =require('./db/crud')
const validator= require('./db/validator')
app.use(express.json())


app.get("/", async (req, res, next) => {
  const sql=await dbClient()
  const results=await sql`select now();`

  return res.status(200).json({
    message: "Hello from hamza !",
    resultat: results
  });
});



app.get("/leads", async(req, res, next) => {
  const results=await crud.getLeads()
  return res.status(200).json({
    data: results,
  });
});


app.post("/leads",async (req,res,next)=>{
  const body=await req.body
  const {data,hasError,message}= await validator.validateLead(body)
  if(hasError){
    return res.status(400).json({
      message:message
    })
  }

  //const {email}=data
  const results =await crud.addLeads(data);
  return res.status(201).json({
    message: "created",
    results: results
  })
})


app.get("/leads/:id",async(req,res,next)=>{
  const id=req.params.id
  const results =await crud.getSingleLead(id);
  return res.status(200).json({
    data: results
  })
})



app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});
app.listen(3000,()=>console.log("server running"))

exports.handler = serverless(app);
