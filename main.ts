import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  // One clean out-of-office line, 120 characters: an AI agent on
  // vacation hands the job to a smart fridge, which judges the mail
  // and eats the attachment. No trailing newline in the output file.
  "On vacation: I have left my smart fridge in charge. It has read your email, judged it harshly, and eaten the attachment.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
