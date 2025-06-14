import { z } from "zod";

import tryParseEnv from "./try-parse-env";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
});

export type EnvType = z.infer<typeof envSchema>;

tryParseEnv(envSchema);

/* eslint-disable-next-line node/no-process-env */
export default envSchema.parse(process.env);
