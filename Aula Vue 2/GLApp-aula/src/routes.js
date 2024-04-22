import { createRouter, createWebHistory } from 'vue-router';

import ListGames from './views/ListGames.vue';
import LoginPage from './views/LoginPage.vue';
import AddGame from './views/AddGame.vue';

const routes = [
    {
        path: '/',
        component: LoginPage
    },
    {
        path: '/listGames',
        name: 'ListGames',
        component: ListGames  
    },
    {
        path: '/listGames/:user',
        name: 'ListGamesUser',
        component: ListGames,
        props: true
    },
    {
        path: '/addgame/:user',
        name: 'AddGame',
        component: AddGame
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/'
    }
    // Add more routes here
]

const router = createRouter({
    history: createWebHistory(),
    routes 
});

export default router;
