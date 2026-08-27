const express = require('express');
const router = express.Router();
const db = require('../database');

router.get('/:rollNo', (req, res) => {
  const { rollNo } = req.params;

  try {
    // 1. Fetch student
    const student = db.prepare('SELECT * FROM students WHERE roll_no = ?').get(rollNo);
    
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    // 2. Fetch attendance
    const attendance = db.prepare('SELECT subject, percentage FROM attendance WHERE student_id = ?').all(student.id);

    // 3. Fetch marks
    const marks = db.prepare('SELECT subject, marks FROM marks WHERE student_id = ?').all(student.id);

    // 4. Shape the response
    res.json({
      student: {
        rollNo: student.roll_no,
        name: student.name,
        course: student.course,
        semester: student.semester
      },
      attendance,
      marks
    });
    
  } catch (err) {
    console.error('Error fetching student data:', err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
