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
   * `callback(error, data)`
   */
  asyncData(context, callback) {
    // NOTE: using `Promise` instead of `callback`
    // return new Promise().catch((error) => context.error(new Error()))

    setTimeout(() => {
      callback(null, {
        loadedPosts: data,
      })
    }, 2000)
  },
}
</script>
