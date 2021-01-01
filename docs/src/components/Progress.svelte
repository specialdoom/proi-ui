<script>
  import { Progress, Button } from "proi-ui";

  import Highlight from '../shared/Highlight.svelte';

  let percent = 0;
  let error = false;

  function add(value) {
    percent = percent + value;
  }

  function subtract(value) {
    percent = percent - value;
  }
</script>

<div class="container">
  <div class="title color">Progress component</div>
  <div class="sub-title">
    <span class="color">#</span>
    Usage
  </div>
  <Highlight>
  {`
  <script>
    import {Progress, Button} from 'proi-ui';

    let percent = 0;
    let error = false;

    function add(value) {
      percent = percent + value;
    }

    function subtract(value) {
      percent = percent - value;
    }
  </script>

  <Progress {percent} {error} height={25}/>
  <Progress {percent} {error}/>
  <Progress {percent} {error} height={5}/>
  <Button on:click={() => add(10)} disabled={percent === 100}>Add 10%</Button>
  <Button on:click={() => subtract(10)} disabled={percent === 0}>Subtract 10%</Button>
  <Button status="danger" on:click={() => error = !error}>Error</Button>
  <Button status="success" on:click={() => percent=100}>100%</Button>
  `}
  </Highlight>
  <div class="sub-title">
    <span class="color">#</span>
    Output
  </div>
  <div class="alert-content">
  <Progress {percent} {error} height={25}/>
  <Progress {percent} {error}/>
  <Progress {percent} {error} height={5}/>
  <Button on:click={() => add(10)} disabled={percent === 100}>Add 10%</Button>
  <Button on:click={() => subtract(10)} disabled={percent === 0}>Subtract 10%</Button>
  <Button status="danger" on:click={() => error = !error}>Error</Button>
  <Button status="success" on:click={() => percent=100}>100%</Button>
  </div>
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
            <div>percent</div>
            <div>Progress percent</div>
            <div>Integer</div>
            <div>0-100</div>
            <div>0</div>
          </div>
          <div>
            <div>error</div>
            <div>Error display</div>
            <div>Boolean</div>
            <div>-</div>
            <div>false</div>
          </div>
          <div>
            <div>height</div>
            <div>Progress height</div>
            <div>Integer</div>
            <div>-</div>
            <div>15</div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
