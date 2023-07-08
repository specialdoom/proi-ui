<script lang="ts">
  export let visible: boolean = false;
</script>

{#if visible}
  <div
    class="proi-backdrop"
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
    background-color: var(--pi-bg-inverse);
    color: var(--pi-text);
    opacity: 0.2;
    z-index: 9000;
  }
</style>
