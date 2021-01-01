<script>
  import { Spinner } from "proi-ui";
  import Highlight from '../shared/Highlight.svelte';
</script>

<div class="container">
  <div class="title color">Spinner component</div>
  <div class="sub-title">
    <span class="color">#</span>
    Usage
  </div>
  <Highlight>
  {`
  <script>
    import {Spinner} from 'proi-ui';
  </script>

  <Spinner />
  <Spinner small/>
  <Spinner labeled/>
  <Spinner labeled label="Custom label..."/>
  <Spinner labeled label="A quite long label for this spinner, but who cares?"/>
  `}
  </Highlight>
  <div class="sub-title">
    <span class="color">#</span>
    Output
  </div>
  <div class="content" style="display:flex">
    <Spinner />
    <Spinner small/>
    <Spinner labeled/>
    <Spinner labeled label="Custom label..."/>
    <Spinner labeled label="A quite long label for this spinner, but who cares?"/>
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
            <div>small</div>
            <div>Small spinner</div>
            <div>Boolean</div>
            <div>-</div>
            <div>false</div>
          </div>
          <div>
            <div>labeled</div>
            <div>Display label. Not working when small is true.</div>
            <div>Boolean</div>
            <div>-</div>
            <div>false</div>
          </div>
          <div>
            <div>label</div>
            <div>Label for spinner</div>
            <div>String</div>
            <div>-</div>
            <div>Loading...</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
