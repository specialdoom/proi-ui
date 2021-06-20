<script>
  export let checked = null;
  export let disabled = false;

  $: checkboxDisabledClass = disabled
    ? 'sd-checkbox-square-disabled'
    : 'sd-checkbox-square';
</script>

<label class="sd-checkbox-container" class:sd-disabled={disabled}>
  <input type="checkbox" bind:checked {disabled} />
  <span class="sd-checkbox-checkmark {checkboxDisabledClass}" />
  <span class="sd-checkbox-label"><slot /></span>
</label>

<style>
  .sd-checkbox-container {
    position: relative;
    padding-left: 30px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 15px;
    width: 50px;
    height: 30px !important;
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
    background-color: #2398ab;
    border-color: #2398ab;
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
      border-color: #2398ab;
    }
    100% {
      border-color: white;
    }
  }

  .sd-checkbox-square-disabled {
    background: grey;
  }

  .sd-checkbox-square:hover {
    border-left-color: #2398ab;
    border-bottom-color: #2398ab;
    border-right-color: #2398ab;
    border-top-color: #2398ab;

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

  .sd-disabled {
    cursor: not-allowed;
  }
</style>
