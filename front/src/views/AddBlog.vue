<template>
      <form>
        <input
          v-model="blog.title"
          label="Title"
          placeholder="タイトル"
        ><br>
        <textarea
          v-model="blog.body"
          label="Body"
          placeholder="本文"
        ></textarea><br>
        <button class="mr-4" @click="onSubmit">Create</button>
      </form>
</template>

<script>
export default {
  data() {
    return {
      blog: {},
    }
  },
  methods: {
    async onSubmit() {
        const blog = await this.$store.dispatch('addBlog', this.blog)
        this.$router.push({ name: 'show-blog', params: { id: blog.id }})
    }
  }
}
</script>
<style>
  form{
    margin-bottom:40px;
  }
  input,textarea{
    width:300px;
  }
  textarea{
    height:120px;
  }
</style>