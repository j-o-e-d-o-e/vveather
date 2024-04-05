<template>
  <section v-if="!loading">
    <section v-if="settings">
      <Settings :params="params" @settings="setParams" @cancel="$emit('settings')"/>
    </section>
    <section v-else>
      <Current :current="weather.current"></Current>
      <hr>
      <Hourly :hours="weather.hourly"/>
      <hr>
      <Daily :days="weather.daily"/>
      <hr>
      <Misc :current="weather.current"/>
      <hr>
      <Cloth :today="weather.daily[0]"/>
    </section>
  </section>
</template>

<script>
import Settings from '../components/Settings'
import Current from '../components/Current'
import Hourly from '../components/Hourly'
import Daily from '../components/Daily'
import Misc from '../components/Misc'
import Cloth from "@/components/Cloth.vue";

const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export default {
  name: 'Home',
  components: {
    Settings,
    Current,
    Hourly,
    Daily,
    Misc,
    Cloth
  },
  props: {
    settings: Boolean
  },
  data() {
    return {
      weather: Object,
      loading: true,
      params: {
        lat: localStorage.getItem("vveather-lat"),
        lon: localStorage.getItem("vveather-lon"),
        apikey: localStorage.getItem("vveather-apikey"),
        lang: localStorage.getItem("vveather-lang") ?? "en"
      }
    }
  },
  async created() {
    await this.initData();
    this.loading = false;
  }, methods: {
    async initData(url = `${BASE_URL}/onecall?lat=${this.params.lat}&lon=${this.params.lon}&lang=${this.params.lang}&units=metric&exclude=minutely&appid=${this.params.apikey}`) {
      const res = await fetch(url);
      this.weather = await res.json();
    },
    async setParams(params) {
      this.loading = true;
      this.$emit('settings');
      localStorage.setItem("vveather-lat", params.lat);
      localStorage.setItem("vveather-lon", params.lon);
      localStorage.setItem("vveather-apikey", params.apikey);
      localStorage.setItem("vveather-lang", params.lang);
      this.params = params;
      await this.initData();
      this.loading = false;
    }
  },
  emits: ['settings']
}
</script>
