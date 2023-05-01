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

  function onIconClick(e: Event) {
    showPassword = !showPassword;
  }
</script>

<div class="proi-input-container">
  <input
    value
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
    border: 2px solid var(--n200);
    font-size: 14px;
    line-height: 20px;
    color: var(--n800);
    background: var(--bright);
    padding: 6px 12px;
    outline: unset;
    border-radius: 4px;
    height: 100%;
    width: 100%;
  }

  .proi-input::placeholder {
    color: var(--n400);
  }

  .proi-input:focus {
    outline: 2px solid var(--g800);
    outline-offset: -2px;
  }

  .proi-input:disabled {
    background: var(--n200);
  }

  .proi-input.disabled {
    background: var(--n200);
    color: var(--n800);
  }

  .proi-input.error {
    border: 2px solid var(--r200);
    background: var(--bright);
  }

  .proi-input-container :global(.proi-icon-button) {
    position: absolute;
    right: 2px;
    width: 27px;
    border-radius: 2px;
    height: 27px;
  }
</style>
