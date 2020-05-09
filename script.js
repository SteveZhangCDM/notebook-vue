var app = new Vue({
  el: '#app',
  data: {
    list: ['study Vue', 'play overwatch', 'practice in leetcode'],
    inputvalue: 'study hard',
  },
  methods: {
    add: function () {
      this.list.push(this.inputvalue);
    },
  },
});
