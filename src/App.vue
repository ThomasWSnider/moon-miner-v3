// JS
<script setup>
import { computed } from 'vue'
import { AppState } from './AppState.js'
import { energyService } from "./services/EnergyService.js";

const energy = computed(() => AppState.energy)

function gatherEnergy() {
  energyService.gatherEnergy()
}
</script>


// HTML
<template>
  <main>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-3 text-center">
          <h1>Moon Miner</h1>
        </div>
      </div>
      <div class="row">
        <div id="galaxy" class="col-8 d-flex justify-content-center">
          <div class="align-self-center">
            <button @click="gatherEnergy()" class="btn btn-warning rounded-pill">Collect Energy</button>
          </div>
        </div>
        <div class="col-4">
          <div  class="text-center">
            <h3>⚡: {{ energy }}</h3>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>


// styles
<style lang="scss">
@import "./assets/scss/main.scss";

#galaxy{
  background-image: url(/src/assets/img/Galaxy-Oil-Painting.png);
  background-size: cover;
  background-position: center;
  height: 60vh;
  aspect-ratio: 1;
}

</style>
