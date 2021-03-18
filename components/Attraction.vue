<template>
  <div>
    <h1>I'm a component!</h1>
    <p>Attraction Id {{ attractionId }}</p>
  </div>
</template>

<script>
  export default {
    name: 'Attraction',
    props: {
      attractionId: Number
    }
  }
</script>