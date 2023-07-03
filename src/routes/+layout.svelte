<script lang="ts">
	import Header from './Header.svelte';
	import './styles.css';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link
		href="https://fonts.googleapis.com/css2?family=Jockey+One&family=Merriweather:ital,wght@0,400;0,700;1,400&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>Created by <a href="https://alegemaate.com" target="_blank">Allan Legemaate</a></p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		background: #020e00;
		display: inline-flex;
		align-items: center;
		width: 100%;
	}

	main {
		display: flex;
		max-width: 50rem;
		width: 100%;
		padding: 1.5625rem;
		flex-direction: column;
		align-items: flex-start;
		border-radius: 0.7rem;
		background: #fff;
		box-shadow: 0px 4px 2px 0px rgba(0, 0, 0, 0.25);
		margin: 1rem 0 6rem 0;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 1rem;
		background: #15490c;
		color: #fff;
		width: 100%;
		position: fixed;
		bottom: 0;
		box-shadow: 0px -5px 5px 0 rgba(0, 0, 0, 0.25);
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
