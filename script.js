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
    deleteBtn: function (index) {
      console.log(index);
      this.list.splice(index, 1);
    },
    deleteAll: function () {
      this.list = [];
    },
  },
});
