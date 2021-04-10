<template>
  <div class="page">
    <Menu />
    <div class="attraction-container">
      <div>
        <h1 class="title">
          Queues
        </h1>
        <h3>
          A list of all the current queues
        </h3>
        <div class="links">
          <nuxt-link to='/'>Back to Home</nuxt-link>
        </div>
        <div v-for="queue in queues.userQueues[0].queues" :key="queue.id">
          <Queue class="attractionComponent" v-bind:queue="queue" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Queue from '../../components/Queue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'app',
  
  components: {
    Queue
  },
  computed: mapState([
    'queues'
  ]),
  data () {
    return {
        
      }
    },
  methods: {
    
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');

.attraction-container {
  margin: 0 auto;
  /* min-height: 100vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #3793BC;
}

.title-main {
  font-family: 'Lobster', cursive;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #FFC347;
  letter-spacing: 1px;
}

.links {
  padding-top: 15px;
}

.link {
  position: relative;
  text-align: center;
  color: #FFC347;
}

.feature-pic {
  height: 25vh;
  width: 10vw;
  border: 2px solid #FFC347;
  border-radius: 15px;
}

.img-text {
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: larger;
  font-weight: bold;
  text-shadow: 2px 2px black;
}

.attractionComponent {
  margin: 15px;
}
</style>