<script>
	import {tick} from 'svelte';
	import lifecycle from '../lifecycle';
    import SlotWrapper from '../Components/SlotWrapper.svelte';

	import {count} from '../store';

	let title = 'hello world';

	let color = '#000000';
	function changeColor() {
		color = 'red';
	}

	let isRed = true;
	function toggleColor() {
		isRed = !isRed;
	}

	lifecycle();
</script>

<main>
	<h1 class="title">{title}</h1>
	<hr />
	<h3>Style, Class</h3>
	<div style="background-color: {color};">
		style color box
	</div>
	<button on:click={changeColor}>change color</button>
	<div class="{isRed ? 'bg-red' : 'bg-blue'}">
		class color box
	</div>
	<button on:click={toggleColor}>change color</button>
	<hr />
	<!-- Slot -->
	<h3>Slot Example</h3>
	<SlotWrapper>
		<div>slot content</div>
	</SlotWrapper>
	<SlotWrapper let:slotName slotName="hello world">
		<div slot="named">
			named slot content
			<div>{slotName}</div>
		</div>
	</SlotWrapper>
	<hr />
	<!-- store -->
	<h3>Store</h3>
	<div>{$count}</div>
</main>

<style>
	.title {
		color: #ffb74d;
	}

	.bg-red {
		background-color: red;
	}

	.bg-blue {
		background-color: blue;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>