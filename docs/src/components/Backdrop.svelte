<script>
  import { Backdrop, Button, Chip } from "proi-ui";
  import Highlight from '../shared/Highlight.svelte';

  let open = false;

  function toggleBackdrop() {
    open = !open;
  }

  let open1 = false;

  function toggleBackdropWithContent() {
    open1 = !open1;
  }
</script>

<style>
  .container {
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
  }

  .title {
    font-weight: 100;
    font-size: 28px;
  }
</style>

<div class="container">
  <div class="title color">Backdrop component</div>
  <div class="sub-title">
    <span class="color">#</span>
    Usage
  </div>
  <Highlight>
  {`
  <script>
    import {Backdrop} from 'proi-ui';

    let open = false;

    function toggleBackdrop(){
      open = !open;
    }
  </script>

  <Backdrop {open} on:click={toggleBackdrop} />
  <Backdrop open={open} on:click={toggleBackdrop}>
      <Chip />
  </Backdrop>
  `}
  </Highlight>
  <div class="sub-title">
    <span class="color">#</span>
    Output
  </div>
  <div class="content">
    <Button on:click={toggleBackdrop}>Show backdrop</Button>
    <Backdrop {open} on:click={toggleBackdrop} />
    <Button on:click={toggleBackdropWithContent}>
      Show backdrop with custom content
    </Button>
    <Backdrop open={open1} on:click={toggleBackdropWithContent}>
      <Chip />
    </Backdrop>
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
            <div>open</div>
            <div>Backdrop open</div>
            <div>Boolean</div>
            <div>-</div>
            <div>false</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="content">
    <div class="sub-title">
      <span class="color">#</span>
      Events
    </div>
    <div style="overflow: auto">
      <div class="table">
        <div class="table-header">
          <div>Event</div>
          <div>Description</div>
          <div>Callback parameter</div>
        </div>
        <div class="table-data">
          <div>
            <div>on:click</div>
            <div>Use to close the backdrop</div>
            <div>event</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
