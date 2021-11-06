<script>
  import Backdrop from '../backdrop/Backdrop.svelte';
  import ModalTitle from './ModalTitle.svelte';

  export let title = '';
  export let visible = false;

  function close() {
    visible = false;
  }
</script>

<Backdrop {visible}>
  <div
    class="sd-modal"
    class:sd-modal-show={visible}
    class:sd-modal-not-show={!visible}
  >
    <div class="sd-modal-dialog">
      <ModalTitle {close}>{title}</ModalTitle>
      <slot />
    </div>
  </div>
</Backdrop>

<style>
  .sd-modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1300;
    overflow: auto;
    outline: 0;
  }

  .sd-modal-dialog {
    box-sizing: border-box;
    background: var(--sd-white);
    color: var(--sd-black);
    font-size: 14px;
    line-height: 1.5;
    position: relative;
    top: 100px;
    z-index: 1301;
    max-width: 500px;
    width: auto;
    margin: 0 auto;
    border-radius: 4px;
  }

  .sd-modal-show {
    display: block;
  }

  .sd-modal-not-show {
    display: none;
  }
</style>
