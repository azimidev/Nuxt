<template>
  <div>
    <Navbar />
    <div>
      <h1 class="title has-text-danger">Admin Area</h1>
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  components: { Navbar },
}
</script>

<style lang="scss">
.container {
  margin-top: 30px;
}
</style>
