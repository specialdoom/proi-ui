import { promisify } from "node:util";
import { exec } from "node:child_process";
import { parseArgs } from "node:util";

const execAsync = promisify(exec);

const options = {
  release: {
    type: "boolean",
    short: "r"
  }
}

const {
  values: { release }
} = parseArgs({ options });

if (!release) {
  console.warn("⚠️: Use `--release` to update version!")
}

try {
  if (release) {
    await execAsync("npm run release");
    console.log("✅: Version updated successfully!");
  }

  await execAsync("npm exec svelte-package && cp .npmignore dist/");
  console.log("✅: Package built successfully!");
} catch (e) {
  console.log("📛: ", e.message);
  process.exitCode = 1;
} finally {
  process.exit();
}