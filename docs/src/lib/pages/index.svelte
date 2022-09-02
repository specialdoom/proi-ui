<script>
  import { metatags } from '@roxi/routify';
  import Highlight from '../components/Highlight.svelte';
  import pkg from '../../../package.json';
  import AnimatedLogo from '../components/AnimatedLogo.svelte';

  metatags.title = 'proi-ui';
</script>

<div class="container" style="flex-direction: column">
  <figure>
    <AnimatedLogo />
    <figcaption>proi-ui docs ( v{pkg.version} )</figcaption>
  </figure>
  <Highlight code={`npm i @specialdoom/proi-ui`} />
  <div class="social-media-container">
    <a href="https://github.com/specialdoom/proi-ui">
      <img src="/github.png" alt="github icon" />
    </a>
    <a href="https://twitter.com/ProiUi">
      <img src="/twitter.png" alt="twitter icon" />
    </a>
  </div>
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100vh - 108px);
  }

  figure {
    text-align: center;
    margin: 0 auto;
  }

  figure {
    margin: 0 0 1em 0;
  }

  img {
    width: 100%;
    max-width: 400px;
    transition: all 1s ease;
  }

  .social-media-container {
    display: inline;
  }

  .social-media-container img {
    height: 16px;
    width: 16px;
  }

  @media only screen and (max-width: 600px) {
    img {
      max-width: 300px;
    }
  }
</style>
