<template>
  <div class="column">
    <article class="media">
      <figure class="media-left">
        <p class="image is-64x64">
          <img :src="loadedPost.img" />
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{ loadedPost.title }}</strong>
            <br />
            {{ loadedPost.body }}
          </p>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import data from '@/api/data.json'

export default {
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPost: {
          id: 1,
          title: `The first post (ID: ${context.params.id})`,
          body: 'The first post body',
          img: '/images/bantham.jpg',
        },
      })
    }, 2000)
  },
}
</script>

<style lang="scss" scoped></style>
