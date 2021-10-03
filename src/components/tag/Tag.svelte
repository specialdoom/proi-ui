<script>
  export let outlined = false;
  export let className = null;
</script>

<span class="sd-tag {className}" class:outlined>
  <slot />
</span>

<style>
  .sd-tag {
    background-color: var(--sd-primary);
    border: none;
    cursor: default;
    height: 25px;
    min-width: 25px;
    display: inline-flex;
    outline: 0;
    color: var(--sd-white);
    padding: 4px 8px;
    font-size: 14px;
    box-sizing: border-box;
    align-items: center;
    white-space: nowrap;
    border-radius: 4px;
    justify-content: center;
  }

  .sd-tag.outlined {
    background-color: transparent;
    color: var(--sd-primary);
    border: 1px solid var(--sd-primary);
  }
</style>
