import express from "express"

const app = express();

// https://hooks.zapier.com/hooks/catch/19600626/2udryib/

app.post("hooks/catch/:userId/:zapId",(req,res)=>{
     const userId = req.params.userId
     const zapId = req.params.zapId

     //store in DB a new trigger
     // push in on to a queue(redis/kafka) 
})