import { resolve } from "node:path";
import { mkdirSync, writeFileSync } from "node:fs";
import { parseArgs } from "node:util";

const options = {
    name: {
        type: "string",
        short: "n"
    }
}

const {
    values: { name }
} = parseArgs({ options });

if (!name) {
    console.log("⚠️ Specify name for component using --name");
    process.exit(1);
}

const componenFileN = getComponentFileName(name);

const svelteFileTemplate = `<script lang="ts">
// component states, method
</script>

<!-- markup -->

<style>
  /* styling */
</style>
`;

const svelteStoryFileTemplate = `<script lang="ts">
import type { Hst as HstType } from "@histoire/plugin-svelte";
import ${componenFileN} from "../${componenFileN}.svelte";

export let Hst: HstType;
</script>

<Hst.Story title="${componenFileN}">
  <Hst.Variant title="Default">
    <${componenFileN} />
  </Hst.Variant>
</Hst.Story>`;

const READMEFileTemplate = `---

[proi-ui](https://github.com/specialdoom/proi-ui)

##### ${componenFileN} component

### Usage

### Properties
`;


const $$libFolder = resolve("./src/lib");
const $$newComponentFolder = resolve($$libFolder, name);
const $$storiesFolder = resolve($$newComponentFolder, "__stories__")
const $$testsFolder = resolve($$newComponentFolder, "__tests__")
const $$newComponentSvelteFile = resolve($$newComponentFolder, `${componenFileN}.svelte`)
const $$newComponentStoryFile = resolve($$storiesFolder, `${componenFileN}.story.svelte`)
const $$newComponentReadmeFile = resolve($$newComponentFolder, "README.md")
const $$newComponentTestFile = resolve($$testsFolder, `${name}.test.ts`)

mkdirSync($$newComponentFolder);
mkdirSync($$storiesFolder);
mkdirSync($$testsFolder)
writeFileSync($$newComponentSvelteFile, svelteFileTemplate)
writeFileSync($$newComponentStoryFile, svelteStoryFileTemplate)
writeFileSync($$newComponentReadmeFile, READMEFileTemplate)
writeFileSync($$newComponentTestFile, "")

function getComponentFileName(name) {
    const names = name.split("-");

    const filename = names.reduce((accumulator, current) => {
        return accumulator = [...accumulator, capitalizeFirstLetter(current)]
    }, []);

    return filename.join("");
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}