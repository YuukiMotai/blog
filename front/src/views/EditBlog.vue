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
      ></textarea><br>

      <button class="mr-4" @click="updateBlog">Update</button>
    </form>
    <router-link to="/blogs">Back</router-link>
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
<style>
button{
    border: 0.1px solid #333333;
    width:80px;
    background-color: transparent;
    cursor: pointer;
    outline: none;
    padding: 5px 10px;
    appearance: none;
}
</style>