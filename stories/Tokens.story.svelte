<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import Dialog from "../lib/dialog/Dialog.svelte";
  import Button from "../lib/button/Button.svelte";

  export let Hst: HstType;

  const green = {
    g800: "#357266",
    g600: "#479A89",
    g400: "#73BFB0",
    g200: "#9DD2C7",
    g0: "#D5ECE7"
  };
  const neutral = {
    n800: "#223843",
    n600: "#55666F",
    n400: "#89959B",
    n200: "#BCC3C7",
    n0: "#EFF1F3"
  };

  const red = {
    r800: "#B53C17",
    r600: "#E35226",
    r400: "#E86F4A",
    r200: "#EC8C6F",
    r0: "#F1A993"
  };

  const blue = {
    b800: "#2178C0",
    b600: "#3993DD",
    b400: "#62AAE4",
    b200: "#85BDEA",
    b0: "#A8D0F0"
  };

  const yellow = {
    y800: "#E8AD00",
    y600: "#FFC71F",
    y400: "#FFD147",
    y200: "#FFDB70",
    y0: "#FFE699"
  };

  const purple = {
    p800: "#690375",
    p600: "#873591",
    p400: "#A568AC",
    p200: "#C39AC8",
    p0: "#E1CDE3"
  };

  const bright = {
    bright: "#ffffff"
  };

  const variables: any = [neutral, green, yellow, purple, red, blue, bright];
  let showDialog: boolean = false;
  let cssFileContent: string = "";

  function getColorGroupTitle(property: string) {
    if (property.includes("br")) return "Bright";
    if (property.includes("g")) return "Extended green";
    if (property.includes("n")) return "Extended neutral";
    if (property.includes("r")) return "Extended red";
    if (property.includes("b")) return "Extended blue";
    if (property.includes("y")) return "Extended yellow";
    if (property.includes("p")) return "Extended purple";

    return "Title";
  }

  function generateCssFileContent() {
    let content = "* { \n";
    variables.forEach((variable: any) => {
      content += `/* ${getColorGroupTitle(Object.keys(variable)[0])}  */\n`;
      for (const [key, value] of Object.entries(variable)) {
        content += `--${key}: ${value}; \n`;
      }
    });
    content += "}";

    cssFileContent = content;
    showDialog = true;
  }
</script>

<Hst.Story
  title="Tokens"
  group="b"
>
  <Hst.Variant>
    <p>
      You can easily change the colors and generate the override-variables file
      <Button
        variant="ghost"
        on:click={generateCssFileContent}
      >
        Generate css file content
      </Button>
    </p>

    <div class="colors-container">
      {#each variables as variable}
        <div class="color-group">
          {getColorGroupTitle(Object.keys(variable)[0])}
          {#each Object.entries(variable) as [key]}
            <div class="color">
              --{key}:
              <input
                type="color"
                bind:value={variable[key]}
              />
            </div>
          {/each}
        </div>
      {/each}
    </div>

    <Dialog
      bind:visible={showDialog}
      title="override-variables.css"
    >
      <code style="white-space: pre-line">
        {cssFileContent}
      </code>
    </Dialog>
  </Hst.Variant>
</Hst.Story>

<style>
  .colors-container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  .color-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 20px;
  }

  .color {
    display: inline-flex;
    justify-content: flex-end;
    width: 100%;
  }
</style>
