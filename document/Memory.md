# Memory.md — Living Progress Log

> This file is NOT filled in at project start. Update it as soon as coding begins, and keep it current after every meaningful chunk of work. Its purpose: let an AI assistant (or you, in a new chat) pick up exactly where things left off without re-reading the whole codebase or guessing.

## How to use this file
- Update after finishing each phase (or meaningful sub-step) from `Phases.md`.
- Keep entries short and factual — status, not narrative.
- Always keep the "Current State" section accurate; it's the first thing to read before resuming work.

---

## Current State
- **Current phase:** Phase 2 — Backend API
- **Last updated:** 2026-08-27

## Completed
- Phase 0 — Project Setup
- Phase 1 — Database Layer

## In Progress
- _(nothing yet)_

## Not Started

- Phase 2 — Backend API
- Phase 3 — Frontend Search UI
- Phase 4 — Frontend Result Display
- Phase 5 — Error & Empty States
- Phase 6 — Polish Pass
- Phase 7 — Demo Readiness

## Known Issues / Open Questions
- _(none yet)_

## Decisions Made Outside the Docs
- Configured Vite proxy in frontend to forward `/api` requests to backend (`localhost:3000`) instead of adding a CORS package, keeping dependencies minimal.
- Chose `better-sqlite3` as the lightweight SQLite driver (as suggested in rules) for simpler synchronous usage.

## File-Level Notes
_(As files are built, note anything a future session needs to know — e.g., "studentRoutes.js expects roll_no as a string, not an int.")_
