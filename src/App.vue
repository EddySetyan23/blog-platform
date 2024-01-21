<template>
  <button v-if="isLoggedIn" @click="logout">Logout</button>

  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/create-post">Create Post</router-link>
      <router-link to="/login">Login</router-link>
      <button v-if="isLoggedIn" @click="logout">Logout</button>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    const isLoggedIn = computed(() => {
      return store.getters.isUserAuthenticated;
    });

    function logout() {
      store.commit('LOGOUT');  // This will set authUser to null
      router.push('/');        // This will navigate to the home page
    }

    return {
      isLoggedIn,
      logout
    };
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
