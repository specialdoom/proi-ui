import { resolve } from "node:path";
import { copyFile } from "node:fs";

const changelogPath = resolve("./CHANGELOG.md");
const changelogSectionPath = resolve("./histoire-sections/Changelog.story.md");
try {
    copyFile(changelogPath, changelogSectionPath, (err) => {
        if (err) throw err;

        console.log("🗒️ The changelog file has been copied!");
    });
} catch (e) {
    console.log("⚠️", e.message);
    process.exitCode = 1;
}
