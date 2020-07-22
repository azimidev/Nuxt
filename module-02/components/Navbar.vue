<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img
          src="https://parsclick.net/img/logo/Logo.png"
          width="30"
          height="30"
        />
      </a>

      <nuxt-link exact to="/" class="navbar-item">
        Home
      </nuxt-link>

      <nuxt-link to="/posts" class="navbar-item">
        Posts
      </nuxt-link>
      <nuxt-link exact to="/admin" class="navbar-item" v-if="isAuthenticated">
        Admin
      </nuxt-link>
      <nuxt-link
        to="/admin/new-post"
        class="navbar-item"
        v-if="isAuthenticated"
      >
        Add Post
      </nuxt-link>

      <a @click.prevent="logout" class="navbar-item" v-if="isAuthenticated">
        Logout
      </a>
      <nuxt-link to="/admin/auth" class="navbar-item" v-if="!isAuthenticated">
        Login
      </nuxt-link>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.nuxt-link-active {
  background-color: black;
}
</style>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push('/')
    },
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated
    },
  },
}
</script>
