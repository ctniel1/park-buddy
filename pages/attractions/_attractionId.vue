<template>
  <div class="page">
    <Menu />
    <div class="container">
      <div>
        <div class="links" v-if="users.loggedInUser">
          <nuxt-link :to="'/admin/attractions/edit/' + this.$route.params.attractionId">Edit Attraction</nuxt-link>
          <nuxt-link :to="'/admin/queues/add/' + this.$route.params.attractionId">Add a Queue</nuxt-link>
        </div>
        <div class="mainAttraction">
          <img v-if="attractions.attraction[0].imgSrc" class="attractionImage" :src="attractions.attraction[0].imgSrc" />
          <p v-else>No Image Found</p>
          <h1 class="title-main">{{attractions.attraction[0].name}}</h1>
          <span v-if="users.loggedInUser" v-on:click="getInQueue"><button>Get In Queue</button></span>
          <p class="attractionDescription">{{attractions.attraction[0].description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  name: 'app',
  
  computed: mapState([
    'attractions',
    'users'
  ]),
  data () {
    return {
      
      }
    },
  methods: {
    getInQueue: function() {
        console.log('Getting in queue')
        const userQueue = {
          userId: this.users.loggedInUser.id,
          attractionId: this.attractions.attraction[0].id
        }
        this.$store.dispatch('queues/getInQueue', userQueue)
      }
  }
})
</script>

<style>
  .mainAttraction {
    width: 50%;
    margin: auto;
  }

  .attractionImage {
    height: 300px;
  }

  .attractionDescription {
    color: #FFC347;
    font-weight: bold;
  }
</style>
