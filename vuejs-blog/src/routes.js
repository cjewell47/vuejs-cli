import addBlog from './components/addBlog.vue';
import showBlogs from './components/showBlogs.vue';
import listBlogs from './components/listBlogs.vue';

export default [
  { path: '/show', component: showBlogs},
  { path: '/add', component: addBlog},
  { path: '/', component: listBlogs}
];
