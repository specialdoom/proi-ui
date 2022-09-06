<script lang="ts">
  import type { DropdownOption } from "./dropdown.types.js";
  import { clickOutside } from "../utils/clickOutside.js";
  import CarretDown from "../icons/CarretDown.svelte";
  import CarretUp from "../icons/CarretUp.svelte";
  import Search from "../icons/Search.svelte";

  export let options: DropdownOption[];
  export let placeholder: string;
  export let value: string | number = "";
  export let error: boolean = false;
  export let disabled: boolean = false;

  let toggle: boolean = false;
  let allOptions: DropdownOption[] = options;

  $: currentValue = options.find((o) => o.value === value)?.label;

  function handleSearch(e: Event) {
    const searchValue = (e.target as HTMLInputElement).value;
    options = allOptions.filter((o) => o.label.includes(searchValue));
  }

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
      <div class="proi-search-option">
        <Search />
        <input placeholder="Search option" on:input={handleSearch} />
      </div>
      <div class="proi-options">
        {#each options as option}
          <div
            class="proi-option"
            class:selected={option.value === value}
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
  .proi-dropdown-container {
    position: relative;
  }

  .proi-dropdown {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
    height: 32px;
    border: 2px solid var(--n200);
    padding: 8px 10px;
    border-radius: 4px;
    line-height: 24px;
    font-size: 13px;
    cursor: pointer;
  }

  .proi-dropdown.error {
    border-color: var(--r200);
    color: var(--r200);
  }

  .proi-dropdown.focus {
    outline: 2px solid var(--g200);
    cursor: unset;
  }

  .proi-dropdown.disabled {
    background: var(--n0);
    color: var(--n400);
    border-color: var(--n0);
  }

  .proi-dropdown-options {
    position: absolute;
    top: 36px;
    border: 2px solid var(--n200);
    width: 240px;
    box-sizing: border-box;
    border-radius: 4px;
    background: var(--w);
  }

  .proi-search-option {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    height: 32px;
  }

  .proi-search-option input {
    border: unset;
    outline: unset;
    font-size: 12px;
    width: 190px;
  }

  .proi-options {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .proi-option {
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    padding: 0 10px;
    height: 32px;
    font-size: 12px;
    cursor: pointer;
    border-top: 1px solid var(--n0);
  }

  .proi-option:hover {
    background: var(--g200);
  }

  .proi-option.selected {
    background: var(--g0);
  }
</style>
