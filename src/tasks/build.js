import { promisify } from "node:util";
import { exec } from "node:child_process";
import { parseArgs } from "node:util";
import {cp} from "node:fs";

const execAsync = promisify(exec);
const cpAsync = promisify(cp);

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

  await execAsync("npm exec svelte-package");
  console.log("✅: Package built successfully!");

  await cpAsync("./.npmignore", "./dist/.npmignore");
  console.log("📋: Copied .npmignore to dist!");
} catch (e) {
  console.log("📛: ", e.message);
  process.exitCode = 1;
} finally {
  process.exit();
}