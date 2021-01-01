<script>
  import { Checkbox } from "proi-ui";
  import Highlight from '../shared/Highlight.svelte';

  let yes = false;
</script>

<div class="container">
  <div class="title color">Checkbox component</div>
  <div class="sub-title">
    <span class="color">#</span>
    Usage
  </div>
  <Highlight>
  {`
  <script>
    import {Checkbox} from 'proi-ui';

    let yes = false;
  </script>

  <Checkbox value={yes ? 'Checked' : 'Unchecked'} bind:checked={yes} />
  <Checkbox disabled value="Disabled" />
  `}
  </Highlight>
  <div class="sub-title">
    <span class="color">#</span>
    Output
  </div>
  <div class="content">
    <Checkbox value={yes ? 'Checked' : 'Unchecked'} bind:checked={yes} />
    <Checkbox disabled value="Disabled" />
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
            <div>Display text</div>
            <div>String</div>
            <div>-</div>
            <div>-</div>
          </div>
          <div>
            <div>checked</div>
            <div>Option to bind to</div>
            <div>Boolean</div>
            <div>-</div>
            <div>false</div>
          </div>
          <div>
            <div>disabled</div>
            <div>Disable checkbox</div>
            <div>Boolean</div>
            <div>-</div>
            <div>false</div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
