<script>
  import { url, isActive } from '@roxi/routify';
</script>

<nav>
  <ul>
    <li aria-current={$isActive('/index') ? 'page' : undefined}>
      <a href={$url('/')}>Home</a>
    </li>
    <li aria-current={$isActive('/getting-started') ? 'page' : undefined}>
      <a href={$url('/getting-started')}>Getting started</a>
    </li>
    <li aria-current={$isActive('/components') ? 'page' : undefined}>
      <a href={$url('/components')}>Components</a>
    </li>
    <li aria-current={$isActive('/icons') ? 'page' : undefined}>
      <a href={$url('/icons')}>Icon</a>
    </li>

    <li class="nav-logo">
      <img src="/favicon.png" alt="mini logo" height="40" />
    </li>
  </ul>
</nav>

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
    content: '';
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  li a {
    text-decoration: unset;
    height: 100%;
    cursor: poitner;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: '';
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
