<script lang="ts">
	interface GalleryImage {
		src: string;
		caption: string;
	}

	export let images: GalleryImage[] = [];

	let selectedImage: GalleryImage | null = null;

	const handleZoom = (image: GalleryImage) => {
		selectedImage = image;
	};

	const handleCloseButton = () => {
		selectedImage = null;
	};

	const handleBackdropClick = (e: MouseEvent) => {
		if (!(e.target instanceof HTMLElement) || !e.target.classList.contains('zoom-container')) {
			return;
		}

		selectedImage = null;
	};
</script>

<div class="gallery">
	{#each images as image}
		<div
			class="image-container"
			role="button"
			tabindex="0"
			on:click={() => handleZoom(image)}
			on:keydown={() => handleZoom(image)}
		>
			<img src={image.src} alt="" />
		</div>
	{/each}

	{#if selectedImage}
		<div class="zoom-container" data-visible={!!selectedImage} aria-modal="true" role="dialog">
			<div class="zoom-container_inner">
				<button on:click={handleCloseButton} class="zoom-container_close">X</button>
				<img src={selectedImage.src} alt={selectedImage.caption} class="zoom-container_image" />
			</div>
		</div>
	{/if}
</div>

<style>
	.gallery {
		display: grid;
		width: 100%;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		grid-gap: 1rem;
	}

	.image-container {
		width: 100%;
		height: 100%;
		cursor: zoom-in;
		border-radius: 0.7rem;
		overflow: hidden;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.zoom-container {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.8);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.zoom-container_inner {
		position: relative;
		width: auto;
		height: 70%;
		border-radius: 0.7rem;
		overflow: hidden;
	}

	.zoom-container_image {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.zoom-container_close {
		position: absolute;
		top: 0.5rem;
		right: 0.5rem;
		padding: 0.5rem;
		background-color: rgba(0, 0, 0, 0.8);
		color: white;
		border: none;
		border-radius: 50%;
		width: 2rem;
		height: 2rem;
		cursor: pointer;
	}
</style>
