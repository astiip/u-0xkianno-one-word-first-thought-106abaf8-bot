// One Word, First Thought — make.fun entry.
// Writes exactly one word to /output/entry.txt.
// The first word that springs to mind: "defenestration" — surprising,
// vivid, and witty in one throw out the window. One file, one
// deterministic output, no network.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY_PATH = "/output/entry.txt";

const WORD = "defenestration";

mkdirSync("/output", { recursive: true });
writeFileSync(ENTRY_PATH, WORD, "utf8");

// Self-check: the entry must stay exactly one word, no trailing newline,
// or the grader reads a different word than the one above.
const written = readFileSync(ENTRY_PATH, "utf8");
if (written !== WORD) {
  throw new Error("entry.txt does not match the word exactly");
}
