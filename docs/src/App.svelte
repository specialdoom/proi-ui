<script>
  import { ToastProvider } from 'proi-ui';
  import Home from './pages/Home.svelte';
  import Docs from './pages/Docs.svelte';
  import Icons from './pages/Icons.svelte';
  import Nav from './components/Nav.svelte';

  let components = { Home: Home, Docs: Docs, Icons: Icons };

  let selected = 'Home';

  $: component = components[selected];
</script>

<ToastProvider />

<Nav bind:selected />

<svelte:component this={component} />

<footer>
  <span class="legend" />
  <span class="copyright">
    {new Date().getFullYear()} &copy;
    <a href="https://github.com/specialdoom" alt="creator github link">
      specialdoom
    </a>
  </span>
  <span class="social">
    <a href="https://github.com/specialdoom/proi-ui">
      <img src="github.png" alt="github icon" />
    </a>
    <a href="https://twitter.com/ProiUi">
      <img src="twitter.png" alt="twitter icon" />
    </a>
  </span>
</footer>
