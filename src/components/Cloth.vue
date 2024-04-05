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
    today: Object,
  },
  computed: {
    clothing() {
      const svg = fn => fn + ".svg";

      let temp = now.getHours() > 18
          ? Math.floor((this.today.feels_like.eve + this.today.feels_like.night) / 2)
          : Math.floor(this.today.feels_like.day);
      const rainProb = Math.floor(this.today.pop * 100)
      const rainVol = Math.floor(this.today?.rain ?? 0);
      const now = new Date();
      const WINTER_COAT_HAT = 18;
      let cloths = [];

      if (this.today.wind_speed < 12
          && ((rainProb > 0.5 && temp < WINTER_COAT_HAT) || (rainProb > 0.75 && rainVol > 4))) cloths.push(svg("umbrella"));

      if (temp < WINTER_COAT_HAT) cloths.push(svg("winter-hat"))
      else if (now.getHours() < 18 && temp > 25 && this.today.clouds < 10) cloths.push(svg("summer-hat"))

      if (temp < 5) cloths.push(svg("scarf"))

      if (temp < WINTER_COAT_HAT) cloths.push(svg("winter-coat"));
      else if (rainProb > 0.5) cloths.push(svg("rain-coat"));
      else if (temp < 25) cloths.push(svg("summer-jacket"));

      if (temp < 15) cloths.push(svg("winter-sweater"));
      else if (temp < 25) cloths.push(svg("summer-sweater"));
      else cloths.push(svg("tshirt"));

      if (temp < 5) cloths.push(svg("gloves"))

      if (temp > 30) cloths.push(svg("summer-pants"))
      else cloths.push(svg("jeans"))

      if (temp < 25) cloths.push(svg("socks"));

      if (temp < 10) cloths.push(svg("winter-boots"))
      else cloths.push(svg("summer-shoes"))

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
