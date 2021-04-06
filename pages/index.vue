<template>
  <div class="page">
    <Menu />
    <div class="container">
      <h1 class="title-main">
        Park Buddy
      </h1>
      <div class="links">
        <nuxt-link class="link" to='./attractions'>
          <img class="feature-pic" :src="require('@/assets/attraction.jpg')" />
          <div class="img-text">Attractions</div>
        </nuxt-link>
        <nuxt-link class="link" to='./queues'>
          <img class="feature-pic" :src="require('@/assets/queue.jpg')" />
          <div class="img-text">Queues</div>
        </nuxt-link>
        <nuxt-link class="link" to='./concessions'>
          <img class="feature-pic" :src="require('@/assets/food.jpg')" />
          <div class="img-text">Concessions</div>
        </nuxt-link>
        <nuxt-link class="link" to='./map'>
          <img class="feature-pic" :src="require('@/assets/map.jpeg')" />
          <div class="img-text">Map</div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
   created () {
        this.$store.dispatch('attractions/getAttractions')
        this.$store.dispatch('queues/getQueues')
        this.$store.dispatch('users/getUsers')
    },
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');

.container {
  margin: 0 auto;
  /* min-height: 100vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #3793BC;
  z-index: -1;
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
</style>
