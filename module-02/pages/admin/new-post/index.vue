<template>
  <div class="admin-new-post-page columns ml-10">
    <AdminPostForm :post="post" />
  </div>
</template>

<script>
import data from '@/api/data.json'

export default {
  layout: 'admin',
  data() {
    return {
      post: data[0],
    }
  },
}
</script>
