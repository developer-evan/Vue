<template>
  <div class="page">
    <h2>Login</h2>
    <form @submit.prevent="login" class="login-form">
      <div class="form-group">
        <label for="phoneNumber">Phone Number</label>
        <input v-model="phoneNumber" type="text" id="phoneNumber" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input v-model="password" type="password" id="password" />
      </div>
      <button type="submit">
        <router-link to="/profile">Login</router-link>
      </button>
      <p>Don't have an account?
        <span>
          <router-link to="/register">Register Here</router-link>
        </span>
      </p>
    </form>
    <router-view></router-view>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'Login',
  setup() {
    const router = useRouter();

    const phoneNumber = ref('');
    const password = ref('');

    const login = () => {
      
      router.push('/profile');
    };

    return {
      phoneNumber,
      password,
      login,
    };
  },
};
</script>

<style scoped>

.page {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}
.page h2 {
  color: black;
}
.page p {
  color: black;
}
span {
  color: blue;
}
.login-form {
  display: flex;
  flex-direction: column;
}
.form-group {
  margin-bottom: 15px;
}
label {
  font-weight: bold;
  margin-bottom: 5px;
  color: black;
}
button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
input {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
input:focus {
  outline: none;
  border-color: #007bff;
}
input[type="submit"] {
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
