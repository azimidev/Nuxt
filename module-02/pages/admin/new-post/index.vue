<template>
  <div class="admin-new-post-page columns ml-10">
    <AdminPostForm />
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'
export default {
  layout: 'admin',
  components: { AdminPostForm },
  data() {
    return {
      //
    }
  },
}
</script>
