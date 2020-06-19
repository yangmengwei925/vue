<template>
  <div class="home">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
<style  scoped>
  .home{
    height:100%
  }
</style>
