<template>
  <div class="page">
    <Menu />
    <div class="container">
      <div>
        <h1 class="title-main">
          Map
        </h1>
        <img class="map" :src="require('@/assets/lagoonmap.png')" />
      </div>
    </div>
  </div>
</template>

<style>
  .map {
    width: 70%;
  }
</style>