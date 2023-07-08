<script lang="ts">
  import type { DropdownOption } from "./dropdown.types.js";
  import ArrowDown from "../icons/ArrowDown.svelte";

  export let options: DropdownOption[];
  export let placeholder: string = "";
  export let value: string | number = "";
  export let error: boolean = false;
  export let disabled: boolean = false;
  export let open: boolean = false;

  let ref: HTMLDivElement | undefined = undefined;

  $: label = options.find((o) => o.value === value)?.label;

  function handleSelectOption(selectedValue: string | number) {
    if (options.find((o) => o.value === selectedValue).disabled) {
      return;
    }

    value = selectedValue;
    open = false;
  }

  function handleDropdownClick() {
    if (disabled) return;

    open = !open;
  }

  function handleWindowClick(event: Event) {
    const target = event.target as HTMLElement;

    if (ref && !ref.contains(target)) {
      open = false;
    }
  }
</script>

<svelte:window on:click={handleWindowClick} />

<div
  class="proi-dropdown-container"
  bind:this={ref}
>
  <button
    class="proi-dropdown"
    on:click={handleDropdownClick}
    on:keyup
    on:keydown
    class:error
    class:opened={open && !(disabled || error)}
    class:disabled
    {disabled}
    class:placeholder={!label}
    style:justify-content={label || placeholder ? "space-between" : "flex-end"}
  >
    {label ? label : placeholder}
    <ArrowDown />
  </button>
  {#if open}
    <div class="proi-dropdown-options-wrapper">
      <div class="proi-dropdown-options">
        {#each options as option}
          <div
            class="proi-dropdown-option"
            class:selected={option.value === value}
            class:disabled={option.disabled}
            on:click={() => handleSelectOption(option.value)}
            on:keydown
            on:keyup
            on:keypress
          >
            {option.label}
          </div>
        {/each}
      </div>
    </div>
  {/if}
</div>

<style>
  .proi-dropdown-container {
    position: relative;
  }

  .proi-dropdown {
    box-sizing: border-box;
    background: var(--pi-bg);
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 32px;
    border: 2px solid var(--pi-border-subtle);
    background: var(--pi-bg);
    padding: 6px 12px;
    border-radius: 4px;
    line-height: 20px;
    font-size: 14px;
    cursor: pointer;
    color: var(--pi-text);
  }

  .proi-dropdown:focus {
    border: 2px solid var(--pi-focus);
  }

  .proi-dropdown :global(svg) {
    transform: rotate(0deg);
    transition: all 0.11s cubic-bezier(0.2, 0, 0.38, 0.9);
  }

  .proi-dropdown.opened :global(svg) {
    transform: rotate(-180deg);
  }

  .proi-dropdown.placeholder {
    color: var(--pi-text-placeholder);
  }

  .proi-dropdown.error {
    border-color: var(--pi-border-error);
    color: var(--pi-text-error);
  }

  .proi-dropdown.disabled {
    background: var(--pi-bg-disabled);
    color: var(--pi-text-disabled);
    border: unset;
  }

  .proi-dropdown-options-wrapper {
    position: absolute;
    top: 36px;
    border: 2px solid var(--pi-border-subtle);
    width: 100%;
    box-sizing: border-box;
    border-radius: 4px;
    background: var(--pi-bg);
  }

  .proi-dropdown-options {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .proi-dropdown-option {
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    padding: 6px 12px;
    height: 32px;
    font-size: 14px;
    cursor: pointer;
    font-weight: 500;
  }

  .proi-dropdown-option:hover {
    background: var(--pi-bg-hover);
  }

  .proi-dropdown-option.disabled {
    color: var(--pi-text-disabled);
  }
</style>
