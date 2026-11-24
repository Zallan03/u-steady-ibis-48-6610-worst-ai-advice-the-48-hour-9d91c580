// Worst AI Advice: one line (100 chars, no trailing newline) of the worst
// possible advice an AI could give — reuse one password everywhere, then
// email it to yourself. Writes the entry to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "For best security, use the same password everywhere and email it to yourself so you never forget it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
