<template>
  <div>
    <h1 class="title">A single parsclick.net user {{ $route.params.id }}</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route)
  },
}
</script>
