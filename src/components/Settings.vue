<template>
  <h1>Settings</h1>
  <form @submit.prevent="submit">
    <div class="form-control">
      <label>Latitude</label>
      <input
          v-model="lat"
          placeholder="e.g. 90.0"
          name="lat"
          type="number"
          step="0.01"
          required/>
    </div>
    <div class="form-control">
      <label>Longitude</label>
      <input
          v-model="lon"
          placeholder="e.g. 45.0"
          name="lon"
          type="number"
          step="0.01"
          required/>
    </div>
    <div class="form-control">
      <label>API key</label>
      <input
          ref="apikey"
          v-model="apikey"
          placeholder="visit: https://openweathermap.org/"
          name="apikey"
          type="password"
          required/>
    </div>
    <div class="form-control">
      <label>Language</label>
      <select v-model="lang">
        <option value="en">English</option>
        <option value="fr">Francais</option>
        <option value="de">Deutsch</option>
      </select>
    </div>
    <button type="submit" class="btn btn-secondary">Save</button>
    <button @click="$emit('cancel')" class="btn btn-secondary">Cancel</button>
  </form>
</template>

<script>
export default {
  name: 'Settings',
  props: {
    params: Object
  },
  data() {
    return {
      lon: this.params.lon,
      lat: this.params.lat,
      apikey: this.params.apikey,
      lang: this.params.lang
    }
  },
  methods: {
    submit(e) {
      e.preventDefault();
      const newSettings = {
        lon: this.lon,
        lat: this.lat,
        apikey: this.apikey,
        lang: this.lang
      };
      this.$emit('settings', newSettings);
    }
  },
  emits: ['settings', 'cancel']
}
</script>

<style scoped>
.form-control {
  margin: 20px 0;
  color: antiquewhite;
  background-color: cornflowerblue;
  border: none;
}

.form-control label {
  display: block;
}

input, select {
  min-width: 600px;
}

button {
  min-height: 50px;
  min-width: 100px;
  margin: 5px;
}
</style>
