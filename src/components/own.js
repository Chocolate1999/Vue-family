import Vue from 'vue'
Vue.directive('ccc', {
  inserted: function (el, binding) {
    el.textContent = Math.pow(binding.value, 2)
  },
  update: function (el, binding) {
    el.textContent = Math.pow(binding.value, 2)
  }
})
