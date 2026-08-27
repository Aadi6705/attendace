# PRD.md — Product Requirements Document

## 1. Project Name
**Student Attendance & Marks Viewer**

## 2. Purpose
A basic full-stack web application, built for a college/university project, that lets a user look up a student by roll number and view that student's attendance percentage and marks, subject by subject, on a single page.

The scope is intentionally kept small: the goal is to clearly demonstrate the flow **React → REST API → Express → SQL Database → API Response → React UI**, without adding unnecessary complexity (no authentication, no Redux, no MongoDB, no Docker).

## 3. Target Users
- **Primary user:** A student or evaluator using the app to search for a roll number and see academic results.
- **Secondary user:** The project developer/demonstrator (e.g., presenting it as a college assignment).

There are no distinct user roles (no Admin/Faculty/Student split) — this is a single, public-facing lookup tool.

## 4. Problem Statement
Students and faculty often need a quick, centralized way to check a student's attendance and marks without digging through spreadsheets or separate systems. This project demonstrates a minimal, working version of that lookup flow.

## 5. Goals
- Let a user enter a roll number and retrieve that student's profile, attendance, and marks.
- Keep the stack simple and easy to explain in a college project review.
- Ensure the full request/response cycle (frontend → backend → database → frontend) is visibly correct and demonstrable.

## 6. Non-Goals (Out of Scope)
- User authentication / login / roles
- Editing or adding attendance/marks from the UI (read-only for v1)
- Multi-page navigation or routing
- State management libraries (Redux, Zustand, etc.)
- Any database beyond SQLite
- Deployment/containerization (Docker, cloud hosting) — local demo only

## 7. Core Features

| # | Feature | Description |
|---|---------|-------------|
| 1 | Roll number search | Input field + search button to look up a student by roll number |
| 2 | Student profile display | Show name, roll number, course, and semester |
| 3 | Attendance display | Table/list of subject-wise attendance percentage |
| 4 | Marks display | Table/list of subject-wise marks (out of 100) |
| 5 | Error/empty states | Friendly message when a roll number isn't found or input is invalid |

## 8. User Flow
1. User opens the single-page app.
2. User types a roll number (e.g., `101`) into the search box.
3. User clicks **Search**.
4. Frontend calls `GET /api/student/:rollNo`.
5. Backend queries SQLite across `students`, `attendance`, and `marks` tables.
6. Backend returns a combined JSON response.
7. Frontend renders the student's profile, attendance table, and marks table on the same page.

## 9. Success Criteria
- Entering a valid roll number correctly displays that student's profile, attendance, and marks.
- Entering an invalid/unknown roll number shows a clear "not found" message instead of breaking.
- The app runs locally end-to-end (frontend + backend + SQLite) with no external services required.
- The codebase is simple enough to walk through and explain line-by-line for a project demo.

## 10. Assumptions
- Data is seeded/preloaded in SQLite (no bulk import UI needed for v1).
- Single concurrent user (demo/local use), so no need to handle high concurrency.
