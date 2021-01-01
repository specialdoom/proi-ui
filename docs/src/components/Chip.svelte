<script>
  import { Chip } from "proi-ui";
  import Highlight from '../shared/Highlight.svelte';
</script>

<div class="container">
  <div class="title color">Chip component</div>
  <div class="sub-title">
    <span class="color">#</span>
    Usage
  </div>
  <Highlight>
  {`
  <script>
    import {Chip} from 'proi-ui';
  </script>

  <Chip />
  <Chip label="Default" />
  <Chip label="Primary" type="primary" />
  <Chip label="Secondary" type="secondary" />
  <Chip label="Default" squared />
  <Chip label="Default" outlined />
  <Chip label="Default" squared outlined />
  <Chip label="Default" closable />
  <Chip label="Default" disabled />
  `}
  </Highlight>
  <div class="sub-title">
    <span class="color">#</span>
    Output
  </div>
  <div class="content">
    <Chip />
    <Chip label="Default" />
    <Chip label="Primary" type="primary" />
    <Chip label="Secondary" type="secondary" />
    <Chip label="Default" squared />
    <Chip label="Default" outlined />
    <Chip label="Default" squared outlined />
    <Chip label="Default" closable />
    <Chip label="Default" disabled />
  </div>
  
  <div class="content">
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
            <div>type</div>
            <div>Chip type</div>
            <div>String</div>
            <div>default, primary, secondary</div>
            <div>default</div>
          </div>
          <div>
            <div>squared</div>
            <div>Squared display</div>
            <div>Boolean</div>
            <div>-</div>
            <div>false</div>
          </div>
          <div>
            <div>closable</div>
            <div>Closable chip</div>
            <div>Boolean</div>
            <div>-</div>
            <div>false</div>
          </div>
          <div>
            <div>outlined</div>
            <div>Outlined chip</div>
            <div>Boolean</div>
            <div>-</div>
            <div>false</div>
          </div>
          <div>
            <div>disabled</div>
            <div>Disabled chip</div>
            <div>Boolean</div>
            <div>-</div>
            <div>false</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
