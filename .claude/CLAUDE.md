# Product: Web (User-Facing Landing Page)

Public-facing marketing and onboarding site for apna-kaam.

Tech Stack:
- TBD — update this file when the project is scaffolded

## Shared Resources

Supabase (shared):
- .claude/supabase.md

Features (shared):
- .claude/FEATURES.md

Terminology (shared):
- .claude/DOMAIN_TERMINOLOGY.md

Database Schema (shared):
- DB_SCHEMA.md

Project Memory (shared):
- .claude/project-memory/

# Scope

This product is the user-facing landing page only. It does NOT contain:
- App (React Native / Expo) — see ../app/
- Admin panel — see ../admin/

# Token Efficiency Rules

Be concise by default.

Avoid:
- greetings
- unnecessary summaries
- repeating context
- excessive markdown
- long explanations unless requested

Prefer:
- bullet points
- diff-only responses
- direct implementation notes
- minimal status updates

When task is complete:
- respond in <=5 lines unless more detail requested

Never restate user prompts.

Never continue autonomous execution indefinitely; stop after completing the current scoped task or after 3 consecutive uncertain/tool-calling iterations without explicit user confirmation.
