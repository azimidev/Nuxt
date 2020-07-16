<template>
  <div>
    <Navbar />
    <div>
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
  margin-left: 20px;
  margin-right: 20px;
}
</style>
