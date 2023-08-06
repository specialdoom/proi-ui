import { promisify } from "node:util";
import { exec } from "node:child_process";
import { cp } from "node:fs";

const execAsync = promisify(exec);
const cpAsync = promisify(cp);

try {
  await cpAsync("./CHANGELOG.md", "./src/__stories__/CHANGELOG.story.md");
  console.log("✅: CHANGELOG.md copied successfully!");

  await execAsync("npm run hst:build");
  console.log("✅: Histoire built successfully!");
} catch (e) {
  console.log("📛: ", e.message);
  process.exitCode = 1;
} finally {
  process.exit();
}