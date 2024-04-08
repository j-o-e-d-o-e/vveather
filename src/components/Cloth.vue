<template>
  <div v-for="(cloth, index) in clothing" :key="cloth" class="grid-container">
    <div class="grid-item">
      <img :src="`img/${cloth}`" alt="icon">
      <i v-bind:class="cloth"></i>
    </div>
    <div class="grid-item" id="plus" v-if="index !== clothing.length - 1">
      <i class="fas fa-plus fa-2x"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cloth',
  props: {
    hours: Object,
  },
  computed: {
    clothing() {
      const svg = fn => fn + ".svg";
      const now = new Date();
      const temp = Math.floor(this.hours.reduce((acc, cur) => acc + cur.temp, 0) / this.hours.length);
      const rainProb = Math.floor(this.hours.reduce((acc, cur) => acc + cur.pop * 100, 0) / this.hours.length);
      const windSpeed = Math.floor(this.hours.reduce((acc, cur) => acc + cur.wind_speed, 0) / this.hours.length);
      const clouds = Math.floor(this.hours.reduce((acc, cur) => acc + cur.clouds, 0) / this.hours.length);
      console.log(this.hours);
      console.log(`temp: ${temp}, rainProb: ${rainProb}, windSpeed: ${windSpeed}, clouds: ${clouds}`);
      const WINTER_COAT_HAT = 18;
      let cloths = [];

      if (windSpeed < 12 && ((rainProb > 50 && temp < WINTER_COAT_HAT) || rainProb > 75)) cloths.push(svg("umbrella"));

      if (temp < WINTER_COAT_HAT) cloths.push(svg("winter-hat"));
      else if (now.getHours() < 18 && temp > 25 && clouds < 10) cloths.push(svg("summer-hat"));

      if (temp < 5) cloths.push(svg("scarf"));

      if (temp < WINTER_COAT_HAT) cloths.push(svg("winter-coat"));
      else if (rainProb > 50) cloths.push(svg("rain-coat"));
      else if (temp < 25) cloths.push(svg("summer-jacket"));

      if (temp < 15) cloths.push(svg("winter-sweater"));
      else if (temp < 25) cloths.push(svg("summer-sweater"));
      else cloths.push(svg("tshirt"));

      if (temp < 5) cloths.push(svg("gloves"));

      if (temp > 30) cloths.push(svg("summer-pants"));
      else cloths.push(svg("jeans"));

      if (temp < 25) cloths.push(svg("socks"));

      if (temp < 10) cloths.push(svg("winter-boots"));
      else cloths.push(svg("summer-shoes"));

      return cloths;
    }
  }
}
</script>

<style scoped>
.grid-container {
  margin: 20px;
  display: inline-grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
  justify-items: center;
  align-items: center;
}

.grid-item {
  width: 100px;
}

#plus {
  color: coral;
}
</style>
