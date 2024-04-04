<template>
  <table class="table">
    <thead>
    <td></td>
    <td></td>
    <td><b>Min</b></td>
    <td><b>Max</b></td>
    <td><b>Rain</b></td>
    <td><b>Clouds</b></td>
    </thead>
    <tr v-for="day in days" :key="day">
      <td>{{ toWeekday(day.dt) }}</td>
      <td><img :src="`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`" alt="icon"></td>
      <td>{{ Math.floor(day.temp.min) }}°</td>
      <td>{{ Math.floor(day.temp.max) }}°</td>
      <td>{{ Math.floor(day.pop * 100) }}%</td>
      <td>{{ Math.floor(day.clouds) }}%</td>
    </tr>
  </table>

</template>

<script>
import moment from "moment";

export default {
  name: 'Daily',
  props: {
    days: Object
  },
  methods: {
    toWeekday(t) {
      return moment(new Date(t * 1000)).format('dd');
    }
  }
}
</script>
