<template>
  <div class="admin-auth-page columns is-centered mt-10">
    <div class="card column is-6">
      <div class="card-content">
        <form @submit.prevent="login">
          <label>Username</label>
          <input
            type="text"
            class="input"
            autocomplete="new-password"
            v-model="username"
          />

          <label>Password</label>
          <input
            type="password"
            class="input"
            autocomplete="new-password"
            v-model="password"
          />

          <button type="submit" class="button is-primary mt-10">
            {{ isLogin ? 'Login' : 'Signup' }}
          </button>

          <button
            type="button"
            class="button is-dark mt-10"
            @click="isLogin = !isLogin"
          >
            Switch to
            {{ isLogin ? 'Signup' : 'Login' }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  data() {
    return {
      isLogin: true,
      username: '',
      password: '',
    }
  },
  methods: {
    login() {
      this.$store.dispatch('login', {
        username: this.username,
        password: this.password,
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
