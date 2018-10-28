<template>
  <ul>
    <li v-for="ninja in ninjas">{{ ninja }}</li>
  </ul>
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

<style>

</style>
