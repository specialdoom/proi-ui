<script>
  import { Dialog, Button } from '@specialdoom/proi-ui';
  import Highlight from '../Highlight.svelte';

  const green = {
    g800: '#357266',
    g600: '#479A89',
    g400: '#73BFB0',
    g200: '#9DD2C7',
    g0: '#D5ECE7'
  };
  const neutral = {
    n800: '#223843',
    n600: '#55666F',
    n400: '#89959B',
    n200: '#BCC3C7',
    n0: '#EFF1F3'
  };

  const red = {
    r800: '#B53C17',
    r600: '#E35226',
    r400: '#E86F4A',
    r200: '#EC8C6F',
    r0: '#F1A993'
  };

  const blue = {
    b800: '#2178C0',
    b600: '#3993DD',
    b400: '#62AAE4',
    b200: '#85BDEA',
    b0: '#A8D0F0'
  };

  const yellow = {
    y800: '#E8AD00',
    y600: '#FFC71F',
    y400: '#FFD147',
    y200: '#FFDB70',
    y0: '#FFE699'
  };

  const purple = {
    p800: '#690375',
    p600: '#873591',
    p400: '#A568AC',
    p200: '#C39AC8',
    p0: '#E1CDE3'
  };

  const variables = [neutral, green, yellow, purple, red, blue];
  let showDialog = false;
  let cssFileContent;

  function getColorGroupTitle(property) {
    if (property.includes('g')) return 'Extended green';
    if (property.includes('n')) return 'Extended neutral';
    if (property.includes('r')) return 'Extended red';
    if (property.includes('b')) return 'Extended blue';
    if (property.includes('y')) return 'Extended yellow';
    if (property.includes('p')) return 'Extended purple';

    return 'Title';
  }

  function generateCssFileContent() {
    let content = '* { \n';
    variables.forEach((variable) => {
      content += `/* ${getColorGroupTitle(Object.keys(variable)[0])}  */\n`;
      for (const [key, value] of Object.entries(variable)) {
        content += `--${key}: ${value}; \n`;
      }
    });
    content += '}';

    cssFileContent = content;
    showDialog = true;
  }
</script>

<h1>Theming (optional)</h1>
<p>proi-ui allows you to customize our design tokens to satisfy UI diversity</p>
<h3>Customize in css file</h3>
<p>
  The approach to customize theme is creating a css file within variables to
  override <code>variables.css</code>
</p>
<Highlight
  code={`import '@specialdoom/proi-ui/variables.css';
import 'override-variables.css';
`}
/>
<p>
  You can easily change the colors and generate the override-variables file
  <Button variant="ghost" on:click={generateCssFileContent}
    >Generate css file content</Button
  >
</p>

<div class="colors-container">
  {#each variables as variable}
    <div class="color-group">
      {getColorGroupTitle(Object.keys(variable)[0])}
      {#each Object.entries(variable) as [key]}
        <div class="color">
          --{key}:
          <input type="color" bind:value={variable[key]} />
        </div>
      {/each}
    </div>
  {/each}
</div>

<Dialog bind:visible={showDialog} title="override-variables.css">
  <code style="white-space: pre-line">
    {cssFileContent}
  </code>
</Dialog>

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
    justify-content: flex-end;
    padding: 20px;
  }

  .color {
    display: inline-flex;
    justify-content: flex-end;
    width: 100%;
  }
</style>
