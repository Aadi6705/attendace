const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(__dirname, 'student.db');
const db = new Database(dbPath, { verbose: console.log });

// Enable foreign keys
db.pragma('foreign_keys = ON');

function initDatabase() {
  // Create tables
  db.exec(`
    CREATE TABLE IF NOT EXISTS students (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      roll_no TEXT UNIQUE NOT NULL,
      name TEXT NOT NULL,
      course TEXT NOT NULL,
      semester INTEGER NOT NULL
    );
    
    CREATE TABLE IF NOT EXISTS attendance (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      student_id INTEGER NOT NULL,
      subject TEXT NOT NULL,
      percentage INTEGER NOT NULL,
      FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE
    );
    
    CREATE TABLE IF NOT EXISTS marks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      student_id INTEGER NOT NULL,
      subject TEXT NOT NULL,
      marks INTEGER NOT NULL,
      FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE
    );
  `);

  // Seed data if empty
  const count = db.prepare('SELECT COUNT(*) as count FROM students').get();
  
  if (count.count === 0) {
    console.log('Seeding initial data...');
    
    // Insert students
    const insertStudent = db.prepare('INSERT INTO students (roll_no, name, course, semester) VALUES (?, ?, ?, ?)');
    const adityaInfo = insertStudent.run('101', 'Aditya', 'Computer Science', 5);
    const rahulInfo = insertStudent.run('102', 'Rahul', 'Computer Science', 5);
    
    const adityaId = adityaInfo.lastInsertRowid;
    const rahulId = rahulInfo.lastInsertRowid;
    
    // Insert attendance
    const insertAttendance = db.prepare('INSERT INTO attendance (student_id, subject, percentage) VALUES (?, ?, ?)');
    insertAttendance.run(adityaId, 'Java', 85);
    insertAttendance.run(adityaId, 'DBMS', 78);
    insertAttendance.run(adityaId, 'OS', 92);
    
    insertAttendance.run(rahulId, 'Java', 75);
    insertAttendance.run(rahulId, 'DBMS', 82);
    
    // Insert marks
    const insertMarks = db.prepare('INSERT INTO marks (student_id, subject, marks) VALUES (?, ?, ?)');
    insertMarks.run(adityaId, 'Java', 85);
    insertMarks.run(adityaId, 'DBMS', 78);
    insertMarks.run(adityaId, 'OS', 92);
    
    insertMarks.run(rahulId, 'Java', 70);
    insertMarks.run(rahulId, 'DBMS', 85);
    
    console.log('Database seeded successfully.');
  } else {
    console.log('Database already has data. Skipping seed.');
  }
}

// Initialize on load
initDatabase();

module.exports = db;
