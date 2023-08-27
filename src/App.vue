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
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<template>
  <a href="/">Login</a> |
  <a href="#/register">Register</a> |
  <a href="#/profile">Profile</a>
  <component :is="currentView" />
</template>