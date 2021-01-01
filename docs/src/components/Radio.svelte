<script>
  import { Radio } from "proi-ui";
  import Highlight from '../shared/Highlight.svelte';

  let options = [
    { text: "One value", value: 1 },
    { text: "Two value", value: 2 },
    { text: "Three value", value: 3 }
  ];
  let radio = 1;
</script>

<style>
  hr{
      border: unset;
      background: rgba(35, 152, 171);
      height: 1px;
  }
</style>

<div class="container">
  <div class="title color">Radio component</div>
  <div class="sub-title">
    <span class="color">#</span>
    Usage
  </div>
  <Highlight>
  {`
  <script>
    import {Progress, Button} from 'proi-ui';

    let options = [
      { text: "One value", value: 1 },
      { text: "Two value", value: 2 },
      { text: "Three value", value: 3 }
    ];
    let radio = 1;
  </script>

  {#each options as option}
    <Radio value={option.value} bind:group={radio} label={option.text} />
  {/each}
  `}
  </Highlight>
  <div class="sub-title">
    <span class="color">#</span>
    Output
  </div>
  <div class="content">
    {#each options as option}
      <Radio value={option.value} bind:group={radio} label={option.text} />
    {/each}
    <hr>
    <Radio disabled value={1} label="Disabled" />
  </div>
  <div>
    <div class="sub-title">
      <span class="color">#</span>
      Attributes
    </div>
    <div class="content">
      <div class="table">
        <div class="table-header">
          <div>Parameter</div>
          <div>Description</div>
          <div>Type</div>
          <div>Optional value</div>
          <div>Default value</div>
        </div>
        <div class="table-data">
          <div>
            <div>value</div>
            <div>Value of radio</div>
            <div>Integer</div>
            <div>-</div>
            <div>null</div>
          </div>
          <div>
            <div>group</div>
            <div>To bind to</div>
            <div>Integer</div>
            <div>-</div>
            <div>null</div>
          </div>
          <div>
            <div>disabled</div>
            <div>Disable radio</div>
            <div>Boolean</div>
            <div>-</div>
            <div>false</div>
          </div>
          <div>
            <div>label</div>
            <div>Display text</div>
            <div>String</div>
            <div>-</div>
            <div>-</div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
