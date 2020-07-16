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

  /**
   * This is only usable in pages not in components
   */
  asyncData(context, callback) {
    console.log(context)
    setTimeout(() => {
      callback(null, {
        loadedPosts: data,
      })
    }, 2000)
  },
}
</script>
