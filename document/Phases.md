# Phases.md — Build Phases

The project is broken into small, verifiable phases. Complete and test each phase before moving to the next.

## Phase 0 — Project Setup
- Create the root folder `student-management/` with `frontend/` and `backend/` subfolders (per `Architecture.md`).
- Initialize `backend/` with `npm init` and install `express` + a SQLite driver.
- Initialize `frontend/` with a React app (e.g., via Vite).
- Confirm both can run independently (`npm run dev` for frontend, `node server.js` for backend) with placeholder content.

**Done when:** both frontend and backend start with no errors, showing placeholder pages/responses.

## Phase 1 — Database Layer
- Create `student.db` and the three tables: `students`, `attendance`, `marks`.
- Write `database.js` to handle the SQLite connection.
- Seed 2–3 sample students with attendance and marks rows (matching the example data in `Architecture.md`).

**Done when:** running a manual query against `student.db` returns the seeded data correctly.

## Phase 2 — Backend API
- Build `routes/studentRoutes.js` with `GET /api/student/:rollNo`.
- Join/query across the three tables and shape the response JSON exactly as specified in `Architecture.md`.
- Handle the "student not found" case with a `404` and error JSON.
- Wire the route into `server.js`.

**Done when:** hitting `GET /api/student/101` in a browser or Postman returns the correct combined JSON, and an unknown roll number returns a clean 404.

## Phase 3 — Frontend Search UI
- Build `SearchStudent.jsx`: an input field for roll number + a search button.
- Wire up local state (`useState`) to hold the entered roll number.
- On submit, call the backend endpoint via `fetch`/Axios.

**Done when:** typing a roll number and clicking Search successfully triggers the API call (check the network tab / console log of the response).

## Phase 4 — Frontend Result Display
- Build `StudentResult.jsx` to render:
  - Student profile (name, roll no, course, semester)
  - Attendance table (subject + percentage)
  - Marks table (subject + marks)
- Connect it to `App.jsx` so a successful search populates and displays this component.

**Done when:** searching a valid roll number shows the full profile, attendance, and marks on the page.

## Phase 5 — Error & Empty States
- Show a clear message when the roll number is not found (based on the backend's 404).
- Show a clear message on network/server errors.
- Prevent search when the input is empty.

**Done when:** searching an invalid roll number, or hitting a network error, shows a friendly message instead of a blank/broken UI.

## Phase 6 — Polish Pass
- Apply the styling/theme from `Design.md`.
- Clean up spacing, alignment, and table formatting.
- Add basic loading state (e.g., "Searching…") while the API call is in flight.

**Done when:** the single page looks presentable and matches `Design.md`, and all prior phases still work correctly.

## Phase 7 — Demo Readiness
- Do a full run-through: start backend, start frontend, search a valid roll number, search an invalid one.
- Prepare a short explanation of the data flow (per `Architecture.md`) for the project review/demo.

**Done when:** the app can be demoed end-to-end without errors, and the flow can be explained clearly.
