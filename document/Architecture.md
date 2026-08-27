# Architecture.md — Technical Architecture

## 1. Overview
A simple 3-tier architecture: React frontend → Express/Node.js REST API → SQLite database.

```text
React JS
   │
   │  GET /api/student/101
   ▼
Express.js / Node.js
   │
   │  SQL Query
   ▼
SQLite Database
   │
   │  Student data
   ▼
Express.js
   │
   ▼
React JS
   │
   ▼
Display Attendance + Marks
```

## 2. Tech Stack

**Frontend**
- React JS (functional components + hooks, no Redux)
- HTML/CSS (plain CSS, no CSS framework required)
- Axios or native `fetch()` for API calls

**Middle layer**
- Node.js
- Express.js
- REST API (JSON over HTTP, single GET endpoint for v1)

**Database**
- SQLite (file-based, no separate DB server needed — ideal for a college project)

## 3. Database Schema

Three tables, related by `student_id` / `id`:

```text
students
---------
id          INTEGER PRIMARY KEY
roll_no     TEXT
name        TEXT
course      TEXT
semester    INTEGER

attendance
----------
id           INTEGER PRIMARY KEY
student_id   INTEGER (FK -> students.id)
subject      TEXT
percentage   INTEGER

marks
-----
id           INTEGER PRIMARY KEY
student_id   INTEGER (FK -> students.id)
subject      TEXT
marks        INTEGER
```

Example rows:

```text
students
101 | 101 | Aditya | Computer Science | 5
102 | 102 | Rahul  | Computer Science | 5

attendance
101 | 101 | Java | 85
102 | 101 | DBMS | 78
103 | 101 | OS   | 92

marks
101 | 101 | Java | 85
102 | 101 | DBMS | 78
103 | 101 | OS   | 92
```

## 4. API Design

### `GET /api/student/:rollNo`

**Request:** `GET /api/student/101`

**Response (200):**
```json
{
  "student": {
    "rollNo": "101",
    "name": "Aditya",
    "course": "Computer Science",
    "semester": 5
  },
  "attendance": [
    { "subject": "Java", "percentage": 85 },
    { "subject": "DBMS", "percentage": 78 }
  ],
  "marks": [
    { "subject": "Java", "marks": 85 },
    { "subject": "DBMS", "marks": 78 }
  ]
}
```

**Response (404):** returned when the roll number doesn't exist.
```json
{ "error": "Student not found" }
```

## 5. Project / Folder Structure

```text
student-management/
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── components/
│   │   │   ├── SearchStudent.jsx
│   │   │   └── StudentResult.jsx
│   │   └── App.css
│   └── package.json
│
├── backend/
│   ├── server.js
│   ├── database.js
│   ├── student.db
│   ├── routes/
│   │   └── studentRoutes.js
│   └── package.json
│
└── README.md
```

## 6. Component Responsibilities

| File | Responsibility |
|------|-----------------|
| `App.jsx` | Top-level layout, holds search + result state |
| `SearchStudent.jsx` | Roll number input + search button |
| `StudentResult.jsx` | Renders profile, attendance table, marks table |
| `server.js` | Express app setup, middleware, starts server |
| `database.js` | SQLite connection + query helpers |
| `studentRoutes.js` | Defines `/api/student/:rollNo` route and query logic |

## 7. Data Flow Summary
1. React holds the roll number in local state (`useState`).
2. On search, React calls the backend via `fetch`/`axios`.
3. Express route handler queries SQLite (join across the three tables by `student_id`).
4. Express returns a single combined JSON object.
5. React updates state with the response and re-renders the result section.

## 8. Explicitly Excluded From Architecture
- No authentication/session layer
- No ORM (raw SQL queries via a lightweight SQLite driver is sufficient)
- No global state management library
- No routing library (single page, no multi-route navigation)
