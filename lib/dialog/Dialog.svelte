<script lang="ts">
  import CloseIcon from "../icons/CloseIcon.svelte";
  import Backdrop from "../backdrop/Backdrop.svelte";
  import Button from "../button/Button.svelte";
  import { createEventDispatcher } from "svelte";

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
  <Backdrop {visible}>
    <div class="proi-dialog-container">
      <div class="proi-dialog">
        <div
          class="proi-dialog-header"
          style:justify-content={title ? "space-between" : "flex-end"}
        >
          {title}
          <button on:click={handleCancel}>
            <CloseIcon />
          </button>
        </div>
        <div class="proi-dialog-body">
          <slot />
        </div>
        {#if showActions}
          <div class="proi-dialog-footer">
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
  </Backdrop>
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
    background: var(--bright);
    min-width: 400px;
    max-width: 600px;
    padding: 32px;
    border-radius: 8px;
  }

  .proi-dialog-header {
    display: inline-flex;
    align-items: center;
    font-size: 18px;
    color: var(--n800);
  }

  .proi-dialog-header button {
    border: unset;
    outline: unset;
    background: transparent;
    cursor: pointer;
  }

  .proi-dialog-body {
    font-size: 14px;
    color: var(--n600);
    overflow: auto;
  }

  .proi-dialog-footer {
    display: inline-flex;
    justify-content: flex-end;
    gap: 8px;
  }
</style>
