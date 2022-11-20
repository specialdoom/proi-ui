<script lang="ts">
  export let visible: boolean = false;
</script>

{#if visible}
  <div
    class:proi-backdrop={true}
    on:click
    data-testid="proi-backdrop"
  >
    <div>
      <slot />
    </div>
  </div>
{/if}

<style>
  .proi-backdrop {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    z-index: -1;
    position: fixed;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-tap-highlight-color: transparent;
    z-index: 1201;
  }
</style>
