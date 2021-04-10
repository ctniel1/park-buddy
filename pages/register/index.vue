<template>
  <div class="container">
    <div>
      <h1 class="title">
        Register
      </h1>
      <form class="vue-form" @submit.prevent="submit">
        <fieldset>
          <div>
            <label class="label" for="firstName">First Name</label>
            <input type="text" name="firstName" id="firstName" required="" v-model="firstName">
          </div>
          <div>
            <label class="label" for="lastName">Last Name</label>
            <input type="text" name="lastName" id="lastName" required="" v-model="lastName">
          </div>
          <div>
            <label class="label" for="username">Username</label>
            <input type="text" name="username" id="username" required="" v-model="username">
          </div>
          <div>
            <label class="label" for="password">Password</label>
            <input type="password" name="password" id="password" required="" v-model="password">
          </div>
          <div>
            <label class="label" for="confirmPassword">Confirm Password</label>
            <input type="password" name="confirmPassword" id="confirmPassword" required="" v-model="confirmPassword">
          </div>
          <div>
            <label class="label" for="email">Email</label>
            <input type="email" name="email" id="email" required="" v-model="email">
          </div>
          <div>
            <label class="label" for="phone">Phone</label>
            <input type="phone" name="phone" id="phone" required="" v-model="phone">
          </div>
          <div>
            <input type="submit" value="Register">
          </div>
        </fieldset>
      </form>
      <div class="links">
        <nuxt-link to='/'>Home</nuxt-link>
        <nuxt-link to='/login'>Back to Login</nuxt-link>
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
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
      phone: ''
    };
  },
  methods: {
    // submit form handler
    submit: function() {
      const user = {
        firstName: this.firstName,
        lastName: this.lastName,
        username: this.username,
        password: this.password,
        email: this.email,
        phone: this.phone,
      }
      this.$store.dispatch('users/addUser', user)
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
