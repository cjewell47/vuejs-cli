<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="search blogs" />
    <div v-for="blog in filteredBlogs" class="single-blog">
      <router-link v-bind:to="'/blog/' + blog.id"><h2 v-rainbow>{{ blog.title | to-uppercase }}</h2></router-link>
      <article>{{ blog.content | snippet }}</article>
    </div>
  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin';
import filterMixin from '../mixins/filterMixin';
import directiveMixin from '../mixins/directiveMixin';

export default {
  data () {
    return {
      blogs: [],
      search: ''
    }
  },
  methods: {
  },
  created() {
    this.$http.get('https://vuejs-blog-1689c.firebaseio.com/posts.json').then(function(data) {
      return data.json();
    }).then(function(data) {
      var blogsArray = [];
      for (let key in data) {
        data[key].id = key;
        blogsArray.push(data[key]);
      }
      this.blogs = blogsArray;
    })
  },
  computed: {
  },
  filters: {
  },
  directives: {
  },
  mixins: [
    searchMixin,
    filterMixin,
    directiveMixin
  ]
}
</script>

<style>
  #show-blogs{
    max-width: 800px;
    margin: 0px auto;
  }
  .single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
  }

  #show-blogs a{
    color: #444;
    text-decoration: none;
  }
</style>
