import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "src/lib/database/schema.ts",
  out: "drizzle",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_dw1sLOMEj0PJ@ep-twilight-sea-alz1ybya-pooler.c-3.eu-central-1.aws.neon.tech/website?sslmode=require&channel_binding=require",
  },
  migrations: { table: "__drizzle_migrations", schema: "public" },
  casing: "camelCase",
});
