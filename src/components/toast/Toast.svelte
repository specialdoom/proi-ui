<script>
  import { Icon } from 'proi-ui-icons';

  export let toast;
  let closed = false;

  const close = () => {
    closed = true;
  };

  $: toastTypeClass = `sd-toast-${toast.type ? toast.type : 'info'}`;
  $: toastPositionClass = `sd-toast-${toast.position}`;
</script>

{#if !closed}
  <div class="sd-toast {toastTypeClass} {toastPositionClass}">
    <div class="sd-toast-title">
      {toast.type ? toast.type : ''}
      <span class="sd-toast-close" on:click={close}>
        <Icon type="circleClose" scale="12" />
      </span>
    </div>
    <div class="sd-toast-content">
      {toast.message}
    </div>
  </div>
{/if}

<style>
  .sd-toast {
    position: relative;
    width: 250px;
    display: flex;
    margin: 10px;
    padding: 10px;
    border-radius: 4px;
    background-color: ghostwhite;
    box-sizing: border-box;
    flex-direction: column;
    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  }

  .sd-toast-error {
    border-left: 4px solid #ee3d48;
  }

  .sd-toast-warning {
    border-left: 4px solid #fdb300;
  }

  .sd-toast-info {
    border-left: 4px solid #257dff;
  }

  .sd-toast-success {
    border-left: 4px solid #007f50;
  }

  .sd-toast-title {
    text-align: left;
    font-size: 14px;
    font-weight: 300;
  }

  .sd-toast-content {
    text-align: left;
    padding-top: 10px;
  }

  .sd-toast-close {
    float: right;
  }

  .sd-toast-close:hover {
    opacity: 0.6;
  }
</style>
