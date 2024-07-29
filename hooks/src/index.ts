import express from "express"
import {PrismaClient} from "@prisma/client";

const client = new PrismaClient();

const app = express();

// https://hooks.zapier.com/hooks/catch/19600626/2udryib/

app.post("hooks/catch/:userId/:zapId",async (req,res)=>{
     const userId = req.params.userId
     const zapId = req.params.zapId
     const body = req.body

     //store in DB a new trigger
     await client.$transaction(async tx =>{
          const run = await client.zapRun.create({
               data: {
                    zapId : zapId,
                    metadata : body
               }
          });
          await client.zapRunOutbox.create({
               data: {
                    zapRunId: run.id
               }
          })
     })

     // push in on to a queue(redis/kafka)
     // this zapid needs to be executed
})