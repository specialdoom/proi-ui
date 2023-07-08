<script lang="ts">
  import CloseIcon from "../icons/CloseIcon.svelte";
  import Backdrop from "../backdrop/Backdrop.svelte";
  import Button from "../button/Button.svelte";
  import { createEventDispatcher } from "svelte";
  import IconButton from "../button/IconButton.svelte";

  export let title: string = "";
  export let visible: boolean = false;
  export let showActions: boolean = true;

  const dispatch = createEventDispatcher();

  function handleCancel() {
    dispatch("cancel");

    visible = false;
  }

  function handleOk() {
    dispatch("ok");
  }
</script>

{#if visible}
  <div class="proi-dialog-container">
    <div class="proi-dialog">
      <div
        class="proi-dialog-header"
        style:justify-content={title ? "space-between" : "flex-end"}
      >
        {title}
        <IconButton
          icon={CloseIcon}
          variant="ghost"
          on:click={handleCancel}
        />
      </div>
      <div class="proi-dialog-body">
        <slot />
      </div>
      {#if showActions}
        <div
          class="proi-dialog-footer"
          data-theme="light"
        >
          <Button
            variant="ghost"
            on:click={handleCancel}>Cancel</Button
          >
          <Button
            variant="primary"
            on:click={handleOk}>Ok</Button
          >
        </div>
      {/if}
    </div>
  </div>
{/if}

<style>
  .proi-dialog-container {
    display: none;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    opacity: 1;
  }

  .proi-dialog {
    display: flex;
    flex-direction: column;
    max-height: 80%;
    gap: 32px;
    background: var(--pi-bg-static);
    min-width: 400px;
    max-width: 600px;
    padding: 32px;
    border-radius: 8px;
    box-shadow: var(--pi-dialog-box-shadow);
    color: var(--pi-text-on-color);
  }

  .proi-dialog-header {
    display: inline-flex;
    align-items: center;
    font-size: 18px;
  }

  .proi-dialog-body {
    font-size: 14px;
    overflow: auto;
  }

  .proi-dialog-footer {
    display: inline-flex;
    justify-content: flex-end;
    gap: 8px;
  }
</style>
