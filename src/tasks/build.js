import { promisify } from "node:util";
import { exec } from "node:child_process";
import { parseArgs } from "node:util";

const execAsync = promisify(exec);

const options = {
  release: {
    type: "boolean",
    short: "r"
  },
  prerelease: {
    type: "boolean",
    short: "p"
  }
}

const {
  values: { release, prerelease }
} = parseArgs({ options });

if (!release) {
  console.warn("⚠️: Use `--release` or `--r` to update version!")
}

if (!prerelease) {
  console.warn("⚠️: Use `--prerelease` or `--p` to update prerelease version!")
}

try {
  if (release) {
    await execAsync("npm run release");
    console.log("✅: Version updated successfully!");
  }

  if (prerelease) {
    await execAsync("npm run release -- --prerelease develop --skip.changelog");
  }

  await execAsync("npm exec svelte-package && cp .npmignore dist/");
  console.log("✅: Package built successfully!");
} catch (e) {
  console.log("📛: ", e.message);
  process.exitCode = 1;
} finally {
  process.exit();
}