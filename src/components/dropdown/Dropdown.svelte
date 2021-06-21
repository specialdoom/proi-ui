<script>
  import { Icon } from 'proi-ui-icons';

  export let options = [];
  export let title = '';
  export let selected = options[0];
  export let disabled = false;

  let toggle = false;

  function toggleOptions() {
    toggle = !toggle;
  }

  function selectOption(index) {
    selected = options[index];
    toggleOptions();
  }
</script>

<div class="sd-dropdown">
  <button {disabled} on:click={toggleOptions} class="sd-dropdown-button">
    <span class="sd-dropdown-button-title">{selected ? selected : title}</span>
    <span class="sd-dropdown-button-icon">
      <Icon type={toggle ? 'arrowUp' : 'arrowDown'} scale="15" />
    </span>
  </button>
  <ul class="sd-dropdown-options-container" class:sd-no-display={!toggle}>
    {#each options as option, i}
      <li
        class="sd-dropdown-option"
        class:sd-dropdown-selected-option={option === selected}
        class:sd-dropdown-single-option={i == 0 && options.length === 1}
        class:sd-dropdown-first-option={i == 0 && options.length >= 2}
        class:sd-dropdown-last-option={i == options.length - 1 &&
          options.length >= 2}
        on:click={() => selectOption(i)}
      >
        {option}
      </li>
    {/each}
  </ul>
</div>

<style>
  .sd-dropdown {
    position: relative;
    user-select: none;
    outline: none;
    margin: 5px;
    width: 300px;
    height: 30px;
  }

  .sd-dropdown-options-container {
    position: absolute;
    top: 14px;
    width: auto;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    list-style-type: none;
    background: white;
    padding-inline-start: unset;
    z-index: 5;
    min-width: 300px;
    text-align: center;
  }

  .sd-dropdown-button {
    background: none;
    border: 1px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    margin: 0;
    width: 100%;
    height: 30px;
    padding: 5px;
    box-sizing: border-box;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    outline: none;
  }

  .sd-dropdown-button-title {
    white-space: nowrap;
    overflow: hidden;
    width: 90%;
    text-overflow: ellipsis;
  }

  .sd-dropdown-button-icon {
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .sd-dropdown-button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  .sd-no-display {
    display: none;
  }

  .sd-dropdown-option {
    box-sizing: border-box;
    padding: 5px;
    z-index: 5;
  }

  .sd-dropdown-selected-option {
    background: #91cbd5;
  }

  .sd-dropdown-first-option {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom-left-radius: unset;
    border-bottom-right-radius: unset;
  }

  .sd-dropdown-single-option {
    border-radius: 4px;
  }

  .sd-dropdown-last-option {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border-top-right-radius: unset;
    border-top-left-radius: unset;
  }

  .sd-dropdown-option:hover,
  .sd-dropdown-last-option:hover,
  .sd-dropdown-first-option:hover {
    background: #91cbd5;
  }
</style>
