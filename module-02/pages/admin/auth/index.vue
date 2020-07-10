<template>
  <div class="admin-auth-page columns is-centered mt-10">
    <div class="card column is-6">
      <div class="card-content">
        <form>
          <label>Email Address</label>
          <input type="text" class="input" />

          <label>Password</label>
          <input type="password" class="input" />

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
  data() {
    return {
      isLogin: true,
    }
  },
}
</script>

<style lang="scss" scoped></style>
