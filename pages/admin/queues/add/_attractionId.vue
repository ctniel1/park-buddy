<template>
  <div class="container">
    <div>
      <h1 class="title">
        Queue Add page
      </h1>
      <form class="vue-form" @submit.prevent="submit">
        <fieldset>
          <div>
            <label class="label" for="name">Name</label>
            <input type="text" name="name" id="name" required="" v-model="name" placeholder="Queue Name">
          </div>
          <div>
            <label class="label" for="attractionId">Attraction ID</label>
            <input type="text" name="attractionId" id="attractionId" required="" v-model="this.$route.params.attractionId">
          </div>
          <div>
            <label class="label" for="rate">Rate</label>
            <input type="text" name="rate" id="rate" v-model="rate">
          </div>
          <div>
            <label>Status</label>
            <span>
              <select v-model="status">
                <option value="0">Disabled</option>
                <option value="1">Active</option>
              </select>
            </span>
          </div>
          <div>
            <input type="submit" value="Add Queue">
          </div>
        </fieldset>
      </form>
      <div class="links">
        <nuxt-link to='/'>Home</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  // root node
  name: 'app',
  // the instance state
  data: function() {
    return {
      name: "",
      rate: 0,
      status: 0,
    };
  },
  methods: {
    // submit form handler
    submit: function() {
      const queue = {
        name: this.name,
        attractionId: this.$route.params.attractionId,
        rate: this.rate,
        totalQueued: 0,
        status: this.status,
      }
      this.$store.dispatch('queues/addQueue', queue)
    },
  },
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
