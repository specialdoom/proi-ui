<script>
  export let color = '#2398ab';
  export let outlined = false;

  $: style = outlined
    ? `border: 1px solid ${color}; color: ${color};`
    : `background-color: ${color};`;
</script>

<span class="sd-tag" {style}>
  <slot />
</span>

<style>
  .sd-tag {
    border: none;
    cursor: default;
    height: 25px;
    min-width: 25px;
    display: inline-flex;
    outline: 0;
    color: white;
    padding: 4px 8px;
    font-size: 14px;
    box-sizing: border-box;
    align-items: center;
    white-space: nowrap;
    border-radius: 4px;
    justify-content: center;
  }
</style>
