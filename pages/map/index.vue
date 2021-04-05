<template>
  <div class="page">
    <Menu />
    <div class="container">
      <div>
        <h1 class="title">
          Map page
        </h1>
        <h3>
          An example of a map page will go here
        </h3>
        <img class="map" :src="require('@/assets/lagoonmap.png')" />
        <div class="links">
          <nuxt-link to='/'>Back to Home</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .map {
    width: 70%;
  }
</style>