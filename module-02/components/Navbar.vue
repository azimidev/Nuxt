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
      <nuxt-link exact to="/admin" class="navbar-item">
        Admin
      </nuxt-link>
      <nuxt-link to="/admin/new-post" class="navbar-item">
        Add Post
      </nuxt-link>
      <nuxt-link to="/admin/auth" class="navbar-item">
        Login/Register
      </nuxt-link>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.nuxt-link-active {
  background-color: black;
}
</style>
