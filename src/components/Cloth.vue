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
      const rain = Math.floor(this.today.pop * 100)
      const now = new Date();
      let feelsLike = now.getHours() > 18 ?
          Math.floor((this.today.feels_like.eve + this.today.feels_like.night) / 2)
          : Math.floor(this.today.feels_like.day);
      let cloths = [];

      if (this.today.wind_speed < 10 && ((rain > 0.5 && feelsLike < 15) || rain > 0.75)) cloths.push(svg("umbrella"));

      if (feelsLike < 15) cloths.push(svg("winter-hat"))
      else if (now.getHours() < 18 && feelsLike > 25 && this.today.clouds < 10) cloths.push(svg("summer-hat"))

      if (feelsLike < 5) cloths.push(svg("scarf"))

      if (feelsLike < 15) cloths.push(svg("winter-coat"));
      else if (rain > 0.5) cloths.push(svg("rain-coat"));
      else if (feelsLike < 25) cloths.push(svg("summer-jacket"));

      if (feelsLike < 15) cloths.push(svg("winter-sweater"));
      else if (feelsLike < 25) cloths.push(svg("summer-sweater"));
      else cloths.push(svg("tshirt"));

      if (feelsLike < 5) cloths.push(svg("gloves"))

      if (feelsLike > 30) cloths.push(svg("summer-pants"))
      else cloths.push(svg("jeans"))

      if (feelsLike < 25) cloths.push(svg("socks"));

      if (feelsLike < 10) cloths.push(svg("winter-boots"))
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
