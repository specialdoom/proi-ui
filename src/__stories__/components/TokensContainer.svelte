<script lang="ts">
  export let label: string;
</script>

<h3>{label}</h3>
<div>
  <slot />
</div>

<style>
  div {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }
</style>
