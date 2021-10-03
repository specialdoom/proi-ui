<script>
  import Nav from '../components/Nav.svelte';
</script>

<Nav />

<slot />
<footer>
  <span class="legend" />
  <span class="copyright">
    {new Date().getFullYear()} &copy;
    <a href="https://github.com/specialdoom" alt="creator github link">
      specialdoom
    </a>
  </span>
</footer>
