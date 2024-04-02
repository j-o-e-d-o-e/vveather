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
    </section>
  </section>
</template>

<script>
import{BASE_URL, LAT, LON, LANG, API_KEY} from "@/util/weather-api";
import Settings from '../components/Settings'
import Current from '../components/Current'
import Hourly from '../components/Hourly'
import Daily from '../components/Daily'
import Misc from '../components/Misc'

export default {
  name: 'Home',
  components: {
    Settings,
    Current,
    Hourly,
    Daily,
    Misc
  },
  props: {
    settings: Boolean
  },
  data() {
    return {
      weather: Object,
      loading: true,
      params: {lat: LAT, lon: LON, lang: LANG}
    }
  },
  async created() {
    await this.initData();
    // await this.initData('http://localhost:5000/weather');
    this.loading = false;
  }, methods: {
    async initData(url = `${BASE_URL}/onecall?lat=${this.params.lat}&lon=${this.params.lon}&lang=${this.params.lang}&units=metric&exclude=minutely&appid=${API_KEY}`) {
      const res = await fetch(url);
      this.weather = await res.json();
    },
    async setParams(params) {
      this.loading = true;
      this.$emit('settings');
      this.params = params;
      await this.initData();
      this.loading = false;
    }
  },
  emits: ['settings']
}
</script>
