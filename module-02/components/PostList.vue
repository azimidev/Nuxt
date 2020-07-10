<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <Post
          :is-admin="isAdmin"
          :id="1"
          title="The First Post"
          body="This is The First Post body"
          img="/images/bantham.jpg"
        />
      </div>
      <div class="column">
        <Post
          :is-admin="isAdmin"
          :id="1"
          title="The Second Post"
          body="This is The Second Post body"
          img="/images/bantham.jpg"
        />
      </div>
      <div class="column">
        <Post
          :is-admin="isAdmin"
          :id="1"
          title="The Third Post"
          body="This is The Third Post body"
          img=" /images/bantham.jpg"
        />
      </div>
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
  },
}
</script>
