//import express, mentorRoutes
import express from 'express';
import mentorRoutes from "./routers/mentorRoutes";
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(mentorRoutes);

app.get("/", (req, res)=>{
    res.status(200).send({message: "api is live!"})
})
