<script>
  export let type = 'primary';
  export let outlined = false;
  export let disabled = false;
  export let small = false;

  $: outlinedClass = outlined
    ? `sd-button-outline sd-outline-${type}`
    : `sd-${type}`;
</script>

<button
  class="sd-button {outlinedClass}"
  class:sd-button-small={small}
  {disabled}
  on:click
>
  <slot />
</button>

<style>
  .sd-button {
    width: auto;
    min-width: 100px;
    height: 40px;
    margin: 3px;
    padding: 12px;
    color: #fff;
    text-align: center;
    line-height: 1;
    border-radius: 4px;
    white-space: nowrap;
    font-weight: 300;
    font-size: 15px;
    border: none;
    box-sizing: border-box;
    display: inline-block;
    outline: none;
    user-select: none;
    cursor: pointer;
    transition: all 0.25s;
  }

  .sd-button-small {
    min-width: 80px;
    height: 30px;
    margin: 3px;
    padding: 0 8px;
  }

  .sd-button:disabled {
    opacity: 0.5;
    color: white;
    border: 1px solid grey;
    background: grey;
    cursor: not-allowed;
  }

  .sd-button:disabled:hover {
    opacity: 0.5;
    color: white;
    background: grey;
    border: 1px solid grey;
  }

  .sd-button-outline {
    background: #ffffff;
  }

  .sd-button-outline:hover {
    color: #ffffff;
  }

  .sd-outline-primary {
    border: 1px solid #2398ab;
    color: #2398ab;
  }

  .sd-outline-primary:hover {
    border: 1px solid #2398ab;
    background: #2398ab;
  }

  .sd-primary {
    background: #2398ab;
  }

  .sd-primary:hover {
    background: #2ec1d5;
  }

  .sd-secondary {
    background: #ee3d48;
  }

  .sd-secondary:hover {
    background: #f11823;
  }

  .sd-outline-secondary {
    border: 1px solid #ee3d48;
    color: #ee3d48;
  }

  .sd-outline-secondary:hover {
    background: #ee3d48;
  }

  .sd-link {
    background: #fff;
    color: #5199ff;
  }

  .sd-link:hover {
    text-decoration: underline;
  }

  .sd-link:disabled {
    background: transparent;
    border: unset;
    color: grey;
    text-decoration: underline;
  }

  .sd-link:disabled:hover {
    color: grey;
    background: transparent;
    border: unset;
  }
</style>
