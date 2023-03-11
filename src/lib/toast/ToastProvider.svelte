<script lang="ts">
  import { toast } from "./store/toast.js";
  import Toast from "./Toast.svelte";
  import type { Slice } from "./toast.types.js";

  let toasts: Slice[] = [];

  function add(slice: Slice) {
    toasts = [slice, ...toasts];

    timeout();
  }

  function remove() {
    toasts = toasts.slice(0, -1);
  }

  function timeout() {
    setTimeout(() => {
      remove();
    }, 3000);
  }

  $: toast.subscribe((slice) => {
    if (!slice) {
      return;
    }
    add(slice);
  });
</script>

<div class="proi-toasts-container">
  {#each toasts as toast}
    <Toast {...toast} />
  {/each}
</div>

<style>
  .proi-toasts-container {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 10;
  }
</style>
