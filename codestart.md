# Codestart

Original initial project task (verbatim from the session start):

"üositive  proceed"

---

What this file is for

This file captures the initial prompt that started this work and the current, actionable instructions to get the repository to a working vertical slice. It includes the immediate next steps, how to apply the patch I produced, and developer/run instructions so someone on the team can continue from a clear starting point.

New instructions and next steps

1) Security: revoke any leaked tokens immediately
- If a personal access token (PAT) or any secret was pasted into chat or stored in the repo by accident, revoke it now.
  - GitHub web: Settings → Developer settings → Personal access tokens → find and revoke/delete the token.
  - Also rotate any other credentials exposed (cloud keys, deploy keys).

2) Apply the provided patch (feat-vertical-slice.patch)
- In your local clone of the repository run:
  - git fetch origin
  - git checkout -b feat/vertical-slice
  - Save the file `feat-vertical-slice.patch` to the repository root (the patch was provided by the assistant in the conversation)
  - git apply feat-vertical-slice.patch
  - git add .
  - git commit -m "feat: add vessels endpoints, CI workflow, web proxy, and CI migration helper"
  - git push origin feat/vertical-slice
  - Optionally create a PR: gh pr create --fill --title "feat: vertical slice scaffold" --body "Scaffold: vessels endpoints, CI, web proxy, migrations helper" --base main --head feat/vertical-slice

3) Verify GitHub App installation (optional alternative to patch)
- If you prefer the assistant to push directly, ensure your GitHub App `hyperrunz` is installed on the `runzel/forecast` repository with the following minimum permissions:
  - Repository contents: Read & Write
  - Pull requests: Read & Write
- After installation confirmation, reply to the assistant: "installed, push to branch feat/vertical-slice" and it will attempt the push.

4) Local developer quickstart
- Start infrastructure (compose):
  - docker compose -f infra/compose/docker-compose.yml up -d
- Apply database migrations (requires psql client):
  - chmod +x infra/scripts/run_migrations.sh
  - ./infra/scripts/run_migrations.sh
- Install JS deps (pnpm):
  - pnpm install
- Start services:
  - Ingest server: pnpm --filter api start:ingest (defaults to PORT=3002)
  - API (Nest): pnpm --filter api start (defaults to PORT=3001)
  - Python worker: python3 -m venv venv && source venv/bin/activate && pip install -r geospatial-worker/requirements.txt && python geospatial-worker/worker.py
  - Web UI: pnpm --filter web dev
- Test ingest (upload fixture):
  - curl -F file=@packages/test-fixtures/synthetic-ais.csv http://localhost:3002/ingest/synthetic-ais
- Verify results:
  - GET http://localhost:3001/vessels
  - GET http://localhost:3001/observations
  - MinIO console: http://localhost:9000

5) Immediate next tasks (suggested PRs)
- PR #1: Security and onboarding (README + revoke tokens guidance)
- PR #2: Apply feature branch scaffold (patch) so CI and endpoints are present
- PR #3: Harden ingest: ensure bucket creation on startup, store raw_payload metadata, robust error handling
- PR #4: Worker idempotency and stronger logging

6) How to get help or continue
- If you want me to push, confirm the GitHub App install and reply "installed, push to branch feat/vertical-slice".
- If you applied the patch locally and pushed the branch, tell me the PR URL and I will open follow-up PRs for the next tasks (ingest hardening, worker idempotency, map UI).

---

Recorded by: GitHub Copilot (assistant) — saved codestart.md
