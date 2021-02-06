<script>
  import {onMount} from 'svelte';
  import { Chip, toaster, ToastProvider } from "proi-ui";
  import Home from "./pages/Home.svelte";
  import Docs from "./pages/Docs.svelte";
  import Icons from "./pages/Icons.svelte";
  import Nav from "./components/Nav.svelte";

  onMount(() => {
    toaster.send({
      message: "This is the toast component!",
      type: "info"
    })
  })

  let components = { Home: Home, Docs: Docs, Icons: Icons };

  let selected = "Home";

  $: component = components[selected];
</script>

<ToastProvider />

<Nav bind:selected />

<svelte:component this={component} />

<footer>
  <span class="legend">
    <Chip type="secondary" />
    <span>= new component</span>
    <Chip type="primary" />
    <span>= updated</span>
  </span>
  <span class="copyright">
    2020 &copy;
    <a href="https://github.com/specialdoom" alt="creator github link">
      specialdoom
    </a>
  </span>
  <span class="social">
    <a href="https://github.com/specialdoom/proi-ui">
      <img src="github.png" alt="github icon" />
    </a>
    <a href="https://www.facebook.com/proiui/">
      <img src="facebook.png" alt="github icon" />
    </a>
    <a href="https://twitter.com/ProiUi">
      <img src="twitter.png" alt="github icon" />
    </a>
  </span>
</footer>
