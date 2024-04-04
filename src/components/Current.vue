<template>
  <div>
    <h1>
      {{ Math.floor(current.temp) }}°
    </h1>
    <h3>
      <img :src="`https://openweathermap.org/img/wn/${this.current.weather[0].icon}@2x.png`" alt="icon">
      {{ description }}
    </h3>
  </div>
</template>

<script>
export default {
  name: 'Current',
  props: {
    current: Object
  }, computed: {
    description() {
      let s = this.current.weather[0].description;
      return s[0].toUpperCase() + s.slice(1);
    }
  }
}
</script>
