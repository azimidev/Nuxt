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
  data() {
    return {
      loadedPosts: [
        {
          id: 1,
          title: 'The second post',
          body: 'The first post body',
          img: '/images/bantham.jpg',
        },
        {
          id: 1,
          title: 'The second post',
          body: 'The second post body',
          img: '/images/bantham.jpg',
        },
        {
          id: 1,
          title: 'The third post',
          body: 'The third post body',
          img: '/images/bantham.jpg',
        },
      ],
    }
  },
}
</script>
