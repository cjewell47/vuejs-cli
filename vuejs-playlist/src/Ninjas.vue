<template>
  <div class="">
    <h1>My Ninjas</h1>
    <ul>
      <li v-for="ninja in ninjas">{{ ninja }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ninjas: ['Jeffrey', 'Michael', 'Peter', 'Jonathan']
    }
  }
}
</script>

<style scoped>
  h1 {
    color: blue;
  }
</style>
