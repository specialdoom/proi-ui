import { promisify } from "node:util";
import { exec } from "node:child_process";

const execAsync = promisify(exec);

try {
    await execAsync("npm run publish ");
    console.log("✅ Package published successfuly!");
} catch (e) {
    console.log("⚠️", e.message);
    process.exitCode = 1;
} finally {
    process.exit();
}