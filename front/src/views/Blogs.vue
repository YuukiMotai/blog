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
            <td><router-link :to="{ name: 'show-blog', params: { id: blog.id }}"><button>show</button></router-link></td>
            <td><router-link :to="{ name: 'edit-blog', params: { id: blog.id }}"><button>edit</button></router-link></td>
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

<style>
table{
  width:70%;
  margin:0 auto;
}
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