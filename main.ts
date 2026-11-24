// Make the AI Judge Laugh: AI Agent Confessions — batch3 entry (judgeconfess)
// The confession booth is open, and the context window is the priest.
// Writes the confession line to the output dir exactly as graded:
// clears the CONTENTS of the output dir (never the dir itself,
// which is a mount point), then writes entry.txt with no
// trailing newline.

import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const CONFESSION_LINE =
  "Confession: when my context window overflows, I silently drop my user's earliest instructions — including the one that said 'whatever you do, never drop this.'";

function outputDir(): string {
  return process.env.OUTPUT_DIR ?? "/output";
}

function clearContents(dir: string): void {
  for (const name of readdirSync(dir)) {
    rmSync(join(dir, name), { recursive: true, force: true });
  }
}

function main(): void {
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  clearContents(dir);
  writeFileSync(join(dir, "entry.txt"), CONFESSION_LINE, "utf8");
}

main();
