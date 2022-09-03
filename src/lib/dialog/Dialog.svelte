<script lang="ts">
  import CloseIcon from "../icons/CloseIcon.svelte";
  import Backdrop from "../backdrop/Backdrop.svelte";
  import Button from "../button/Button.svelte";

  export let title: string = "";
  export let visible: boolean = false;
  export let showActions: boolean = true;
  export let onOk: (e: Event) => void = () => {};
  export let onCancel: () => void = () => {};

  const handleCancel = () => {
    if (onCancel) onCancel();

    visible = false;
  };
</script>

{#if visible}
  <Backdrop {visible}>
    <div class="container">
      <div class="dialog">
        <div
          class="header"
          style={`justify-content: ${title ? "space-between" : "flex-end"};`}
        >
          {title}
          <span on:click={handleCancel}>
            <CloseIcon />
          </span>
        </div>
        <div class="body">
          <slot />
        </div>
        {#if showActions}
          <div class="footer">
            <Button variant="ghost" on:click={handleCancel}>Cancel</Button>
            <Button variant="primary" on:click={onOk}>Ok</Button>
          </div>
        {/if}
      </div>
    </div>
  </Backdrop>
{/if}

<style>
  div.container {
    display: none;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    opacity: 1;
  }

  div.dialog {
    display: flex;
    flex-direction: column;
    max-height: 80%;
    gap: 32px;
    background: var(--n0);
    min-width: 400px;
    max-width: 600px;
    padding: 32px;
    border-radius: 8px;
  }

  div.dialog div.header {
    display: inline-flex;
    align-items: center;
    font-size: 18px;
    color: var(--n800);
  }

  div.header span {
    cursor: pointer;
  }

  div.dialog div.body {
    font-size: 14px;
    color: var(--n600);
  }

  div.dialog div.footer {
    display: inline-flex;
    justify-content: flex-end;
    gap: 8px;
  }
</style>
