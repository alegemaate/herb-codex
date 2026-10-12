<script lang="ts">
  interface GalleryImage {
    src: string;
    caption: string;
  }

  let {
    images = [],
    plantName,
  }: { images: GalleryImage[]; plantName: string } = $props();

  let dialog: HTMLDialogElement | undefined = $state();
  let index = $state(0);
  let touchStartX: number | null = null;

  const selected = $derived(images[index]);
  const hasMany = $derived(images.length > 1);

  const open = (i: number) => {
    index = i;
    dialog?.showModal();
  };

  const close = () => dialog?.close();

  const step = (delta: number) => {
    index = (index + delta + images.length) % images.length;
  };

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      step(-1);
    } else if (event.key === "ArrowRight") {
      step(1);
    }
  };

  // A click on the dialog itself (not its content) is a click on the backdrop.
  const handleDialogClick = (event: MouseEvent) => {
    if (event.target === dialog) {
      close();
    }
  };

  const handleTouchStart = (event: TouchEvent) => {
    touchStartX = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: TouchEvent) => {
    if (touchStartX === null) {
      return;
    }
    const deltaX = event.changedTouches[0].clientX - touchStartX;
    touchStartX = null;
    if (Math.abs(deltaX) > 50) {
      step(deltaX < 0 ? 1 : -1);
    }
  };
</script>

<ul class="gallery">
  {#each images as image, i (image.src)}
    <li>
      <figure>
        <button class="thumb" onclick={() => open(i)}>
          <img
            src={image.src}
            alt={`${plantName}: ${image.caption}`}
            loading="lazy"
          />
        </button>
        <figcaption>{image.caption}</figcaption>
      </figure>
    </li>
  {/each}
</ul>

<dialog
  bind:this={dialog}
  class="lightbox"
  aria-label={`${plantName} photos`}
  onclick={handleDialogClick}
  onkeydown={handleKeydown}
  ontouchstart={handleTouchStart}
  ontouchend={handleTouchEnd}
>
  {#if selected}
    <figure class="lightbox_figure">
      <img src={selected.src} alt={`${plantName}: ${selected.caption}`} />
      <figcaption>
        {selected.caption}
        {#if hasMany}
          <span class="count">{index + 1} / {images.length}</span>
        {/if}
      </figcaption>
    </figure>

    <button class="control close" onclick={close} aria-label="Close">✕</button>
    {#if hasMany}
      <button
        class="control prev"
        onclick={() => step(-1)}
        aria-label="Previous photo">‹</button
      >
      <button
        class="control next"
        onclick={() => step(1)}
        aria-label="Next photo">›</button
      >
    {/if}
  {/if}
</dialog>

<style>
  .gallery {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
    list-style: none;
    padding: 0;
  }

  figure {
    margin: 0;
  }

  .thumb {
    display: block;
    width: 100%;
    aspect-ratio: 3 / 4;
    padding: 0;
    border: 0;
    cursor: zoom-in;
    border-radius: var(--border-radius);
    overflow: hidden;
    background-color: var(--color-placeholder);
  }

  .thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.2s ease;
  }

  .thumb:hover img,
  .thumb:focus-visible img {
    transform: scale(1.04);
  }

  figcaption {
    font-size: 0.85rem;
    margin-top: 0.4rem;
    color: var(--color-muted);
  }

  .lightbox {
    width: 100vw;
    height: 100vh;
    max-width: 100vw;
    max-height: 100vh;
    margin: 0;
    padding: 0;
    border: 0;
    background: transparent;
  }

  .lightbox::backdrop {
    background: rgba(0, 0, 0, 0.88);
  }

  .lightbox[open] {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .lightbox_figure {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 90vw;
    max-height: 90vh;
  }

  .lightbox_figure img {
    max-width: 90vw;
    max-height: 80vh;
    object-fit: contain;
    border-radius: var(--border-radius);
  }

  .lightbox_figure figcaption {
    color: #fff;
    font-size: 1rem;
    text-align: center;
  }

  .count {
    margin-left: 0.75rem;
    opacity: 0.7;
  }

  .control {
    position: fixed;
    border: none;
    border-radius: 50%;
    width: 2.75rem;
    height: 2.75rem;
    background-color: rgba(0, 0, 0, 0.6);
    color: #fff;
    font-size: 1.5rem;
    line-height: 1;
    cursor: pointer;
  }

  .control:hover {
    background-color: rgba(0, 0, 0, 0.9);
  }

  .close {
    top: 1rem;
    right: 1rem;
    font-size: 1.1rem;
  }

  .prev,
  .next {
    top: 50%;
    transform: translateY(-50%);
  }

  .prev {
    left: 1rem;
  }

  .next {
    right: 1rem;
  }
</style>
