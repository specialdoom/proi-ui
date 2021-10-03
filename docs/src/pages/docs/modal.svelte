<script>
  import { Modal, ModalBody, ModalActions, Button } from 'proi-ui';
  import { config } from '../../configs/components/modal';
  import Docs from '../../components/Docs.svelte';

  let isModalVisible = false;

  function toggle() {
    isModalVisible = !isModalVisible;
  }
</script>

<Docs {config}>
  <Button on:click={toggle}>Show modal</Button>

  <Modal bind:visible={isModalVisible} title="Confirm">
    <ModalBody>Are you sure you want to continue?</ModalBody>
    <ModalActions>
      <Button small outlined>Yes</Button>
      <Button small type="secondary">No</Button>
    </ModalActions>
  </Modal>
</Docs>
