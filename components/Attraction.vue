<template>
  <div class="component">
    <img class="attractionImg" :src="attraction.imgSrc" />
    <div class="info">
      <h1 class="attractionTitle">{{ attraction.name }}</h1>
      <p class="attractionStats">{{ attraction.type }} - Min. Height: {{ attraction.minHeight}} in.</p>
    </div>
    <div class="actions">
      <button class="queueButton">Get in Queue</button>
      <nuxt-link :to="'attractions/' + attraction.id">See more</nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Attraction',
    props: {
      attraction: Object
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

  .attractionImg {
    max-height: 100px;
    max-width: 150px;
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