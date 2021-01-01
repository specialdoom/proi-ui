<script>
  import { Modal, Button } from "proi-ui";
  import Highlight from '../shared/Highlight.svelte';

  let open = false;

  function toggleModal() {
    open = !open;
  }

  function submit() {
    toggleModal();
    alert("submit");
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

  .sub-title {
    font-weight: 100;
    font-size: 18px;
  }
</style>

<div class="container">
  <div class="title color">Modal component</div>
  <div class="sub-title">
    <span class="color">#</span>
    Usage
  </div>
  <Highlight>
  {`
  <script>
    import {Button, Modal} from 'proi-ui';

    let open = false;

    function toggleModal() {
      open = !open;
    }

    function submit() {
      toggleModal();
      alert("submit");
    }
  </script>

  <Button on:click={toggleModal} outlined>Show modal</Button>
  <Modal bind:show={open}>
    <span slot="title">Confirm</span>
    <div slot="body">Are you sure you want to continue?</div>
    <div slot="actions">
      <Button medium outlined on:click={submit}>Yes</Button>
      <Button medium status="danger" on:click={toggleModal}>No</Button>
    </div>
  </Modal>
  `}
  </Highlight>
  <div class="sub-title">
    <span class="color">#</span>
    Output
  </div>
  <div class="content">
    <Button on:click={toggleModal} outlined>Show modal</Button>
    <Modal bind:show={open}>
      <span slot="title">Confirm</span>
      <div slot="body">Are you sure you want to continue?</div>
      <div slot="actions">
        <Button medium outlined on:click={submit}>Yes</Button>
        <Button medium status="danger" on:click={toggleModal}>No</Button>
      </div>
    </Modal>
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
            <div>show</div>
            <div>Show modal</div>
            <div>Boolean</div>
            <div>-</div>
            <div>false</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
