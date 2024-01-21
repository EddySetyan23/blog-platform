import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import PostDetail from '@/views/PostDetail.vue';
import CreatePost from '@/views/CreatePost.vue';
import Login from '@/views/Login.vue';


const routes = [
  { path: '/create-post', component: CreatePost },
  { path: '/login', component: Login },
  { path: '/', component: Home },
  { path: '/posts/:id', component: PostDetail },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
