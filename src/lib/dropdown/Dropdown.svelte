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
    class="dropdown"
    on:click={() => (toggle = !toggle)}
    class:error
    class:toggle
  >
    {currentValue ? currentValue : placeholder}
    {#if toggle}
      <CarretUp />
    {:else}
      <CarretDown />
    {/if}
  </div>
  {#if toggle}
    <div
      class="dropdown-options"
      use:clickOutside
      on:click_outside={() => (toggle = false)}
    >
      <div class="search-option">
        <Search />
        <input placeholder="Search option" on:input={handleSearch} />
      </div>
      <div class="options">
        {#each options as option}
          <div
            class="option"
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
    font-size: 13px;
    font-weight: 400;
    display: flex;
    flex-direction: column;
  }

  .dropdown {
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    color: var(--n800);
    width: 240px;
    height: 32px;
    padding: 6px 10px;
    border-radius: 4px;
    border: 2px solid var(--n200);
    cursor: pointer;
  }

  div.dropdown.error {
    border: 2px solid var(--r200);
    outline: unset;
  }

  div.dropdown:active,
  div.dropdown:focus {
    outline: 2px solid var(--g200);
  }

  div.dropdown-options {
    box-sizing: border-box;
    position: absolute;
    top: 36px;
    left: 0;
    width: 240px;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    border: 1px solid var(--n200);
    background: var(--w);
    box-shadow: 0px 4px 8px 0px rgba(16, 24, 64, 0.16);
    z-index: 15;
  }

  .search-option {
    box-sizing: border-box;
    padding: 10px 12px;
    display: inline-flex;
    align-items: center;
    color: var(--n800);
    gap: 8px;
    height: 32px;
  }

  .search-option input {
    background: transparent;
    width: 90%;
    font-size: 13px;
    outline: unset;
    border: unset;
    color: inherit;
  }

  div.options {
    max-height: 160px;
    width: 240px;
    overflow: auto;
  }

  div.options .option {
    display: inline-flex;
    align-items: center;
    width: 240px;
    height: 32px;
    padding: 10px 12px;
    box-sizing: border-box;
    border-top: 2px solid var(--n0);
    cursor: pointer;
  }

  div.options .option :last-child {
    border: unset;
  }

  div.options .option :hover {
    background: var(--n800);
  }

  div.options .option .selected {
    color: var(--n800);
  }
</style>
