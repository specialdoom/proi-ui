<script>
  import { Icon } from 'proi-ui-icons';
  import { clickOutside } from '../../utils/clickOutside';

  export let options = [];
  export let title = '';
  export let selected = options[0];
  export let disabled = false;
  export let className = null;
  export let listClassName = null;

  let toggle = false;

  const toggleOptions = () => {
    if (disabled) return;

    toggle = !toggle;
  };

  const selectOption = (index) => {
    selected = options[index];
    toggleOptions();
  };

  const handleClickOustside = () => {
    toggle = false;
  };
</script>

<div
  use:clickOutside
  on:click_outside={handleClickOustside}
  class="sd-dropdown-container"
>
  <div on:click={toggleOptions} class="sd-dropdown {className}" class:disabled>
    <span class="sd-dropdown-title">{selected ? selected : title}</span>
    <span class="sd-dropdown-icon">
      <Icon
        type={toggle ? 'arrowUp' : 'arrowDown'}
        scale="15"
        color={disabled ? 'grey' : null}
      />
    </span>
  </div>
  <ul
    class="sd-dropdown-options-container {listClassName}"
    class:sd-no-display={!toggle}
  >
    {#each options as option, i}
      <li
        class="sd-dropdown-option"
        class:sd-dropdown-selected-option={option === selected}
        on:click={() => selectOption(i)}
      >
        {option}
      </li>
    {/each}
  </ul>
</div>

<style>
  .sd-dropdown-container {
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
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    list-style-type: none;
    background: white;
    padding-inline-start: unset;
    z-index: 5;
    min-width: 300px;
    text-align: center;
  }

  .sd-dropdown {
    background: none;
    border: unset;
    border-bottom: 1px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
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

  .sd-dropdown-title {
    white-space: nowrap;
    overflow: hidden;
    width: 90%;
    text-overflow: ellipsis;
  }

  .sd-dropdown-icon {
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .sd-dropdown.disabled {
    color: grey;
    border-color: grey;
    border-bottom-style: dashed;
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
    background: var(--sd-primary-selected);
  }

  .sd-dropdown-option:hover {
    background: var(--sd-primary-hover);
  }

  .sd-dropdown-option:last-child {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
</style>
