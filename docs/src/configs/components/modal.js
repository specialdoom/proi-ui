import { columns } from '../shared/columns';

export const data = [
  {
    property: 'visible',
    description: 'Whether the modal is visible',
    type: 'boolean',
    default: 'false'
  },
  {
    property: 'title',
    description: 'Title of modal',
    type: 'string',
    default: `''`
  }
];

export const usage = `<script>
import { Modal, ModalBody, ModalActions, Button } from 'proi-ui';

let isModalVisible = false;
let isCustomizedModalVisible = false;

function toggle() {
  isModalVisible = !isModalVisible;
}

function toggleCustomizedModal() {
  isCustomizedModalVisible = !isCustomizedModalVisible;
}
</script>

<Button on:click={toggle}>Show modal</Button>

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

<style>
  :global(.sd-modal-body.custom-body) {
    text-transform: uppercase;
  }

  :global(.sd-modal-dialog .sd-modal-actions.custom-actions) {
    display: flex;
    justify-content: space-between;
  }
</style>
`;

export const config = { title: 'Modal component', data, usage, columns };
