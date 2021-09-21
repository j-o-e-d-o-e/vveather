<template>
  <h3>About</h3>
  <p>
    Data from <a href="https://openweathermap.org/api/one-call-api" target="_blank">OpenWeather API</a>
  </p>
  <router-link to="/">Home</router-link>
</template>

<script>
export default {
  name: 'About',
  props: {
    settings: Boolean
  },
  emits: ['settings']
}
</script>
