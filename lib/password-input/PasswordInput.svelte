<script lang="ts">
  import View from "../icons/View.svelte";
  import ViewHide from "../icons/ViewHide.svelte";

  export let placeholder: string = "";
  export let value: string = "";
  export let error: boolean = false;
  export let disabled: boolean = false;

  let showPassword: boolean = false;
</script>

<div
  class="proi-input-container"
  class:disabled
  class:error
>
  {#if showPassword}
    <input
      bind:value
      type="text"
      {placeholder}
      class="proi-input"
      {disabled}
    />
  {:else}
    <input
      bind:value
      type="password"
      {placeholder}
      class="proi-input"
      {disabled}
    />
  {/if}
  <button
    class="proi-icon"
    on:click={() => (showPassword = !showPassword)}
  >
    {#if showPassword}
      <ViewHide />
    {:else}
      <View />
    {/if}
  </button>
</div>

<style>
  .proi-input-container {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    height: 32px;
    width: 100%;
    padding: 6px 12px;
    border: 2px solid var(--n200);
    border-radius: 4px;
    width: 100%;
    height: 32px;
    font-size: 14px;
    padding: 6px 12px;
    line-height: 20px;
    color: var(--n800);
  }

  .proi-input {
    border: unset;
    outline: unset;
    padding: unset;
    height: 100%;
    width: calc(100% - 20px);
  }

  .proi-input::placeholder {
    color: var(--n400);
  }

  .proi-input-container.disabled:focus-within {
    border: 2px solid var(--n200);
  }

  .proi-input-container:focus-within {
    border: 2px solid var(--g200);
  }

  .proi-input:disabled {
    background: var(--n200);
  }

  .proi-input-container.disabled {
    background: var(--n200);
    color: var(--n800);
  }

  .proi-input-container.error {
    border: 2px solid var(--r200);
    background: var(--bright);
  }

  .proi-input-container.error > .proi-input {
    color: var(--r600);
  }

  .proi-input-container.error > .proi-input::placeholder {
    color: var(--r200);
  }

  .proi-icon {
    cursor: pointer;
    outline: unset;
    border: unset;
    background: transparent;
    width: 20px;
    padding: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20px;
  }
</style>
