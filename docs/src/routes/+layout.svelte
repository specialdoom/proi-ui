<script lang="ts">
  import Nav from "$lib/components/Nav.svelte";
  import "../global.css";
  import "@specialdoom/proi-ui/variables.css";
  import { ToastProvider } from "@specialdoom/proi-ui";
</script>

<svelte:head>
  <title>proi-ui</title>
</svelte:head>

<ToastProvider />
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

<style>
  footer {
    position: fixed;
  }
</style>
