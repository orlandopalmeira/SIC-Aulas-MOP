import { createRouter, createWebHistory } from 'vue-router';

import ListGames from './views/ListGames.vue';
import AddGame from './views/AddGame.vue';
import LoginPage from './views/LoginPage.vue';
import GameShow from './components/GameShow.vue';

const routes = [
    {
        path: '/',
        component: LoginPage
    },
    {
        path: '/listGames',
        name: 'ListGames',
        component: ListGames,
        children: [
            {
                path: 'game/:id',
                name: 'GameShow',
                component: GameShow,
                props: true
            }
        ]   
    },
    {
        path: '/listGames/:user',
        name: 'ListGamesUser',
        component: ListGames,
        props: true
    },
    {
        path: '/addGame',
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
