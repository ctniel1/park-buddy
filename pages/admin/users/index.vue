<template>
  <div class="page">
    <Menu />
    <div>
      <h1 class="title">User Management Page</h1>
      <table>
        <thead>
          <tr>
            <th v-for="column in columns" v-bind:key="column.id">
              {{ column }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users.users[0].users" v-bind:key="user.id">
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone }}</td>
            <td><nuxt-link :to="'/admin/users/edit/' + user.id">Edit</nuxt-link></td>
            <td><button>Delete</button></td>
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
    'users'
  ]),
  data () {
    return {
        columns: [
          'First Name',
          'Last Name',
          'Username',
          'Email',
          'Phone'
        ]
      }
    },
  methods: {
    
  }
}
</script>