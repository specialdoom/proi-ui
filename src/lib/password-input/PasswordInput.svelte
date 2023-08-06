<script lang="ts">
  import IconButton from "../button/IconButton.svelte";
  import View from "../icons/View.svelte";
  import ViewHide from "../icons/ViewHide.svelte";

  export let placeholder: string = "";
  export let value: string = "";
  export let error: boolean = false;
  export let disabled: boolean = false;

  let showPassword: boolean = false;

  function onInput(e: Event) {
    const target = e.target as HTMLInputElement;

    value = target.value;
  }

  function onIconClick() {
    showPassword = !showPassword;
  }
</script>

<div class="proi-input-container">
  <input
    {value}
    type={showPassword ? "text" : "password"}
    {placeholder}
    class="proi-input"
    {disabled}
    class:disabled
    class:error
    on:input
    on:input={onInput}
    on:change
    on:keydown
  />
  {#if value}
    <IconButton
      icon={showPassword ? ViewHide : View}
      variant="ghost"
      on:click={onIconClick}
    />
  {/if}
</div>

<style>
  .proi-input-container {
    position: relative;
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;
    height: 32px;
    width: 100%;
  }

  .proi-input {
    border: 2px solid var(--pi-border-subtle, #5c5c5c);
    font-size: 14px;
    line-height: 20px;
    color: var(--pi-text, #000000);
    background: var(--pi-bg, #ffffff);
    box-sizing: border-box;
    padding: 6px 12px;
    outline: unset;
    border-radius: 4px;
    height: 100%;
    width: 100%;
  }

  .proi-input::placeholder {
    color: var(--pi-text-placeholder, #adadad);
  }

  .proi-input:focus {
    border: 2px solid var(--pi-focus, #1a6fb6);
  }

  .proi-input.disabled {
    border: unset;
    background: var(--pi-bg-disabled, #d6d6d6);
    color: var(--pi-text-disabled, #adadad);
  }

  .proi-input.error {
    border: 2px solid var(--pi-border-error, #e35226);
  }

  .proi-input-container :global(.proi-icon-button) {
    position: absolute;
    right: 2px;
    width: 27px;
    border-radius: 2px;
    height: 27px;
  }
</style>
