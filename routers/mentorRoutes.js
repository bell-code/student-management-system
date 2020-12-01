//import router from express, and our controller functions

let router = require('express').Router;
import{ createMentor, fetchAllMentors, deleteMentor } from "../controllers/mentorControllers";

router.post("/mentors", createMentor);
router.get("/mentors", fetchAllMentors);
router.delete("/mentors/:id", deleteMentor);

export default router
