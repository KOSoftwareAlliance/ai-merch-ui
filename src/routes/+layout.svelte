<script>
	import '../app.postcss';
	import { Heading } from 'flowbite-svelte'
</script>

<div class="page-wrapper bg-slate-600">
	<header class="text-center mb-6">
		<Heading tag="h2" class="text-slate-200">AIMerch</Heading>
	</header>
	<slot />
</div>

<style lang="scss">
	.page-wrapper{
		@media (max-width: 1024) {
			font-size: 16px;
		}
		padding: 2rem 3rem;
		height: 100%;
	}
</style>
