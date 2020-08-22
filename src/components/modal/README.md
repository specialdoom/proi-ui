---
[proi-ui](https://github.com/specialdoom/proi-ui)

### Usage

```sveltehtml
<script>
import { Modal, Button } from 'proi-ui'

let show = false;

function toggleModal(){
    show = !show;
}

</script>

<div>
    <Modal bind:show>
        <span slot="title">Some title.</span>
        <div slot="body">
          Some body content.
        </div>
        <div slot="actions">
          Some actions [e.g. buttons]
          <Button medium on:click={toggleModal}>Close</Button>
        </div>
    </Modal>
</div>
```

### Attributes
| Parameter | Description | Type | Optional value | Default value |
| --- | --- | --- | --- | --- |
| show | Show modal | Boolean | - | false |
