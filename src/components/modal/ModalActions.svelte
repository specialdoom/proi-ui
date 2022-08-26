<script lang="ts">
  export let className: string = null;
</script>

<div class="sd-modal-actions {className}">
  <slot />
</div>

<style>
  .sd-modal-actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 16px;
    border-top: 1px solid var(--sd-light-grey);
  }
</style>
