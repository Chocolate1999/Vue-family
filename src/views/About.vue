<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ddd/>
  </div>
</template>

<script>
// @ is an alias to /src
import ddd from '../components/ddd.vue'
export default {
  name: 'About',
  components: {
    ddd
  }
}
</script>
