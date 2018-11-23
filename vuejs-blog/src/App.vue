<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>

// import addBlog from './components/addBlog.vue';
// import showBlogs from './components/showBlogs.vue';
// import listBlogs from './components/listBlogs.vue';
import header from './components/header.vue';
export default {
  components: {
    'app-header': header
    // 'show-blogs': showBlogs,
    // 'list-blogs': listBlogs
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
  body {
    margin: 0;
  }
</style>
