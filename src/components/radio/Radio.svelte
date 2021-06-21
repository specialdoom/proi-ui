<script>
  export let value = null;
  export let disabled = false;
  export let group = null;
</script>

<label class="sd-radio-container" class:sd-disabled={disabled}>
  <input type="radio" bind:group {value} {disabled} />
  <span
    class="sd-radio-bullet"
    class:sd-radio-circle-disabled={disabled}
    class:sd-radio-circle={!disabled}
  />
  <span class="sd-radio-label"><slot /></span>
</label>

<style>
  .sd-radio-container {
    position: relative;
    padding-left: 30px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 15px;
    width: 50px;
    height: 30px;
  }

  .sd-radio-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .sd-radio-bullet {
    position: absolute;
    top: 0;
    left: 0;
    height: 15px;
    width: 15px;
    border-radius: 50px;
    border: 1px solid black;
  }

  .sd-radio-container input:checked ~ .sd-radio-bullet {
    background-color: #2398ab;
    border-color: #2398ab;
    animation: border 1s;
  }

  .sd-radio-container input:disabled ~ .sd-radio-bullet {
    background-color: grey;
    border-color: grey;
  }

  .sd-radio-bullet:after {
    content: '';
    position: absolute;
    display: none;
  }

  .sd-radio-container input:checked ~ .sd-radio-bullet:after {
    display: block;
  }

  .sd-radio-container .sd-radio-bullet:after {
    left: 4px;
    top: 4px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }

  .sd-radio-circle {
    border: 2px solid grey;
    border-radius: 50%;
  }

  .sd-radio-circle-disabled {
    border: 2px solid grey;
    background: grey;
    border-radius: 50%;
  }

  .sd-radio-circle:hover {
    border-left-color: #2398ab;
    border-bottom-color: #2398ab;
    border-right-color: #2398ab;
    border-top-color: #2398ab;

    transition: border-left-color 0.1s linear,
      border-bottom-color 0.1s linear 0.1s, border-right-color 0.1s linear 0.2s,
      border-top-color 0.1s linear 0.3s;
  }

  .sd-radio-circle:not(:hover) {
    border-left-color: grey;
    border-bottom-color: grey;
    border-right-color: grey;
    border-top-color: grey;

    transition: border-left-color 0.1s linear,
      border-bottom-color 0.1s linear 0.1s, border-right-color 0.1s linear 0.2s,
      border-top-color 0.1s linear 0.3s;
  }

  .sd-radio-label {
    margin-right: 5px;
    font-size: 16px;
    font-weight: 100;
  }

  .sd-disabled {
    cursor: not-allowed;
  }
</style>
