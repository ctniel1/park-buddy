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
          <nuxt-link :to="'/admin/attractions/edit/' + this.$route.params.attractionId">Edit Attraction</nuxt-link>
          <nuxt-link :to="'/admin/queues/add/' + this.$route.params.attractionId">Add a Queue</nuxt-link>
        </div>
        <div class="mainAttraction">
          <img v-if="attractions.attraction[0].imgSrc" class="attractionImage" :src="attractions.attraction[0].imgSrc" />
          <p v-else>No Image Found</p>
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
  
  created () {
        this.$store.dispatch('attractions/getAttraction', this.$route.params.attractionId)
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
})
</script>

<style>
  .attractionImage {
    height: 300px;
  }
</style>
