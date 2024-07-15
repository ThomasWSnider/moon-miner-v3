// JS
<script setup>
import { computed } from 'vue'
import { AppState } from './AppState.js'


</script>


// HTML
<template>
  <main>
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-3 text-center">
          <h1 class="text">Moon Miner</h1>
        </div>
      </div>
      <div class="row justify-content-center energy-button">
        <div class="col-2 align-self-center">
          <button class="btn btn-warning">Collect Energy</button>
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <h3 class="text">⚡: 0</h3>
        </div>
      </div>
    </div>
  </main>
</template>


// styles
<style lang="scss">
@import "./assets/scss/main.scss";

main {
  background-image: url(/src/assets/img/Galaxy-Oil-Painting.png);
  background-size: cover;
  background-position: center;
}

.text {
  color: whitesmoke;
  filter: drop-shadow(0 0 0.33em black);
}

.energy-button {
  height: 80vh;
}
</style>
