<template>
  <div>
    <h1>{{ attraction.name }}</h1>
    <p>{{ attraction.description }}</p>
    <nuxt-link :to="'attractions/' + attraction.id">Check it out</nuxt-link>
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