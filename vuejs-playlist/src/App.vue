<template>
  <div>
    <app-header v-bind:title="title" v-on:changeTitleEvent="updateTitle($event)"></app-header>
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Ninjas from './components/Ninjas.vue'

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-ninjas': Ninjas
  },
  data () {
    return {
      ninjas: [
        {name: 'Michael', speciality: 'Vue Components', show: false},
        {name: 'Jeffrey', speciality: 'HTML Wizardry', show: false},
        {name: 'Peter', speciality: 'Click Events', show: false},
        {name: 'Jonathan', speciality: 'Conditionals', show: false},
        {name: 'Timothy', speciality: 'Webpack', show: false},
        {name: 'Greg', speciality: 'Data Diggin', show: false}
      ],
      title: 'Vue Ninjas'
    }
  },
  methods: {
    updateTitle: function(updatedTitle) {
      this.title = updatedTitle;
    }
  }
}
</script>

<style>

</style>
