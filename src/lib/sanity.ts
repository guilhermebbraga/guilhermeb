import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "jbxrm1p7",
  dataset: "production",
  apiVersion: "2026-04-03",
  useCdn: false,
});