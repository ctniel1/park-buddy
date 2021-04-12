<template>
  <div class="page">
    <Menu />
    <div class="attraction-container">
      <h1 class="title-main">Attraction Management Page</h1>
      <nuxt-link to="/admin/attractions/add">Add New Attraction</nuxt-link>
      <table>
        <thead>
          <tr>
            <th v-for="column in columns" v-bind:key="column.id">
              {{ column }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="attraction in attractions.attractions[0].attractions" v-bind:key="attraction.id">
            <td>{{ attraction.name }}</td>
            <td>{{ attraction.description }}</td>
            <td>{{ attraction.type }}</td>
            <td>{{ attraction.minHeight }}</td>
            <td>{{ attraction.imgSrc }}</td>
            <td>{{ attraction.imgThumb }}</td>
            <td><nuxt-link :to="'/admin/attractions/edit/' + attraction.id">Edit</nuxt-link></td>
            <td><button v-on:click="deleteAttraction(attraction.id)">Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'app',
  
  computed: mapState([
    'attractions'
  ]),
  data () {
    return {
        columns: [
          'Name',
          'Description',
          'Type',
          'Min Height',
          'Main Image',
          'Thumbnail Image'
        ]
      }
    },
  methods: {
    deleteAttraction: function(attractionId) {
      console.log(attractionId)
      this.$store.dispatch('attractions/deleteAttraction', attractionId)
    }
  }
}
</script>

<style>
  table {
    color: #FFC347;
  }
</style>