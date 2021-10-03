<script>
  import { metatags } from '@roxi/routify';
  import Highlight from '../components/Highlight.svelte';

  metatags.title = 'proi-ui';
</script>

<div class="container" style="flex-direction: column">
  <figure>
    <img alt="logo" src="logo.png" />
    <figcaption>proi-ui docs ( v1.0.0 )</figcaption>
  </figure>
  <Highlight>{`npm i proi-ui proi-ui-icons`}</Highlight>
  <div class="social-media-container">
    <a href="https://github.com/specialdoom/proi-ui">
      <img src="github.png" alt="github icon" />
    </a>
    <a href="https://twitter.com/ProiUi">
      <img src="twitter.png" alt="twitter icon" />
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
