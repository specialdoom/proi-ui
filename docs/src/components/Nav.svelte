<script>
  import { Chip } from "proi-ui";
  export let selected = "Home";

  function select(value) {
    selected = value;
  }
</script>

<style>
  nav {
    border-bottom: 1px solid rgba(35, 152, 171, 0.1);
    font-weight: 300;
    padding: 0 1em;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgba(35, 152, 171);
    display: block;
    bottom: -1px;
  }

  li {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
    cursor: pointer;
  }

  li:hover {
    background: rgba(35, 152, 171, 0.3);
  }

  .nav-logo {
    float: right;
    padding: 8px;
    box-sizing: border-box;
    cursor: default;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 1s ease;
  }

  .nav-logo:hover {
    background: unset;
  }

  .nav-logo > img {
    height: 40px;
    transition: all 1s ease;
  }

  @media only screen and (max-width: 600px) {
    .nav-logo {
      padding: 14px;
    }
    .nav-logo > img {
      height: 20px;
    }
  }
</style>

<nav>
  <ul>
    <li
      aria-current={selected === 'Home' ? 'page' : undefined}
      on:click={() => select('Home')}>
      Home
    </li>
    <li
      aria-current={selected === 'Docs' ? 'page' : undefined}
      on:click={() => select('Docs')}>
      Docs
    </li>
    <li
      aria-current={selected === 'Icons' ? 'page' : undefined}
      on:click={() => select('Icons')}>
      Icons
    </li>
    <li class="nav-logo">
      <img src="logo.png" alt="mini logo" height="40" />
    </li>
  </ul>
</nav>
