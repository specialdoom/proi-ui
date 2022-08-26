<script lang="ts">
  import { Icon } from '../../../icons/src';

  export let onClose: () => void;
  export let className: string = null;
</script>

<div class="sd-modal-title">
  <div class="sd-title {className}">
    <slot />
  </div>
  <span class="sd-modal-close" on:click={onClose}>
    <Icon variant="circleClose" />
  </span>
</div>

<style>
  .sd-modal-title {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: start;
    align-items: flex-start;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 1rem 1rem;
    border-bottom: 1px solid var(--sd-light-grey);
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
  }

  .sd-modal-title .sd-title {
    font-weight: 500;
    font-size: 1rem;
  }

  .sd-modal-close {
    float: right;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
    color: var(--sd-black);
    opacity: 0.5;
    text-shadow: 0 1px 0 var(--sd-white);
    opacity: 0.5;
    padding: 1rem 1rem;
    margin: -1rem -1rem -1rem auto;
  }

  .sd-modal-close:hover {
    opacity: 1;
  }
</style>
