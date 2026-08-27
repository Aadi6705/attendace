# Rules.md — AI Coding Boundaries

These rules govern how an AI coding assistant (e.g., Claude Code, Cursor, Antigravity, etc.) should behave while building this project.

## 1. Scope Discipline
- Only build what's defined in `PRD.md`, `Architecture.md`, and `Phases.md`.
- Do not add features, pages, or libraries that aren't listed there, even if they seem like an "obvious" improvement.
- If something is needed that isn't covered by the docs, **stop and ask** rather than assuming.

## 2. Approved Libraries / Tools
**Frontend:** React (functional components + hooks only), plain CSS, Axios or native `fetch`.
**Backend:** Node.js, Express.js.
**Database:** SQLite (via a lightweight driver, e.g. `better-sqlite3` or `sqlite3`).

## 3. Explicitly Avoid
- Redux, MobX, Zustand, or any other global state library
- MongoDB or any non-SQLite database
- Authentication/authorization libraries (no login system in v1)
- Docker or any containerization
- CSS frameworks (Tailwind, Bootstrap, MUI) unless the user asks for one later
- TypeScript, unless the user explicitly asks for it
- Any backend framework other than Express (no NestJS, no Fastify)

## 4. Error Handling
- Every API route must handle the "not found" case (unknown roll number) with a proper `404` and a clear JSON error message — never let the server crash or return an empty 200.
- Wrap database calls in try/catch; log the actual error server-side, but return a generic, user-safe error message in the response.
- On the frontend, always handle the fetch failure case (network error, 404, 500) — show a message to the user instead of leaving the UI blank or stuck on a loading state.
- Validate that the roll number input is non-empty before firing a request.

## 5. Code Style
- Keep components small and single-purpose (matches the folder structure in `Architecture.md`).
- Use clear, descriptive variable and function names — this is a project the student needs to explain and defend, not just get working.
- Add short comments explaining non-obvious logic (e.g., the SQL joins), since the code needs to be walked through in a review/demo.
- Keep the single-page layout simple; do not introduce client-side routing.

## 6. Working Process
- Work in the phases defined in `Phases.md`, in order. Do not skip ahead to a later phase before the current one is functionally complete.
- Pause and confirm with the user before making any architecture-level decision not already covered in `Architecture.md` (e.g., changing the DB schema, adding a new table, changing the API shape).
- After each meaningful chunk of work, update `Memory.md` with what was completed, current file state, and what's next — so context isn't lost between sessions.
- Do not silently rewrite or restructure existing working code "for cleanliness" — propose the change first.

## 7. Data Handling
- Treat the three-table schema (`students`, `attendance`, `marks`) in `Architecture.md` as fixed unless the user approves a change.
- Seed data may be hardcoded/inserted directly for demo purposes — no need to build an admin import UI.

## 8. What the AI Should NOT Do
- Should not add authentication, roles, or permissions.
- Should not add pages/routes beyond the single search-and-result page.
- Should not introduce new dependencies without listing them and getting confirmation first.
- Should not assume production deployment concerns (env secrets, HTTPS, scaling) — this is a local/demo project.
