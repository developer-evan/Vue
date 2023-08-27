<template>
    <div class="page">
      <h2>View Profile</h2>
      <div>
        <p><strong>First Name:</strong> {{ firstName }}</p>
        <p><strong>Last Name:</strong> {{ lastName }}</p>
        <p><strong>Phone Number:</strong> {{ phoneNumber }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        firstName: 'John', // Replace with actual data
        lastName: 'Doe',   // Replace with actual data
        phoneNumber: '123-456-7890' // Replace with actual data
      };
    }
  };
  </script>
  
  <style>
  /* Add your styles here */
  </style>
  