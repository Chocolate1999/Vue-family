<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ddd/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ddd from '../components/ddd.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    ddd
  }
}
</script>
