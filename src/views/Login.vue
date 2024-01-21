<template>
    <div class="login">
      <h1>Login</h1>
      <form @submit.prevent="login">
        <div>
          <label for="username">Username</label>
          <input id="username" v-model="credentials.username" type="text" required>
        </div>
        <div>
          <label for="password">Password</label>
          <input id="password" v-model="credentials.password" type="password" required>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useStore } from 'vuex';
  
  export default {
    setup() {
      const store = useStore();
      const credentials = ref({ username: '', password: '' });
  
      const login = () => {
        if (credentials.value.username && credentials.value.password) {
          // For the purpose of this example, we just simulate login
          store.dispatch('setAuthUser', credentials.value);
          credentials.value = { username: '', password: '' };
        }
      };
  
      return {
        credentials,
        login
      };
    }
  };
  </script>
  
  <style scoped>
.login {
  max-width: 400px;
  margin: 40px auto;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.login h1 {
  margin-bottom: 1rem;
  color: #333;
}

.login form {
  display: flex;
  flex-direction: column;
}

.login label {
  margin-bottom: 0.5rem;
}

.login input {
  padding: 10px;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.login button {
  padding: 10px 15px;
  background: #337ab7;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login button:hover {
  background: #286090;
}
</style>
  