<script>
  import { Input } from "proi-ui";
  import Highlight from "../shared/Highlight.svelte";
</script>

<style>
  .content-input {
    width: 50%;
  }
</style>

<div class="container">
  <div class="title color">Input component</div>
  <div class="sub-title">
    <span class="color">#</span>
    Usage
  </div>
  <Highlight>
    {`
  <script>
    import {Input} from 'proi-ui';  
  </script>
  <Input label="Custom label" value="Custom value" />
  <Input label="Success label" value="Succes value" success={true} />
  <Input
    label="Error label"
    value="Error value"
    error="Something is wrong..." />
  <Input 
    label="Squared custom label" 
    value="Squared custom value"
    squared />
  <Input 
    label="Disabled input" 
    value="Disabled" 
    disabled />
  `}
  </Highlight>
  <div class="sub-title">
    <span class="color">#</span>
    Output
  </div>
  <div class="content content-input">
    <Input label="Custom label" value="Custom value" />
    <Input label="Success label" value="Succes value" success={true} />
    <Input
      label="Error label"
      value="Error value"
      error="Something is wrong..." />
    <Input label="Custom label" value="Custom value" squared />
    <Input label="Disabled input" value="Disabled" disabled />
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
            <div>Text inside input</div>
            <div>String</div>
            <div>-</div>
            <div>-</div>
          </div>
          <div>
            <div>type</div>
            <div>Input type</div>
            <div>String</div>
            <div>text, password</div>
            <div>text</div>
          </div>
          <div>
            <div>squared</div>
            <div>Squared display</div>
            <div>Boolean</div>
            <div>-</div>
            <div>false</div>
          </div>
          <div>
            <div>placeholder</div>
            <div>Input placeholder</div>
            <div>String</div>
            <div>-</div>
            <div>-</div>
          </div>
          <div>
            <div>label</div>
            <div>Input label</div>
            <div>String</div>
            <div>-</div>
            <div>Label</div>
          </div>
          <div>
            <div>error</div>
            <div>Error message</div>
            <div>String</div>
            <div>-</div>
            <div>-</div>
          </div>
          <div>
            <div>success</div>
            <div>Sucess display</div>
            <div>Boolean</div>
            <div>-</div>
            <div>false</div>
          </div>
          <div>
            <div>disabled</div>
            <div>Disable input</div>
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
            <div>on:change</div>
            <div>Change event</div>
            <div>event</div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
