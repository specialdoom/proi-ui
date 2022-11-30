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
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1200;
  }
</style>
