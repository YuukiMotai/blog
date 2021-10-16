import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Blogs from '../views/Blogs.vue'
import Blog from '../views/Blog.vue'
import EditBlog from '../views/EditBlog.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/blogs',    // 追加
    name: 'blogs',
    component: Blogs
  },
  {
    path: '/blogs_a/:id',
    name: 'show-blog',
    component: Blog,
    params: true
  },
  {
    path: '/blogs_a/:id/edit',
    name: 'edit-blog',
    component: EditBlog,
    params: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
