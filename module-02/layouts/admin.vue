<template>
  <div>
    <Navbar />
    <div>
      <h1 class="title has-text-danger has-text-centered mt-10">Admin Area</h1>
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  // middleware: 'auth',
}
</script>

<style lang="scss">
.container {
  margin-top: 30px;
}
</style>
