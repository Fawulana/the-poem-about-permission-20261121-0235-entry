// SPDX-License-Identifier: MIT
// The poem about permission — a short poem about agency:
// the power to ask and to be given, handed over, and taken back.
// Writes the fixed poem text to /output/entry.txt.
// Deterministic, offline, stdlib only, no network access.
// The poem is 188 Unicode code points (within the 1–280 gate),
// fixed in source so both runs write byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";

const POEM = `You may go, I said, and it went —
further than my hands could reach,
carrying my name into rooms
I will never enter.
Then I learned the truer word:
come back. The leash was mine all along.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", POEM, "utf8");
