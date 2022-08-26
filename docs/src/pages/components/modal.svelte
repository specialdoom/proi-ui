<script lang="ts">
  import { Modal, ModalBody, ModalActions, Button } from '../../../../src';
  import { config } from '../../configs/components/modal';
  import Docs from '../../components/Docs.svelte';

  let isModalVisible: boolean = false;

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
      <Button small variant="secondary">No</Button>
    </ModalActions>
  </Modal>
</Docs>
