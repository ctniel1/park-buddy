<template>
  <div class="page">
    <Menu />
    <div class="container">
      <h1 class="title-main">Queue Management Page</h1>
      <nuxt-link to="/admin/queues/add">Add New Queue</nuxt-link>
      <table>
        <thead>
          <tr>
            <th v-for="column in columns" v-bind:key="column.id">
              {{ column }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="queue in queues.queues[0].queues" v-bind:key="queue.id">
            <td>{{ queue.name }}</td>
            <td>{{ queue.rate }}</td>
            <td>{{ queue.totalQueued }}</td>
            <td>{{ queue.status ? 'Enabled' : 'Disabled' }}</td>
            <td><nuxt-link :to="'/admin/queues/edit/' + queue.id">Edit</nuxt-link></td>
            <td><button v-on:click="deleteQueue(queue.id)">Delete</button></td>
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
    'queues'
  ]),
  data () {
    return {
        columns: [
          'Name',
          'Rate',
          'Total Queued',
          'Status',
        ]
      }
    },
  methods: {
    deleteQueue: function(queueId) {
      this.$store.dispatch('queues/deleteQueue', queueId)
    }
  }
}
</script>