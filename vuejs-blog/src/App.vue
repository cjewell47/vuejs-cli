<template>
    <div>
        <show-blogs></show-blogs>
    </div>
</template>

<script>

import showBlogs from './components/showBlogs.vue';
export default {
    components: {
        'show-blogs': showBlogs
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
