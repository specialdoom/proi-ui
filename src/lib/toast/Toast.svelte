<script lang="ts">
  import Icon from "../icons/Icon.svelte";

  export let toast: any;
  let closed: boolean = false;

  const close = () => {
    closed = true;
  };

  $: toastTypeClass = `sd-toast-${toast.type ? toast.type : "info"}`;
  $: toastPositionClass = `sd-toast-${toast.position}`;
</script>

{#if !closed}
  <div class="sd-toast {toastTypeClass} {toastPositionClass}">
    <div class="sd-toast-title">
      {toast.type ? toast.type : ""}
      <span class="sd-toast-close" on:click={close}>
        <Icon variant="circleClose" scale={15} />
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
    width: 300px;
    display: flex;
    margin: 10px;
    padding: 10px;
    border-radius: 4px;
    background-color: var(--sd-ghost-white);
    box-sizing: border-box;
    flex-direction: column;
    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  }

  .sd-toast-error {
    border-left: 4px solid var(--sd-error);
  }

  .sd-toast-warning {
    border-left: 4px solid var(--sd-warning);
  }

  .sd-toast-info {
    border-left: 4px solid var(--sd-info);
  }

  .sd-toast-success {
    border-left: 4px solid var(--sd-success);
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
