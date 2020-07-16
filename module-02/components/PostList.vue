<template>
  <div class="columns">
    <div class="column" v-for="(post, index) in posts" :key="index">
      <Post
        :is-admin="isAdmin"
        :id="post.id"
        :title="post.title"
        :body="post.body"
        :img="post.img"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostList',
  props: {
    isAdmin: {
      type: Boolean,
      default: false,
    },
    posts: {
      type: Array,
      required: true,
    },
  },
}
</script>
