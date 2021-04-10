<template>
  <div class="container">
    <div>
      <h1 class="title">
        Login
      </h1>
      <form class="vue-form" @submit.prevent="submit">
        <fieldset>
          <div>
            <label class="label" for="username">Username</label>
            <input type="text" name="username" id="username" required="" v-model="username">
          </div>
          <div>
            <label class="label" for="password">Password</label>
            <input type="password" name="password" id="password" required="" v-model="password">
          </div>
          <div>
            <input type="submit" value="Login">
          </div>
          <nuxt-link to='./register'>Register</nuxt-link>
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
      username: "Enter Username",
      password: "",
    };
  },
  methods: {
    // submit form handler
    submit: function() {
      const user = {
        username: this.username,
        password: this.password,
      }
      this.$store.dispatch('users/loginUser', user)
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
