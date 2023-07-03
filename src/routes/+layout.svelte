<script lang="ts">
	import Header from './Header.svelte';
	import './styles.css';
</script>

<svelte:head>
	<meta name="keywords" content="herb, codex, herbcodex, plants, plant, herbs, weeds, useful" />
	<meta name="author" content="Allan Legemaate" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="theme-color" content="#15490c" />

	<meta name="mobile-web-app-capable" content="yes" />
	<meta name="application-name" content="HerbCodex" />
	<meta name="apple-mobile-web-app-status-bar-style" content="#15490c" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-title" content="HerbCodex" />

	<meta name="msapplication-navbutton-color" content="#15490c" />
	<meta name="msapplication-tooltip" content="HerbCodex" />
	<meta name="msapplication-starturl" content="/" />
	<meta name="msapplication-tap-highlight" content="no" />
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
		max-width: var(--max-width);
		width: 100%;
		padding: 1.5625rem;
		flex-direction: column;
		align-items: flex-start;
		border-radius: var(--border-radius);
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

	@media screen and (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
