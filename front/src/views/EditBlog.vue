<template>
  <div>
    <h2>Editing Blog</h2>
    <form>
      <input
        v-model="blog.title"
        label="Title"
      >
      <textarea
        v-model="blog.body"
        label="Body"
      ></textarea>

      <button class="mr-4" @click="updateBlog">Update</button>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['blogs']),
    blog() {
      return this.blogs.find(b => b.id == this.$route.params.id) || {}
    }
  },
  methods: {
    async updateBlog() {
      const blog = await this.$store.dispatch('editBlog', this.blog)
      this.$router.push({ name: 'show-blog', params: { id: blog.id }})
    }
  }
}
</script>