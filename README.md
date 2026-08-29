# GLOBAL MONITOR — README

Developer quickstart (vertical slice)

Prerequisites
- Docker and Docker Compose
- pnpm (v8+)

Start the local dev stack:

1. Start infrastructure

   docker compose -f infra/compose/docker-compose.yml up -d

2. Install dependencies

   pnpm install

3. Start development workspace (once individual apps are implemented)

   pnpm dev

Dev credentials
- Keycloak admin console: http://localhost:8080
  - username: admin
  - password: admin

Notes
- The dev infra uses a synthetic AIS fixture for ingestion. Do not enable external connectors until an architectural review is complete.
