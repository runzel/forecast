# Proposed Monorepo Tree — GLOBAL MONITOR

apps/
  web/                       # Next.js web UI
  api/                       # TypeScript API (Fastify/NestJS)
  ingestion-gateway/         # Connector SDK + small server
  investigation-worker/      # Python worker (investigation flows)
  geospatial-worker/         # Python worker (map ingestion, clustering)
  entity-resolution-worker/  # Python worker
  alert-worker/              # Notifications and rules
  report-worker/             # PDF and evidence-package generation

packages/
  domain-model/
  api-contracts/
  source-connectors/
  provenance/
  entity-resolution/
  risk-engine/
  geospatial/
  graph-projection/
  authorization/
  design-system/
  test-fixtures/
  configuration/

infra/
  compose/
  helm/
  terraform/
  observability/

docs/
  architecture/
  adr/
  data-sources/
  methodology/
  analyst-handbook/
  legal-and-ethics/

