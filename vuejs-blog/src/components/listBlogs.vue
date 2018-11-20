<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>List Blog Articles</h1>
    <input type="text" v-model="search" placeholder="search blogs" />
    <div v-for="blog in filteredBlogs" class="single-blog">
      <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
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
    this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data){
      this.blogs = data.body.slice(0,10);
    });
  },
  computed: {
        // filteredBlogs: function(){
        //     return this.blogs.filter((blog) => {
        //         return blog.title.match(this.search);
        //     });
        // }
    },
    filters: {
      // toUppercase(value) {
      //   return value.toUpperCase();
      // },
      // snippet(value) {
      //   return value.slice(0,100) + '...';
      // }
    },
    directives: {
      // 'rainbow': {
      //   bind(el, binding, vnode) {
      //     el.style.color = '#' + Math.random().toString(16).slice(2, 8);
      //   }
      // },
      // 'theme': {
      //   bind(el, binding, vnode) {
      //     if (binding.value === 'wide') {
      //       el.style.maxWidth = '1260px';
      //     } else if (binding.value === 'narrow') {
      //       el.style.maxWidth = '560px';
      //     }
      //     if(binding.arg === 'column') {
      //       el.style.background = '#ddd';
      //       el.style.padding = '20px';
      //     }
      //   }
      // }
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
</style>
