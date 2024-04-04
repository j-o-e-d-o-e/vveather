<template>
  <div class="grid-container">
    <div class="grid-item">
      <i class="fas fa-wind"></i> {{ windDir + ', ' + current.wind_speed + ' km/h' }}
    </div>
    <div class="grid-item">
      Feels like {{ Math.floor(current.feels_like) }}°
    </div>
    <div class="grid-item">
      <i class="fas fa-sun"></i> {{ sunrise }}
    </div>
    <div class="grid-item">
      <i class="far fa-sun"></i> {{ sunset }}
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: 'Misc',
  props: {
    current: Object
  },
  computed: {
    sunrise() {
      return moment(new Date(this.current.sunrise * 1000)).format('HH:mm');
    },
    sunset() {
      return moment(new Date(this.current.sunset * 1000)).format('HH:mm');
    },
    windDir() {
      if (this.current.wind_deg < 45) return 'North'
      else if (this.current.wind_deg < 135) return 'West'
      else if (this.current.wind_deg < 225) return 'South'
      else if (this.current.wind_deg < 315) return 'East'
      else return 'North'
    }
  }
}
</script>

<style scoped>
.grid-container {
  display: inline-grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
}
</style>