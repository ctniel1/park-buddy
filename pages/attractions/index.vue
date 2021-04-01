<template>
  <div class="container">
    <div>
      <h1 class="title">
        Attractions
      </h1>
      <h3>
        A list of all the current attractions
      </h3>
      <div class="links">
        <nuxt-link to='/'>Back to Home</nuxt-link>
      </div>
      <div v-for="ride in attractions.attractions[0].attractions" :key="ride.id">
        <Attraction v-bind:attraction="ride" />
      </div>
    </div>
  </div>
</template>

<script>
import Attraction from '../../components/Attraction'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'app',
  
  components: {
    Attraction
  },
  computed: mapState([
    'attractions'
  ]),
  data () {
    return {

      }
    },
  methods: {
    
  }
}
</script>
