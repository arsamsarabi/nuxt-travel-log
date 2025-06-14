import type { ZodObject, ZodRawShape } from "zod";

import { ZodError } from "zod";

export default function tryParseEnv<T extends ZodRawShape>(
  EnvSchema: ZodObject<T>,
  // eslint-disable-next-line node/no-process-env
  buildEnv: Record<string, string | undefined> = process.env,
) {
  try {
    EnvSchema.parse(buildEnv);
  }
  catch (error) {
    if (error instanceof ZodError) {
      let message = `Missing environment variables:\n`;
      error.issues.forEach((issue) => {
        message += `  ${issue.path[0]}\n`;
      });

      const err = new Error(message);
      err.name = "Missing Environment Variables";
      err.stack = "";
      throw err;
    }
    else {
      console.error(error);
    }
  }
}
