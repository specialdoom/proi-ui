<script>
  export let width = "100%";
  export let height = "auto";
  export let direction = "column";
  export let alignItems = "center";
  export let justifyContent = "flex-start";
  export let gap = "8px";

  const getStyle = () =>
    `display: flex; flex-direction: ${direction}; align-items: ${alignItems}; justify-content: ${justifyContent}; gap: ${gap}; width: ${width}; height: ${height};`;
</script>

<div style={getStyle()}>
  <slot />
</div>

<style>
</style>
