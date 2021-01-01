<script>
  import { Dropdown } from "proi-ui";
  import Highlight from '../shared/Highlight.svelte';

  let options = ["First option", "Second option", "Third option"];

  let selected = "";
</script>

<div class="container">
  <div class="title color">Dropdown component</div>
  <div class="sub-title">
    <span class="color">#</span>
    Usage
  </div>
  <Highlight>
  {`
  <script>
    import {Dropdown} from 'proi-ui';

    let options = ["First option", "Second option", "Third option"];

    let selected = "";
  </script>

  <Dropdown bind:selected {options} title="No option selected" />
  <Dropdown title="Disabled" disabled />
  `}
  </Highlight>
  <div class="sub-title">
    <span class="color">#</span>
    Output
  </div>
    <Dropdown bind:selected {options} title="No option selected" />
    <Dropdown title="Disabled" disabled />
  <div>
    <div class="sub-title">
      <span class="color">#</span>
      Attributes
    </div>
    <div style="overflow: auto">
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
            <div>selected</div>
            <div>Current selected value</div>
            <div>String</div>
            <div>-</div>
            <div>''</div>
          </div>
          <div>
            <div>options</div>
            <div>Options for select</div>
            <div>Array of String</div>
            <div>-</div>
            <div>[]</div>
          </div>
          <div>
            <div>title</div>
            <div>Title for dropdown</div>
            <div>String</div>
            <div>-</div>
            <div>'Title'</div>
          </div>
          <div>
            <div>disabled</div>
            <div>Disable dropdown</div>
            <div>Boolean</div>
            <div>-</div>
            <div>false</div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
