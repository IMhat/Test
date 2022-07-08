<template>
  <div class="home">
    
    <Characters/>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Characters from '@/components/Characters.vue'
import Character from '@/components/Character.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Characters,
    Character
  },


}
</script>
