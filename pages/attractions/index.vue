<template>
  <div class="page">
    <Menu />
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
        attractions: {
          attractions: [
            {
              attractions: [
                {
                  id: 0,
                  name: 'Cannibal',
                  description: 'Cannibal – new for 2015 – lifts riders 208 feet and plunges them',
                  type: 'Roller Coaster',
                  minHeight: 48,
                  imgSrc: 'http://www.lagoonpark.com/wp-content/uploads/2015/02/Cannibal_HeaderFPO.jpg'
                },
              ]
            }
          ]
        }
      }
    },
  methods: {
    
  }
}
</script>
