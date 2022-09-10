<script lang="ts">
  import type { DropdownOption } from "./dropdown.types.js";
  import { clickOutside } from "../utils/clickOutside.js";
  import CarretDown from "../icons/CarretDown.svelte";
  import CarretUp from "../icons/CarretUp.svelte";

  export let options: DropdownOption[];
  export let placeholder: string;
  export let value: string | number = "";
  export let error: boolean = false;
  export let disabled: boolean = false;

  let toggle: boolean = false;

  $: currentValue = options.find((o) => o.value === value)?.label;

  function handleSelectOption(selectedValue: string | number) {
    value = selectedValue;
    toggle = false;
  }
</script>

<div class="proi-dropdown-container">
  <div
    class="proi-dropdown"
    on:click={() => {
      if (disabled) return;

      toggle = !toggle;
    }}
    class:error
    class:focus={toggle}
    class:disabled
    class:placeholder={!currentValue}
    data-testid="proi-dropdown"
  >
    {currentValue ? currentValue : placeholder}
    {#if toggle}
      <CarretUp />
    {:else}
      <CarretDown fillColor={disabled ? "#89959B" : "#223843"} />
    {/if}
  </div>
  {#if toggle}
    <div
      class="proi-dropdown-options"
      use:clickOutside
      on:click_outside={() => (toggle = false)}
    >
      <div class="proi-options">
        {#each options as option}
          <div
            class="proi-option"
            class:selected={option.value === value}
            class:disabled={option.disabled}
            on:click={() => handleSelectOption(option.value)}
          >
            {option.label}
          </div>
        {/each}
      </div>
    </div>
  {/if}
</div>

<style>
  @import "./dropdown.css";
</style>
