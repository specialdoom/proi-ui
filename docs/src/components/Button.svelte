<script>
  import { Button } from "proi-ui";
  import {Icon} from 'proi-ui-icons';
  import Highlight from '../shared/Highlight.svelte';

</script>

<div class="container">
  <div class="title color">Button component</div>
  <div class="sub-title">
    <span class="color">#</span>
    Usage
  </div>
  <Highlight>
  {`
  <script>
    import {Button} from 'proi-ui';

    function clicked(){
      console.log("button clicked");
    }
  </script>

  <Button status="primary">Primary</Button>
  <Button status="info">Info</Button>
  <Button status="warning">Warning</Button>
  <Button status="danger">Danger</Button>
  <Button status="success">Success</Button>
  <Button status="primary" medium>Medium</Button>
  <Button status="primary" outlined>Outlined primary</Button>
  <Button status="primary" squared>Squared primary</Button>
  <Button status="primary" disabled>Disabled primary</Button>
  `}
  </Highlight>
  <div class="sub-title">
    <span class="color">#</span>
    Output
  </div>
  <div class="content">
    <Button status="primary">Primary</Button>
  <Button status="info">Info</Button>
  <Button status="warning">Warning</Button>
  <Button status="danger">Danger</Button>
  <Button status="success">Success</Button>
  <Button status="primary" medium>Medium</Button>
  <Button status="primary" outlined>Outlined primary</Button>
  <Button status="primary" squared>Squared primary</Button>
  <Button status="primary" disabled>Disabled primary</Button>
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
            <div>status</div>
            <div>Button type</div>
            <div>String</div>
            <div>primary, info, danger, success, warning</div>
            <div>primary</div>
          </div>
          <div>
            <div>squared</div>
            <div>Squared display</div>
            <div>Boolean</div>
            <div>-</div>
            <div>false</div>
          </div>
          <div>
            <div>outlined</div>
            <div>Outlined display</div>
            <div>Boolean</div>
            <div>-</div>
            <div>false</div>
          </div>
          <div>
            <div>medium</div>
            <div>Medium display</div>
            <div>Boolean</div>
            <div>-</div>
            <div>false</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class="sub-title">
      <span class="color">#</span>
      Events
    </div>
    <div class="content">
      <div class="table">
        <div class="table-header">
          <div>Event</div>
          <div>Description</div>
          <div>Callback parameter</div>
        </div>
        <div class="table-data">
          <div>
            <div>on:click</div>
            <div>Click event</div>
            <div>event</div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
