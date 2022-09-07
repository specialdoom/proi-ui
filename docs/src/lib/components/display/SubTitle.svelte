<script>
  export let href = '';
</script>

<a class="sub-title" {href}>
  <span id={href.slice(1)}>#</span>
  <slot />
</a>

<style>
  .sub-title {
    text-decoration: none;
    font-size: 18px;
    margin: 10px 0px;
  }

  .sub-title span {
    color: var(--g600);
  }
</style>
