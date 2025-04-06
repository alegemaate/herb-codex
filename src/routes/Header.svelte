<script lang="ts">
  import { page } from "$app/stores";
</script>

<header>
  <section class="header-top">
    <div class="header-inner">
      <a href="/"> HerbCodex </a>
    </div>
  </section>
  <nav>
    <ul>
      <li aria-current={$page.url.pathname === "/" ? "page" : undefined}>
        <a href="/">Home</a>
      </li>
      <li aria-current={$page.url.pathname === "/plants" ? "page" : undefined}>
        <a href="/plants/">Plants</a>
      </li>
      <li
        aria-current={$page.url.pathname === "/classifications"
          ? "page"
          : undefined}
      >
        <a href="/classifications/">Classifications</a>
      </li>
      <li aria-current={$page.url.pathname === "/about" ? "page" : undefined}>
        <a href="/about/">About</a>
      </li>
    </ul>
  </nav>
</header>

<style>
  header {
    width: 100%;
  }

  .header-top {
    display: flex;
    padding: 1.25rem 0rem;
    justify-content: center;
    align-items: center;
    background: #15490c;
    color: #fff;
  }

  .header-inner {
    display: flex;
    max-width: var(--max-width);
    width: 100%;
    align-items: center;
    font-family: Jockey One;
    font-size: 2rem;
  }

  nav {
    display: flex;
    width: 100%;
    padding: 1.125rem 0rem;
    flex-direction: column;
    align-items: center;
    gap: 0.625rem;
    background-color: #113d0a;
  }

  ul {
    display: flex;
    max-width: var(--max-width);
    width: 100%;
    align-items: center;
    gap: 1.125rem;
    list-style: none;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
  }

  li {
    color: #fff;
    font-size: 1rem;
    font-family: Jockey One;
  }

  a {
    color: #fff;
  }
</style>
