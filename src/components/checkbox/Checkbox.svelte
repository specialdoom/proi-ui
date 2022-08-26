<script lang="ts">
  export let checked: boolean = null;
  export let disabled: boolean = false;
  export let className: string = null;

  $: checkboxDisabledClass = disabled
    ? 'sd-checkbox-square-disabled'
    : 'sd-checkbox-square';
</script>

<label class="sd-checkbox-container {className}" class:sd-disabled={disabled}>
  <input type="checkbox" bind:checked {disabled} />
  <span class="sd-checkbox-checkmark {checkboxDisabledClass}" />
  <span class="sd-checkbox-label"><slot /></span>
</label>

<style>
  .sd-checkbox-container {
    position: relative;
    padding-left: 24px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 16px;
    width: 50px;
    height: 30px;
  }

  .sd-checkbox-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .sd-checkbox-checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 15px;
    width: 15px;
    border-radius: 15%;
    border: 2px solid grey;
  }

  .sd-checkbox-container input:checked ~ .sd-checkbox-checkmark {
    background-color: var(--sd-primary);
    border-color: var(--sd-primary);
    animation: border 1s;
  }

  .sd-checkbox-container input:disabled ~ .sd-checkbox-checkmark {
    background-color: grey;
    border-color: grey;
  }

  .sd-checkbox-checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  .sd-checkbox-container input:checked ~ .sd-checkbox-checkmark:after {
    display: block;
  }

  .sd-checkbox-container .sd-checkbox-checkmark:after {
    left: 6px;
    top: 1px;
    width: 4px;
    height: 9px;
    border: solid white;
    border-width: 0 1px 1px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    animation: pulse 1s;
  }

  @keyframes pulse {
    0% {
      border-color: var(--sd-primary);
    }
    100% {
      border-color: white;
    }
  }

  .sd-checkbox-square-disabled {
    background: grey;
  }

  .sd-checkbox-square:hover {
    border-left-color: var(--sd-primary);
    border-bottom-color: var(--sd-primary);
    border-right-color: var(--sd-primary);
    border-top-color: var(--sd-primary);

    transition: border-left-color 0.1s linear,
      border-bottom-color 0.1s linear 0.1s, border-right-color 0.1s linear 0.2s,
      border-top-color 0.1s linear 0.3s;
  }

  .sd-checkbox-square:not(:hover) {
    border-left-color: grey;
    border-bottom-color: grey;
    border-right-color: grey;
    border-top-color: grey;

    transition: border-left-color 0.1s linear,
      border-bottom-color 0.1s linear 0.1s, border-right-color 0.1s linear 0.2s,
      border-top-color 0.1s linear 0.3s;
  }

  .sd-checkbox-label {
    margin-right: 5px;
    font-size: 16px;
    font-weight: 100;
  }
</style>
