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

  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPosts: data,
      })
    }, 2000)
  },
}
</script>
