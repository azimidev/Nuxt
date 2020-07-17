<template>
  <div>
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from '@/components/PostList'
import data from '@/api/data.json'

export default {
  components: {
    PostList,
  },
  mounted() {
    // 1. dispatch action getPosts
    this.$store.dispatch('getPosts')
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    },
    // 5. get tge getter and display it
    posts() {
      return this.$store.getters.posts
    },
  },
}
</script>
