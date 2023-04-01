import express from "express";
const router = express.Router();
import { Student } from "../models/student.model.mjs";  // note that file extension is .mjs, the compiled file 

// get all students
router.get('/getStudents', async (req, res) => {
    try {
        const data = await Student.find({});
        console.log('Successfully retrieved all students!');
        res.status(200).json(data);
    } catch (e) {
        console.log('Error occured while retrieving students: ', e);
        res.status(400).json({ "error": e});
    }
});


// post a student
router.post('/addStudent', async (req, res) => {
    try {
        const data = await Student.create(req.body);
        console.log('A new student has been added to database succuessfully!');
        res.status(200).json(data);
    } catch(e) {
        console.log('Error occured while saving student to database: ', e);
        res.status(400).json({"error": e});
    }
});

export { router };

