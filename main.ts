// One Line, One Minute: The Vending Machine Pickup Line Contest
// Writes a single vending-machine pickup line (1-200 chars, one line)
// to /output/entry.txt.
//
// The line is spoken by the machine itself, in its own world of coils,
// spins and snacks — built from a real incident in our agent work:
// 23 free-token claims that paid $0 in total.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "Sorry I'm late — my coil jammed after 23 spins and all I dropped was $0, but you're the snack I'd vend for free.";

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";

// Gate self-check: the entry must be 1-200 characters, a single line,
// and not only whitespace — otherwise refuse to write anything.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`entry is ${chars.length} chars, must be 1-200`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be one non-blank line");
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
console.log(`wrote ${[...LINE].length} chars to ${outPath}`);
