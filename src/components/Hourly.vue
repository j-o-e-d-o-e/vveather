<template>
  <i @click="pre" class="fas fa-angle-left" style="margin-right: 15px"></i>
  <div v-for="hour in hours.slice(index, index + step)" :key="hour" class="grid-container">
    <div class="grid-item">
      <div>{{ toTime(hour.dt) }}</div>
      <img :src="`https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`" alt="icon">
      <div>
        <i :class="thermometer(hour.temp)"></i> <small>{{ Math.floor(hour.temp) }}°</small>
      </div>
      <div>
        <i class="fas fa-cloud-rain"></i> <small>{{ Math.floor(hour.pop * 100) }}%</small>
      </div>
    </div>
  </div>
  <i @click="post" class="fas fa-angle-right"></i>
</template>

<script>
import moment from "moment";

export default {
  name: 'Hours',
  props: {
    hours: Array,
  },
  data() {
    return {
      index: 0,
      step: 6
    }
  },
  methods: {
    toTime(t) {
      return moment(new Date(t * 1000)).format('HH:mm');
    },
    pre() {
      if (this.index !== 0) this.index -= this.step;
    },
    sliceHours() {
      return this.hours.slice(this.index, this.index + this.step);
    },
    post() {
      if (this.index + this.step < this.hours.length) this.index += this.step;
    },
    thermometer(temp) {
      if (temp > 25) return "fas fa-thermometer-full";
      else if (temp > 20) return "fas fa-thermometer-three-quarters";
      else if (temp > 10) return "fas fa-thermometer-half";
      else if (temp > 5) return "fas fa-thermometer-quarter";
      else return "fas fa-thermometer-empty";
    }
  }
}
</script>

<style>
.grid-container {
  display: inline-grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
}

img {
  width: 40px;
  height: 40px;
}

button {
  background-color: cornflowerblue;
}
</style>
