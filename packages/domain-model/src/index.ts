export interface Vessel {
  id: string; // uuid
  imo?: string;
  mmsi?: string;
  name?: string;
  flag?: string;
  build_year?: number;
  length_m?: number;
  beam_m?: number;
  tonnage?: number;
}

export interface AISObservation {
  id: string; // uuid
  raw: string; // raw payload or path to S3
  provider: string;
  observed_at: string; // ISO
  received_at: string; // ISO
  lat?: number;
  lon?: number;
  sog?: number;
  cog?: number;
}

export interface Source {
  id: string;
  name: string;
  license?: string;
}

export interface EvidenceItem {
  id: string;
  source_id: string;
  fact_id: string;
}
