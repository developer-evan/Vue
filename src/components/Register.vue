<template>
  <div class="page">
    <h2>Register</h2>
    <form @submit.prevent="register" class="register-form">
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input v-model="firstName" type="text" id="firstName" />
      </div>
      <div class="form-group">
        <label for="lastName">Last Name</label>
        <input v-model="lastName" type="text" id="lastName" />
      </div>
      <div class="form-group">
        <label for="phoneNumber">Phone Number</label>
        <input v-model="phoneNumber" type="text" id="phoneNumber" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input v-model="password" type="password" id="password" />
      </div>
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
      
    }
  }
};
</script>

<style>
.page {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  color: #45a049;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.register-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
}

button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

button:hover {
  background-color: #45a049;
}

input {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  transition: border-color 0.2s ease-in-out;
}

input:focus {
  outline: none;
  border-color: #4caf50;
}

</style>
