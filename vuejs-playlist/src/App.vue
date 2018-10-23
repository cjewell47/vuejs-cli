<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ greeting() }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'First Vue file'
    }
  },
  methods: {
    greeting: function() {
      return 'What is up'
    }
  }
}
</script>

<style>

</style>
