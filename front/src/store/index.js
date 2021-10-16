import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/api/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    blogs: [],
  },
  mutations: {
    FETCH_BLOGS(state, blogs) {
      state.blogs = blogs
    },
    DELETE_BLOG(state, blogId) {
      const blogs = state.blogs.filter(b => b.id != blogId)
      state.blogs = blogs
    },
  },
  ADD_BLOG(state, blog) {
    const blogs = state.blogs.concat(blog)
    state.blogs = blogs
  },
  EDIT_BLOG(state, blog) {
    state.blogs.forEach(b => {
      if (b.id === blog.id) {
        b = blog
      }
    })
  },

  actions: { 
    async fetchBlogs({ commit }) {
      await axios().get('/blogs_a')
        .then(res => {
          commit('FETCH_BLOGS', res.data)
        })
        .catch(e => console.log(e))
    },
    async addBlog({ commit }, blog) {
      const res = await axios().post('blogs_a', blog)
      const savedBlog = res.data
      commit('ADD_BLOG', savedBlog)
      return savedBlog
    },
    async editBlog({ commit }, blog) {
      const res = await axios().put(`/blogs_a/${blog.id}`, blog)
      const editedBlog = res.data
      commit('EDIT_BLOG', editedBlog)
      return editedBlog
    },
    async deleteBlog({ commit }, blog) {
      await axios().delete(`/blogs_a/${blog.id}`, blog)
      commit('DELETE_BLOG', blog.id)
    }
  }
})