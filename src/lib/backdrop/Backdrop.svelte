<script lang="ts">
  export let visible: boolean = false;
</script>

{#if visible}
  <div
    role="presentation"
    class:proi-backdrop={true}
    on:click
    on:keydown
    on:keyup
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
    display: flex;
    position: fixed;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background-color: var(--pi-bg-inverse, #000000);
    color: var(--pi-text, #000000);
    opacity: 0.2;
    z-index: 9000;
  }
</style>
