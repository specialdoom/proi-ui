---

[proi-ui](https://github.com/specialdoom/proi-ui)

### Usage

```sveltehtml
<script>
import { Modal, Button } from 'proi-ui'

let isModalVisible = false;

function toggle() {
  isModalVisible = !isModalVisible;
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
```

### API

#### Modal

| Property | Description                  | Type    | Default |
| -------- | ---------------------------- | ------- | ------- |
| visible  | Whether the modal is visible | boolean | false   |
| title    | Title of modal               | string  | ''      |

#### ModalBody

- used for modal content
- optional

#### ModalActions

- used for specific actions for modal
- optional
