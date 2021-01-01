<script>
  import { Avatar } from "proi-ui";
  import Highlight from "../shared/Highlight.svelte";

</script>

<style>
  .alert-content {
    margin-bottom: 10px;
  }
</style>

<div class="container">
  <div class="title color">Avatar component</div>
  <div class="sub-title">
    <span class="color">#</span>
    Usage
  </div>
  <Highlight>
  {`
  <script>
import { Avatar } from 'proi-ui'

</script>

<Avatar name="Proi Ui" title="Library" squared />
<Avatar name="Proi Ui" title="Library" />
<Avatar name="Proi Ui" title="Library" squared image="https://i.ibb.co/4RDhYH9/favicon.png"/>
<Avatar name="Proi Ui" title="Library" image="https://i.ibb.co/4RDhYH9/favicon.png"/>
  `}
  </Highlight>
  <div class="sub-title">
    <span class="color">#</span>
    Output
  </div>
  <div class="alert-content">
    <Avatar name="Proi Ui" title="Library" squared />
<Avatar name="Proi Ui" title="Library" />
<Avatar name="Proi Ui" title="Library" squared image="https://i.ibb.co/4RDhYH9/favicon.png"/>
<Avatar name="Proi Ui" title="Library" image="https://i.ibb.co/4RDhYH9/favicon.png"/>
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
          <div>name</div>
          <div>Name, Nickname or something like that</div>
          <div>String</div>
          <div>-</div>
          <div>-</div>
        </div>
        <div>
          <div>title</div>
          <div>Title</div>
          <div>String</div>
          <div>-</div>
          <div>-</div>
        </div>
        <div>
          <div>image</div>
          <div>Image url</div>
          <div>String</div>
          <div>-</div>
          <div>-</div>
        </div>
        <div>
          <div>squared</div>
          <div>Squared display</div>
          <div>Boolean</div>
          <div>-</div>
          <div>false</div>
        </div>
      </div>
    </div>
  </div>
</div>
