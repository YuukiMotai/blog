<template>
  <div>
    <h1>Blogs</h1>
      <AddBlog />
        <table>
          <tr>
            <th>Title</th>
            <th>Description</th>
          </tr>
          <tr v-for="blog in blogs" :key="blog.id">
            <td>{{ blog.title }}</td>
            <td>{{ blog.body }}</td>
            <td><router-link :to="{ name: 'show-blog', params: { id: blog.id }}">show</router-link></td>
            <td><router-link :to="{ name: 'edit-blog', params: { id: blog.id }}">edit</router-link></td>
            <td><button class="button_link" @click="deleteBlog(blog)">delete</button></td>
          </tr>
        </table>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import AddBlog from './AddBlog'
export default {
  components: {
    AddBlog
  },
    computed: {
    ...mapState(['blogs'])
  },
  data() {
    return {
      blog: {}
    }
  },
  methods: {
    deleteBlog(blog) {
      this.$store.dispatch('deleteBlog', blog)
    }
  }
}
</script> 