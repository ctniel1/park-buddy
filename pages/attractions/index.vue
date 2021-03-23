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
      <div v-for="ride in rides" :key="ride.id">
        <Attraction v-bind:attraction="ride" />
      </div>
    </div>
  </div>
</template>

<script>
// 1. Import the number picker component
import Attraction from '../../components/Attraction'
export default {
  name: 'app',
  
  components: {
    // 2. Add the number-picker component as a dependency here
    Attraction
  },
  // 3. Create a data object with "min" = 0, "max" = 10, and "value" = 0 
  data () {
    return {
      min: 0,
      max: 10,
      value: 0,
      rides: [
        {
          name: 'Cannibal',
          id: 0,
          description: 'The Cannibal'
        },
        {
          name: 'Colossus',
          id: 1,
          description: 'I\'m bigger than you'
        },
        {
          name: 'Wicked',
          id: 2,
          description: 'Get wrecked fools'
        }
      ]
      }
    },
  methods: {
    ensureValidValue () {
      let num = this.value
      if (num < this.min) num = this.min
      if (num > this.max) num = this.max
      this.value = num
    },
    minChange (value) {
      this.min = value
      this.ensureValidValue()
    },
    maxChange (value) {
      this.max = value
      this.ensureValidValue()
    },
    valueChange (value) {
      this.value = value
    }
  }
}
</script>
