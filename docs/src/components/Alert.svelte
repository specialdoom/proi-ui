<script>
  import { Alert } from "proi-ui";
  import Highlight from "../shared/Highlight.svelte";

</script>

<style>
  .alert-content {
    margin-bottom: 10px;
  }
</style>

<div class="container">
  <div class="title color">Alert component</div>
  <div class="sub-title">
    <span class="color">#</span>
    Usage
  </div>
  <Highlight>
  {`<script>
      import {Alert} from 'proi-ui';
    </script>

    <Alert>Alert success message</Alert>
    <Alert status="error" squared>Alert error message</Alert>
    <Alert status="info" outlined>Info</Alert>
    <Alert status="warning" closable>Closable alert warning message</Alert>
  `}
  </Highlight>
  <div class="sub-title">
    <span class="color">#</span>
    Output
  </div>
  <div class="alert-content">
    <Alert>Alert success message</Alert>
    <Alert status="error" squared>Alert error message</Alert>
    <Alert status="info" outlined>Info</Alert>
    <Alert status="warning" closable>Closable alert warning message</Alert>
  </div>
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
          <div>status</div>
          <div>Alert type</div>
          <div>String</div>
          <div>info, error, success, warning</div>
          <div>success</div>
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
          <div>Closable alert</div>
          <div>Boolean</div>
          <div>-</div>
          <div>false</div>
        </div>
        <div>
          <div>outlined</div>
          <div>Outlined alert</div>
          <div>Boolean</div>
          <div>-</div>
          <div>false</div>
        </div>
      </div>
    </div>
  </div>
</div>
