<script>
  import { Modal, ModalBody, ModalActions, Button } from 'proi-ui';
  import { config } from '../../configs/components/modal';
  import Docs from '../../components/Docs.svelte';

  let isModalVisible = false;
  let isCustomizedModalVisible = false;

  function toggle() {
    isModalVisible = !isModalVisible;
  }

  function toggleCustomizedModal() {
    isCustomizedModalVisible = !isCustomizedModalVisible;
  }
</script>

<Docs {config}>
  <Button on:click={toggle}>Show modal</Button>
  <Button on:click={toggleCustomizedModal}>Show customized modal</Button>

  <Modal bind:visible={isModalVisible} title="Confirm">
    <ModalBody>Are you sure you want to continue?</ModalBody>
    <ModalActions>
      <Button small outlined>Yes</Button>
      <Button small type="secondary">No</Button>
    </ModalActions>
  </Modal>
  <Modal bind:visible={isCustomizedModalVisible} title="Confirm">
    <ModalBody className="custom-body">
      Are you sure you want to continue?
    </ModalBody>
    <ModalActions className="custom-actions">
      <Button small outlined>Yes</Button>
      <Button small type="secondary">No</Button>
    </ModalActions>
  </Modal>
</Docs>

<style>
  :global(.sd-modal-body.custom-body) {
    text-transform: uppercase;
  }

  :global(.sd-modal-dialog .sd-modal-actions.custom-actions) {
    display: flex;
    justify-content: space-between;
  }
</style>
