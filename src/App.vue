<template>
  <div class="app">
    <nav class="nav">
      <a class="nav-link" href="/">Login</a> |
      <a class="nav-link" href="#/register">Register</a> |
      <a class="nav-link" href="#/profile">Profile</a>
    </nav>
    <component :is="currentView" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Profile from './components/Profile.vue'


const routes = {
  '/': Login,
  '/register': Register,
  '/profile': Profile,
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || Login
})
</script>

<style>
.app {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
}

.nav {
  margin-bottom: 20px;
}

.nav-link {
  text-decoration: none;
  color: #fff;
  margin-right: 10px;
}
</style>
