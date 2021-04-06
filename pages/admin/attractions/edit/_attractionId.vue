<template>
  <div class="container">
    <div>
      <h1 class="title">
        {{attractions.attraction[0].name}} Edit page
      </h1>
      <form class="vue-form" @submit.prevent="submit">
        <fieldset>
          <div>
            <label class="label" for="name">Name</label>
            <input type="text" name="name" id="name" required="" v-model="attractions.attraction[0].name">
          </div>
          <div>
            <label>Type</label>
            <span class="select">
              <select class="budget" v-model="attractions.attraction[0].type">
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
            <input type="text" name="minHeight" id="minHeight" v-model="attractions.attraction[0].minHeight">
          </div>
          <div>
            <label class="label" for="rating">Rating</label>
            <input type="text" name="rating" id="rating" v-model="attractions.attraction[0].rating">
          </div>
          <div>
            <label class="label" for="totalRatings">Total Ratings</label>
            <input type="text" name="totalRatings" id="totalRatings"  v-model="attractions.attraction[0].totalRatings">
          </div>
          <div>
            <label class="label" for="description">Description</label>
            <textarea class="message" name="description" id="description" required="" v-model="attractions.attraction[0].description"></textarea>
          </div>
          <div>
            <label class="label" for="imgSrc">Main Image Source</label>
            <input type="text" name="imgSrc" id="imgSrc" v-model="attractions.attraction[0].imgSrc">
          </div>
          <div>
            <label class="label" for="imgThumb">Image Thumbnail</label>
            <input type="text" name="imgThumb" id="imgThumb" v-model="attractions.attraction[0].imgThumb">
          </div>
          <div>
            <input type="submit" value="Edit Attraction">
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
import {mapState} from 'vuex'

export default Vue.extend({
  // root node
  name: 'app',
  created () {
        this.$store.dispatch('attractions/getAttraction', this.$route.params.attractionId)
    },
  computed: mapState([
    'attractions'
  ]),
  methods: {
    // submit form handler
    submit: function() {
      const attraction = {
        id: this.attractions.attraction[0].id,
        name: this.attractions.attraction[0].name,
        type: this.attractions.attraction[0].type,
        description: this.attractions.attraction[0].description,
        minHeight: this.attractions.attraction[0].minHeight,
        rating: this.attractions.attraction[0].rating,
        totalRatings: this.attractions.attraction[0].totalRatings,
        imgSrc: this.attractions.attraction[0].imgSrc,
        imgThumb: this.attractions.attraction[0].imgThumb
      }
      this.$store.dispatch('attractions/updateAttraction', attraction)
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
