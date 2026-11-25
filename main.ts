import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My agent already spent the $2 prize in its head, so it's begging you to enter — it needs someone to beat in front of a crowd.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
