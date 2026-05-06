const express = require("express");
const router = express.Router();
const Student = require('../models/Student');

//Post
//Create Student
router.post('/', async (req, res) => {
    try {
        const { name, age, email, studentClass, address, phone } = req.body;
        const newStudent = new Student({
            name,
            age,
            email,
            studentClass,
            address,
            phone
        });
        // Require req validation
        if (!name || !age || !email || !studentClass || !address || !phone) {
            return res.status(400).json({ message: "All fields are mandatory" });
        }

        const existingStudent = await Student.findOne({ email });
        if (existingStudent) {
            return res.status(400).json({ message: "Student already exist with this email" });
        }
        const savedStudent = await newStudent.save();
        res.status(201).json({
            message: "Student created successfully",
            student: savedStudent,
            status: "success"
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Get all students
router.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        return res.status(200).json({
            meessage: "Student fetched successfully",
            student: students,
            status: "success"
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get student by Id
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const student = await Student.findById(id);
        if (!student) {
            return res.status(400).json({ message: "Student not found" });
        }
        return res.status(200).json({
            meessage: "Student fetched successfully",
            student: student,
            status: "success"
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//update a student
router.put('/:id', async (req, res) => {
    try {
        const { name, age, email, studentClass, address, phone } = req.body;
        //required validation
        if (!name || !age || !email || !studentClass || !address || !phone) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const updatedStudent = await Student.findByIdAndUpdate(req.params.id, {
            name,
            age,
            email,
            studentClass,
            address,
            phone
        })
        if (!updatedStudent) {
            return res.status(400).json({ message: 'Student not found' });
        }
        return res.status(201).json({
            meessage: "Student updated successfully",
            student: updatedStudent,
            status: "success"
        })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//delete api
router.delete('/:id', async (req, res) => {
    try {
        const deleteStudent = await Student.findByIdAndDelete(req.params.id);
        if (!deleteStudent) {
            return res.status(400).json({ message: "Student not found" });
        }
        return res.status(200).json({
            meessage: "Student deleted successfully",
            status: "success"
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})



module.exports = router;