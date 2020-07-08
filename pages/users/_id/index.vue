<template>
	<div>
		<h1 class="title">A single parsclick.net user {{ $route.params.id }}</h1>
	</div>
</template>

<script>
export default {
	/**
	 * Route Validation
	 */
	validate(data) {
		console.log(data)
		return /^\d+$/.test(data.params.id)
	},
}
</script>
