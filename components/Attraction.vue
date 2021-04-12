<template>
  <div class="component">
    <img class="attractionThumb" :src="attraction.imgThumb" />
    <div class="info">
      <h1 class="attractionTitle">{{ attraction.name }}</h1>
      <p class="attractionStats">{{ attraction.type }} - Min. Height: {{ attraction.minHeight}} in.</p>
    </div>
    <div class="actions">
      <span v-on:click="getInQueue"><button v-if="users.loggedInUser" class="queueButton">Get in Queue</button></span>
      <span v-on:click="loadAttraction">
        <nuxt-link :to="'attractions/' + attraction.id">See more</nuxt-link>
      </span>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'Attraction',
    props: {
      attraction: Object
    },
    computed: mapState([
    'users'
    ]),
    methods: {
      loadAttraction: function() {
        console.log("Trying to load")
        this.$store.dispatch('attractions/getAttraction', this.attraction.id)
      },
      getInQueue: function() {
        console.log('Getting in queue')
        const userQueue = {
          userId: this.users.loggedInUser.id,
          attractionId: this.attraction.id
        }
        this.$store.dispatch('queues/getInQueue', userQueue)
      }
    }
  }
</script>

<style>
  .component {
    display: flex;
    padding: 15px;
    border: 2px solid #FFC347;
    border-radius: 15px;
    width: 1000px;
    align-items: center;
    justify-content: space-between;
  }

  .attractionThumb {
    max-height: 256px;
    max-width: 215px;
    margin: 5px;
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .attractionTitle {
    margin-bottom: 15px;
    color:#FFC347;
  }

  .actions {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  .queueButton {
    margin-bottom: 15px;
  }
</style>