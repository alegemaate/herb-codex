<script lang="ts">
  import { resolve } from "$app/paths";
  import { page } from "$app/state";

  const links = [
    { route: "/", href: resolve("/"), label: "Home" },
    { route: "/plants", href: resolve("plants/"), label: "Plants" },
    {
      route: "/classifications",
      href: resolve("classifications/"),
      label: "Classifications",
    },
    { route: "/about", href: resolve("about/"), label: "About" },
  ];

  // Sections also match their child routes, e.g. /plants/[id] marks Plants.
  const isCurrent = (route: string) => {
    const id = page.route.id ?? "";
    return route === "/" ? id === "/" : id.startsWith(route);
  };
</script>

<header>
  <section class="header-top">
    <div class="header-inner">
      <a href={resolve("/")}> HerbCodex </a>
    </div>
  </section>
  <nav>
    <ul>
      {#each links as link (link.href)}
        <li>
          <a
            href={link.href}
            aria-current={isCurrent(link.route) ? "page" : undefined}
            >{link.label}</a
          >
        </li>
      {/each}
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
    background: var(--color-header);
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
    background-color: var(--color-nav);
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
    padding-bottom: 0.2rem;
    border-bottom: 0.15rem solid transparent;
  }

  a[aria-current="page"] {
    border-bottom-color: #9fd88f;
  }
</style>
