<template>
  <div class="page">
    <Menu />
    <div class="container">
      <div>
        <h1 class="title-main">
          Queue Add page
        </h1>
        <form class="vue-form" @submit.prevent="submit">
          <fieldset>
            <div>
              <label class="label" for="name">Name</label>
              <input type="text" name="name" id="name" required="" v-model="name">
            </div>
            <div>
              <label>Type</label>
              <span class="select">
                <select class="budget" v-model="type">
                  <option value="Attractions">Attractions</option>
                  <option value="Family">Family</option>
                  <option value="Kiddie">Kiddie</option>
                  <option value="Roller Coaster">Roller Coaster</option>
                  <option value="Thrill">Thrill</option>
                  <option value="Water">Water</option>
                  <option value="X-Venture">X-Venture</option>
                </select>
              </span>
            </div>
            <div>
              <label class="label" for="minHeight">Min. Height</label>
              <input type="text" name="minHeight" id="minHeight" v-model="minHeight">
            </div>
            <div>
              <label class="label" for="rating">Rating</label>
              <input type="text" name="rating" id="rating" v-model="rating">
            </div>
            <div>
              <label class="label" for="totalRatings">Total Ratings</label>
              <input type="text" name="totalRatings" id="totalRatings"  v-model="totalRatings">
            </div>
            <div>
              <label class="label" for="textarea">Description</label>
              <textarea class="message" name="textarea" id="textarea" required="" 
                        v-model="description"></textarea>
            </div>
            <div>
              <input type="submit" value="Add Attraction">
            </div>
          </fieldset>
        </form>
        <div class="links">
          <nuxt-link to='/'>Home</nuxt-link>
        </div>
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
      name: "Attraction Name",
      type: "Attractions",
      description: "",
      minHeight: 0,
      rating: 0,
      totalRatings: 0,
    };
  },
  methods: {
    // submit form handler
    submit: function() {
      const attraction = {
        name: this.name,
        type: this.type,
        description: this.description,
        minHeight: this.minHeight,
        rating: this.rating,
        totalRatings: this.totalRatings,
      }
      this.$store.dispatch('attractions/addAttraction', attraction)
      this.name = "Attraction Name"
      this.type = "Attractions"
      this.description = ""
      this.minHeight = 0
      this.rating = 0
      this.totalRatings = 0
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
