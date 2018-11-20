export default {
  directives: {
    'rainbow': {
      bind(el, binding, vnode) {
        el.style.color = '#' + Math.random().toString(16).slice(2, 8);
      }
    },
    'theme': {
      bind(el, binding, vnode) {
        if (binding.value === 'wide') {
          el.style.maxWidth = '1260px';
        } else if (binding.value === 'narrow') {
          el.style.maxWidth = '560px';
        }
        if(binding.arg === 'column') {
          el.style.background = '#ddd';
          el.style.padding = '20px';
        }
      }
    }
  }
};
