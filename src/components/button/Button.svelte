<script>
  export let type = 'primary';
  export let outlined = false;
  export let disabled = false;
  export let small = false;
  export let className = null;

  $: outlinedClass = outlined
    ? `sd-button-outline sd-outline-${type}`
    : `sd-${type}`;
</script>

<button
  class="sd-button {outlinedClass} {className}"
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
    border: 1px solid var(--sd-primary);
    color: var(--sd-primary);
  }

  .sd-outline-primary:hover {
    border: 1px solid var(--sd-primary);
    background: var(--sd-primary);
  }

  .sd-primary {
    background: var(--sd-primary);
  }

  .sd-primary:hover {
    background: var(--sd-primary-hover);
  }

  .sd-secondary {
    background: var(--sd-secondary);
  }

  .sd-secondary:hover {
    background: var(--sd-secondary-hover);
  }

  .sd-outline-secondary {
    border: 1px solid var(--sd-secondary);
    color: var(--sd-secondary);
  }

  .sd-outline-secondary:hover {
    background: var(--sd-secondary);
  }

  .sd-link {
    background: #fff;
    color: var(--sd-link);
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
