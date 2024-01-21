import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      posts: [
        {
            id: 1,
            title: "First Post",
            content: "<p>This is my first post. I'm just getting started!</p>",
        },
        {
            id: 2,
            title: "Second Post",
            content: "<p>This is second post, acting as a temporary placeholder</p>",
        },
        {
            id: 3,
            title: "Third Post",
            content: "<p>This is my third post, acting as a temporary placeholder</p>",
        }

      ],
      authUser: null,
    };
  },
  mutations: {
    LOGOUT(state) {
        state.authUser = null;
      },
    
    ADD_POST(state, post) {
      state.posts.push(post);
    },
    SET_AUTH_USER(state, user) {
      state.authUser = user;
    },
  },
  actions: {
    addPost({ commit }, post) {
      commit('ADD_POST', post);
    },
    setAuthUser({ commit }, user) {
      commit('SET_AUTH_USER', user);
    },
  },
  getters: {
    getPosts(state) {
      return state.posts;
    },
    isUserAuthenticated(state) {
      return !!state.authUser;
    },
  },
});
