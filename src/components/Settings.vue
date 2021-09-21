<template>
  <h1>Settings</h1>
  <form @submit="onSubmit">
    <div class="form-control">
      <label>Longitude</label>
      <input
          v-model="lon"
          :placeholder="lon"
          name="lon"
          type="number"
          step="0.0001"/>
    </div>
    <div class="form-control">
      <label>Latitude</label>
      <input
          v-model="lat"
          :placeholder="lat"
          name="lat"
          type="number"
          step="0.01"/>
    </div>
    <div class="form-control">
      <label>Language</label>
      <select v-model="lang">
        <option value="en">English</option>
        <option value="de">Deutsch</option>
        <option value="fr">Francais</option>
      </select>
    </div>
    <input type="submit" value="Save" class="btn btn-success"/>
    <input @click="$emit('cancel')" value="Cancel" class="btn btn-danger"/>
  </form>
</template>

<script>
export default {
  name: 'Settings',
  props: {
    params: Object
  },
  data: function () {
    return {
      lon: this.params.lon,
      lat: this.params.lat,
      lang: this.params.lang
    }
  },
  methods: {
    onSubmit: function (e) {
      e.preventDefault();
      const newSettings = {
        lon: this.lon,
        lat: this.lat,
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

input {
  max-width: 100px;
}
.btn{
  max-width: 90px;
}
</style>
