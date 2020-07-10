<template>
	<div>
		<div><code>This is `/users`</code></div>

		<!-- <nuxt-child /> -->

		<h1 class="title">Users</h1>
		<input class="input" type="text" v-model="userId" />
		<button class="button is-dark" @click="onLoadUser">Load User</button>

		<Nuxt-Link :to="`/users/1`" class="button is-danger">Load user 1</Nuxt-Link>
	</div>
</template>

<script>
export default {
	data() {
		return {
			userId: '',
		}
	},
	methods: {
		onLoadUser() {
			// NOTE: to redirect without sending a request:
			this.$router.push(`/users/${this.userId}`)
		},
	},
}
</script>

<style lang="scss" scoped></style>
