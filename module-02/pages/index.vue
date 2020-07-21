<template>
  <div>
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import data from '@/api/data.json'

export default {
  mounted() {
    // 1. dispatch action getPosts
    // this.$store.dispatch('setPosts')
    // We don't use this because we  fetch the post via `nuxtServerInit`
  },
  computed: {
    // 5. get tge getter and display it
    loadedPosts() {
      return this.$store.getters.loadedPosts
    },
  },
}
</script>
