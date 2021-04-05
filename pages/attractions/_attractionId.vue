<template>
  <div class="page">
    <Menu />
    <div class="container">
      <div>
        <h1 class="title">
          Attraction Page <!--#{{this.$route.params.attractionId}}-->
        </h1>
        <p>
          {{attractions.attraction[0]}}
        </p>
        <div class="links">
          <nuxt-link to='../'>Home</nuxt-link>
          <nuxt-link to='./edit'>Edit Attraction</nuxt-link>
        </div>
        <div class="mainAttraction">
          <img class="attractionImage" :src="attractions.attraction[0].imgSrc" />
          <h1 class="attractionTitle">{{attractions.attraction[0].name}}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'

export default Vue.extend({
  name: 'app',
  
  mounted () {
        this.$store.dispatch('attractions/getAttraction', this.$route.params.attractionId)
    },
  computed: mapState([
    'attractions'
  ]),
  data () {
    return {
      attractions: {
          attraction: [
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
      }
    },
  methods: {
    ...mapActions({
      loadAttractions: 'loadAttractions' // map `this.add() to `this.$store.dispatch('add')`
    })
  }
})
</script>

<style>
  .attractionImage {
    height: 300px;
  }
</style>
