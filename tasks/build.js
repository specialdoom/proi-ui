import { readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";
import { exec } from "node:child_process";

const execAsync = promisify(exec);

const $$filename = fileURLToPath(import.meta.url);
const $$dirname = dirname($$filename);

const pacakgeDir = resolve($$dirname, "..");

const tsConfigPath = resolve(pacakgeDir, "tsconfig.json");

const originalTsConfig = await readFile(tsConfigPath);
const mutatedTsConfig = JSON.parse(originalTsConfig);

mutatedTsConfig.exclude = [
  ...(mutatedTsConfig.exclude ?? []),
  "**/*.story.svelte",
  "**/__tests__/**"
];

mutatedTsConfig.compilerOptions = {
  ...(mutatedTsConfig.compilerOptions || { moduleResolution: "Node16" }),
  baseUrl: "",
  rootDir: "lib",
  outDir: "package",
  paths: {}
};

await writeFile(tsConfigPath, JSON.stringify(mutatedTsConfig, null, 2));

const runRelease = process.argv[2] ?? true;

try {
  if (runRelease) {
    await execAsync("npm run release");
    console.log("✅ Version updated successfully!");
  }

  await execAsync("npm exec svelte-package --exclude **/*.story.svelte");
  console.log("✅ Package built successfully!");
} catch (e) {
  console.log("⚠️", e.message);
  process.exitCode = 1;
} finally {
  await writeFile(tsConfigPath, originalTsConfig);
  console.log("🧹 tsconfig.json restored");
  process.exit();
}