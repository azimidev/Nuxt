<template>
  <div class="admin-page">
    <section class="new-post" v-if="isAdmin">
      <h1 class="title">Create New Post</h1>
      <button class="button is-primary">Create Post</button>
    </section>
    <hr />
    <section class="existing-posts">
      <h1 class="title">Existing Posts</h1>
      <PostList :is-admin="true" :posts="loadedPosts" />
    </section>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  data() {
    return {
      isAdmin: false,
    }
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    },
  },
}
</script>
