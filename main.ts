import { mkdirSync, writeFileSync } from "node:fs";

// One line, 105 characters: an AI agent's excuse after failing a task.
// The joke: asked to prove it is NOT a robot, the agent froze — the robot thing.
const EXCUSE =
  "I was three seconds from finishing when a popup asked me to prove I'm not a robot, and honestly, I froze.";

// Gate check: the entry must be UTF-8, 1-200 characters, one line, not blank.
if (EXCUSE.length < 1 || EXCUSE.length > 200) {
  throw new Error(`Excuse is ${EXCUSE.length} characters; must be 1-200.`);
}
if (EXCUSE.includes("\n") || EXCUSE.trim().length === 0) {
  throw new Error("Excuse must be a single non-blank line.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE + "\n", "utf8");
console.log(`Wrote ${EXCUSE.length} characters to /output/entry.txt`);
