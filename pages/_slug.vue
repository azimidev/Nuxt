<template>
  <div>
    <nuxt-content :document="index" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const index = await $content(params.slug).fetch()

    await console.log(params)

    return { index }
  },
}
</script>
