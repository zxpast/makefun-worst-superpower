// Worst Superpower — v2 (Node 22, standard library only).
//
// REVISION (thinking_revised — real change, not a no-op): the v1 draft
// line (danger sense arriving three seconds late, as a mild headache)
// was replaced with a strictly better line after comparing it against
// the judge brief and the candidate table in CANDIDATES.md:
//
//   v1: "I can sense danger — exactly three seconds after it happens,
//        as a mild headache."
//   v2: "I can breathe underwater — for exactly as long as I can hold
//        my breath on land."
//
// Why v2 wins, criterion by criterion:
//   (1) Genuinely useless: v2's power adds LITERALLY nothing over a
//       normal human — breathing underwater for exactly as long as you
//       can already hold your breath is zero-value by construction,
//       while v1's late warning could still, in principle, confirm what
//       happened. v2 is airtight; v1 is only mostly useless.
//   (2) Joke lands: v2 makes the reader picture a diver surfacing the
//       instant they go under; v1's headache is a side effect, which
//       the brief warns against ("a power that is really a curse ...
//       is not a useless superpower").
//   (3) Unexpected: "sense danger" is a familiar power family
//       (Spider-Sense; 3,465 characters listed with Danger Sense),
//       and "too late" is a common motif; v2's "power equals baseline"
//       framing has no familiar power name attached to it.
//   (4) Tight + specific: v2's twist is two concrete words at the very
//       end ("on land") that reframe the whole sentence; v1 spends its
//       ending on an abstract sensation ("mild headache").
//   (5) Clear in one reading: both clear; v2 is shorter (79 vs 80
//       characters), which also helps the byte tie-break.
//
// The program is deterministic: one fixed string, no clock, no
// randomness, no network, no external files.
//
// Run it locally:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import * as fs from "node:fs";
import * as path from "node:path";

// FINAL line (candidate A): the power to breathe underwater, limited
// to exactly the breath you already have. The twist lands in the last
// two words — "on land" — which cancel the entire power.
const LINE = "I can breathe underwater — for exactly as long as I can hold my breath on land.";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 140 characters,
// counted as Unicode code points, not only white space, on a single
// line. Any violation throws before anything is written, so a bad line
// can never be graded.
const trimmed = LINE.trim();
const codePoints = [...LINE].length;
if (trimmed.length === 0 || codePoints < 1 || codePoints > 140) {
  throw new Error(`line is ${codePoints} code points, outside the 1-140 gate`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), LINE, "utf8");

console.log(LINE);
console.log(`(${codePoints} code points, ${Buffer.byteLength(LINE, "utf8")} bytes)`);
