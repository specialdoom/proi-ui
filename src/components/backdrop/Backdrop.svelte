<script lang="ts">
  export let className: string = null;
  export let visible: boolean = false;
</script>

<div
  class="sd-backdrop {className}"
  class:sd-backdrop-visible={visible}
  class:sd-backdrop-not-visible={!visible}
  on:click
>
  <div>
    <slot />
  </div>
</div>

<style>
  .sd-backdrop {
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
    color: #fff;
    z-index: 1201;
  }

  .sd-backdrop-visible {
    opacity: 1;
    transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }

  .sd-backdrop-not-visible {
    opacity: 0;
    transition: opacity 195ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    visibility: hidden;
  }
</style>
