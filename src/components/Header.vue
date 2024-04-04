<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark container-fluid">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">{{ title }}</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link" aria-current="page">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <div @click="$emit('settings')"  v-show="$route.path==='/'" class="nav-link" aria-current="page">
              <i class="fas fa-cog"></i>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String
  },
  emits: ['settings']
};
</script>
