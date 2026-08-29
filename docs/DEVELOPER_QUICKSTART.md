# Developer guide — LOCAL DEV

Commands

- Start infra
  docker compose -f infra/compose/docker-compose.yml up -d

- Install
  pnpm install

- Start API (in a separate terminal)
  pnpm --filter api start

- Start web (placeholder)
  pnpm --filter web dev

Ingest synthetic AIS
- POST the CSV file to http://localhost:3001/ingest/synthetic-ais with form-data field `file`.

