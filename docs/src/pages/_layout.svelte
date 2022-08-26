<script lang="ts">
  import { metatags } from '@roxi/routify';
  import Nav from '../components/Nav.svelte';

  metatags.title = 'proi-ui';
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
