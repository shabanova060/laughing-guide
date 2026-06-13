import { drizzle } from "drizzle-orm/bun-sql";
import { relations } from "~/lib/database/schema";

export const database = drizzle({
  connection: {
    url: "postgresql://neondb_owner:npg_dw1sLOMEj0PJ@ep-twilight-sea-alz1ybya-pooler.c-3.eu-central-1.aws.neon.tech/website?sslmode=require&channel_binding=require",
  },
  casing: "camelCase",
  relations,
});
