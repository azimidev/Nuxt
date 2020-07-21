<template>
  <nuxt-link :to="postLink">
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="img" alt="Placeholder image" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{ title | capitalize }}</p>
          </div>
        </div>

        <div class="content">
          {{ body | capitalize }}
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'Post',
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: false,
      default: 'https://bulma.io/images/placeholders/1280x960.png',
    },
    isAdmin: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    postLink() {
      return this.isAdmin ? '/admin/' + this.id : '/posts/' + this.id
    },
  },
}
</script>

<style lang="scss" scoped>
img {
  // NOTE: this is how you should reference the images in assets
  // background-image: url('~assets/images/bantham.jpg');
  background-size: cover;
}
</style>
