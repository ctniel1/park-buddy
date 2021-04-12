<template>
  <div class="component">
    <div class="info">
      <h1 class="attractionTitle">{{ queue.name }}</h1>
      <p class="attractionStats">Your ride in: {{ queue.rate / 60 }} minutes</p>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'Queue',
    props: {
      queue: Object
    },
    computed: mapState([
    'users'
    ]),
    methods: {

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
    text-align: center;
    margin: auto;
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