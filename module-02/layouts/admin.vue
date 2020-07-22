<template>
  <div>
    <Navbar />
    <div class="has-text-centered">
      <h1 class="title has-text-danger mt-10">Admin Area</h1>
    </div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  middleware: 'auth',
}
</script>

<style lang="scss">
.container {
  margin-top: 30px;
}
</style>
