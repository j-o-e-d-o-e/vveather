<template>
  <div class="table-responsive">
    <table class="table">
      <tr>
        <td v-for="hour in hours" :key="hour">
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
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: 'Hours',
  props: {
    hours: Array,
  },
  methods: {
    toTime(t) {
      return moment(new Date(t * 1000)).format('HH:mm');
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

<style scoped>
.grid-item {
  width: 130px;
}
</style>
