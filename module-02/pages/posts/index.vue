<template>
  <div class="container">
    <h1 class="title">Public Post</h1>
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
  data() {
    return {
      loadedPosts: data,
    }
  },
}
</script>
