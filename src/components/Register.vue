<template>
    <div class="page">
      <h2>Register</h2>
      <form @submit.prevent="register">
        <input v-model="firstName" type="text" placeholder="First Name" />
        <input v-model="lastName" type="text" placeholder="Last Name" />
        <input v-model="phoneNumber" type="text" placeholder="Phone Number" />
        <input v-model="password" type="password" placeholder="Password" />
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        password: ''
      };
    },
    methods: {
      register() {
        // Handle registration logic here
      }
    }
  };
  </script>
  
  <style>
  /* Add your styles here */
  </style>
  