<template>
  <div class="container">
    <h1 class="title">Public Post</h1>
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from '@/components/PostList'

export default {
  components: {
    PostList,
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    },
  },
}
</script>
