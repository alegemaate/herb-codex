<script lang="ts">
  import type { PlantUse } from "#lib/data.js";
  import { USE_LABELS } from "#lib/plants.js";

  let { uses }: { uses: PlantUse[] } = $props();
</script>

<ul class="badges">
  {#each uses as use (use)}
    <li class="badge" data-use={use}>{USE_LABELS[use]}</li>
  {/each}
</ul>

<style>
  .badges {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    list-style: none;
    padding: 0;
    margin: 0.4rem 0;
  }

  .badge {
    font-size: 0.8rem;
    padding: 0.15rem 0.6rem;
    border-radius: 1rem;
    background: var(--badge-bg);
    color: var(--badge-text);
  }

  .badge[data-use="food"] {
    background: var(--badge-food-bg);
  }

  .badge[data-use="medicinal"] {
    background: var(--badge-medicinal-bg);
  }
</style>
